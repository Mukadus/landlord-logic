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



const TenantProfileTemplate = () => {
  const [loading, setLoading] = useState(false);
  const [data, setData] = useState(tenantProfileBodyData);
  const [search, setSearch] = useState("");
  const [filter, setFilter] = useState("");
  const [totalRecords, setTotalRecords] = useState(tenantProfileBodyData.length);
  const [page, setPage] = useState(1);
  const router = useRouter();
  console.log(page);

  const popoverOptions = [
    {
      label: "View Details",
      value: "viewDetails",
    },
  ];

  const onClickPopover = (value, rowItem) => {
    if (value === "viewDetails") {
      router.push(`/tenant-profile/detail`);
    }
  };

  return (
    <Container fluid>
      <Row>
        <Col lg={12} className="p-0">
          <HeadingSection heading="Tenant Profile" search={true} filter={true} />
        </Col>
        <Col lg={12} className="p-0">
          <Table
            tableHeader={tenantProfileTableHeader}
            data={data}
            loading={loading}
            hasPagination={true}
            props={{
              totalRecords: totalRecords,
              onPageChange: (pg) => {
                setPage(pg);
                console.log(pg);
                // getData({ pg });
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
                  // <div className={classes.actionButtons}>
                    <PopOver
                      popover={popoverOptions}
                      onClick={(label) => {
                        onClickPopover(label, rowItem);
                      }}
                    />
                  // </div>
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
