"use client";
import { useState, useEffect } from "react";
import { Container, Row, Col } from "react-bootstrap";
import Table from "@/components/organisms/ResponsiveTable/ResponsiveTable";
import {
  tenantProfileTableHeader,
  tenantProfileBodyData,
} from "@/developmentContext/tenantProfile";
import HeadingSection from "@/components/organisms/HeadingSection";
// import PopOver from "@/components/molecules/PopOver";
import PopOver from "@/components/molecules/PopOver";
import { useRouter } from "next/navigation";
import { popoverOptions } from "@/developmentContext/dropDownOption";
import classes from "./TenantProfileTemplate.module.css";



const TenantProfileTemplate = () => {
  const [loading, setLoading] = useState(false);
  const [data, setData] = useState(tenantProfileBodyData);
  const [search, setSearch] = useState("");
  const [filter, setFilter] = useState("");
  const [totalRecords, setTotalRecords] = useState(tenantProfileBodyData.length);
  const [page, setPage] = useState(1);
  const router = useRouter();



  const onClickPopover = (value, rowItem) => {
    if (value === "viewDetails") {
      router.push(`/tenant-profile/detail`);
    }
  };

  return (
    <Container fluid>
      <Row>
        <Col lg={12}>
          <HeadingSection heading="Tenant Profile" search={true} filter={true} className={classes.headingSection} />
        </Col>
        <Col lg={12}>
          <Table
            tableHeader={tenantProfileTableHeader}
            data={data}
            loading={loading}
            noDataText={"No Data Found"}
            hasPagination={true}
            props={{
              totalRecords: totalRecords,
              onPageChange: (pg) => {
                setPage(pg);
                console.log(pg);
                setData(tenantProfileBodyData);
              },
              currentPage: page,
            }}
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

export default TenantProfileTemplate;
