"use client";
import PopOver from "@/components/molecules/PopOver";
import HeadingSection from "@/components/organisms/HeadingSection";
import AppTable from "@/components/organisms/ResponsiveTable/ResponsiveTable";
import { popoverOptions } from "@/developmentContext/dropDownOption";
import {
  landlordInsightBodyData,
  landlordInsightTableHeader,
} from "@/developmentContext/landlordInsight";
import useAxios from "@/interceptor/axios-functions";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { Col, Container, Row } from "react-bootstrap";
import classes from "./LandlordInsightTemplate.module.css";

const LandlordInsightTemplate = () => {
  // HOOKS
  const { Get } = useAxios();

  // ROUTER
  const router = useRouter();

  // STATE
  const [loading, setLoading] = useState("");
  const [data, setData] = useState(landlordInsightBodyData);
  const [search, setSearch] = useState("");
  const [filter, setFilter] = useState("");
  const [totalRecords, setTotalRecords] = useState(0);
  const [page, setPage] = useState(1);

  // API FUNCTION
  const getData = async ({
    _page = page,
    _search = search,
    _filter = filter,
  }) => {
    setLoading("getData");

    const params = {
      page: _page,
      limit: 10,
      search: _search,
      filter: _filter?.value,
    };

    const queryParams = new URLSearchParams(params).toString();

    const { response } = await Get({
      route: `landlord-insights?${queryParams}`,
    });
    if (response) {
      setData(response?.data?.data);
      setTotalRecords(response?.data?.totalRecords);
      setPage(_page);
    }
    setLoading("");
  };

  // useEffect
  // useEffect(() => {
  //   getData();
  // }, []);

  // Handle popover click
  const onClickPopover = (value, rowItem) => {
    if (value === "viewDetails") {
      router.push(`/landlord-insights/detail`);
    }
  };

  // JSX
  return (
    <Container fluid>
      <Row>
        <Col lg={12}>
          <HeadingSection
            heading="Landlord Insights"
            search={true}
            filter={true}
          />
        </Col>
        <Col lg={12}>
          <AppTable
            tableHeader={landlordInsightTableHeader}
            data={data}
            noDataText={"No Data Found"}
            hasPagination={true}
            loading={loading === "loading"}
            totalItems={totalRecords}
            onPageChange={(pg) => {
              setPage(pg);
              // getData({ pg });
            }}
            currentPage={page}
            renderItem={({ item, key, rowIndex, renderValue }) => {
              const rowItem = data[rowIndex];

              if (renderValue) {
                return renderValue(item, rowItem);
              }

              if (key == "action") {
                return (
                  <div className={classes.actionButtons}>
                    <PopOver
                      popover={popoverOptions}
                      onClick={(val) => {
                        onClickPopover(val, rowItem);
                      }}
                    />
                  </div>
                );
              }
              return item || "";
            }}
          />
        </Col>
      </Row>
    </Container>
  );
};

export default LandlordInsightTemplate;
