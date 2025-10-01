"use client";
import { useState, useEffect } from "react";
import { Container, Row, Col } from "react-bootstrap";
import AppTable from "@/components/organisms/ResponsiveTable/ResponsiveTable";
import {
  subscriptionManagementTableHeader,
  subscriptionManagementBodyData, 
  subscriptionTabs,
} from "@/developmentContext/subscriptionManagement";
import HeadingSection from "@/components/organisms/HeadingSection";
import PopOver from "@/components/molecules/PopOver";

const SubscriptionManagement = () => {
  const [loading, setLoading] = useState(false);
  const [data, setData] = useState(subscriptionManagementBodyData);
  const [search, setSearch] = useState("");
  const [filter, setFilter] = useState("");
  const [totalRecords, setTotalRecords] = useState(0);
  const [page, setPage] = useState(1);
  const [tabs, setTabs] = useState("billing");

  const popoverOptions = [
    {
      label: "View Details",
      value: "viewDetails",
    },
    {
      label: "Edit",
   value: "edit",
    },
    {
        label: "Delete",
        value: "delete",
    },
  ];

  // Handle popover click
  const onClickPopover = (value, rowItem) => {
    console.log("Popover clicked:", value, rowItem);
  };

  return (
    <Container fluid>
      <Row>
        <Col lg={12} className="p-0">
          <HeadingSection
            heading="Subscription Management"
            search={true}
            filter={true}
            tabs={true}
            tabsOptions={subscriptionTabs}
            setTabs={setTabs}
          />
        </Col>
        <Col lg={12} className="p-0">
          <AppTable
            tableHeader={subscriptionManagementTableHeader}
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

              if (key === "action") {
                return (
                    <PopOver
                      popover={popoverOptions}
                      onClick={(value) => {
                        onClickPopover(value, rowItem);
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

export default SubscriptionManagement;
