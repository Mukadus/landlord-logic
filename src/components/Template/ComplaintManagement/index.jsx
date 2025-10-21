"use client";
import { useState, useEffect } from "react";
import { Container, Row, Col } from "react-bootstrap";
import Table from "@/components/organisms/ResponsiveTable/ResponsiveTable";
import {
  complaintManagementTableHeader,
  complaintBodyData,
} from "@/developmentContext/complaintManagement";
import HeadingSection from "@/components/organisms/HeadingSection";
import PopOver from "@/components/molecules/PopOver";
import { popoverOptions } from "@/developmentContext/dropDownOption";
import classes from "./ComplaintManagementTemplate.module.css";
import { useRouter } from "next/navigation";
import { jobRequestFilterOptions } from "@/developmentContext/dropDownOption";
import useAxios from "@/interceptor/axios-functions";

const ComplaintManagement = () => {
  const { Get } = useAxios();

  const router = useRouter();



  const [loading, setLoading] = useState(false);
  const [data, setData] = useState(complaintBodyData);
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
      filter: _filter,
    };
    const queryParams = new URLSearchParams(params).toString();

    const { response } = await Get({ route: `complaints?${queryParams}` });
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
      router.push(`/complains-management/detail`);
    }
  };

  return (
    <Container fluid>
      <Row>
        <Col lg={12}>
          <HeadingSection
            heading="Complaint Management"
            search={true}
            filter={true}
            className={classes.headingSection}
            searchValue={search}
            setSearchValue={setSearch}
            filters={filter}
            setFilter={setFilter}
            filterOptions={jobRequestFilterOptions}
          />
        </Col>
        <Col lg={12}>
          <Table
            tableHeader={complaintManagementTableHeader}
            data={data}
            loading={loading}
            noDataText={"No Data Found"}
            hasPagination={true}
            totalRecords={totalRecords}
            onPageChange={(pg) => {
              setPage(pg);
              setData(complaintBodyData);
            }}
            currentPage={page}
            renderItem={({ item, key, rowIndex, renderValue }) => {
              const rowItem = data[rowIndex];

              if (renderValue) {
                return renderValue(item, rowItem);
              }

              if (key == "action") {
                return (
                  <PopOver
                    popover={popoverOptions}
                    onClick={(label) => {
                      onClickPopover(label, rowItem);
                    }}
                  />
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

export default ComplaintManagement;
