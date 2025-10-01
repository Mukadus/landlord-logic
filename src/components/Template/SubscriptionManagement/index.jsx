"use client";
import { useState, useEffect } from "react";
import { Container, Row, Col } from "react-bootstrap";
import AppTable from "@/components/organisms/ResponsiveTable/ResponsiveTable";
import {
  subscriptionManagementTableHeader,
  subscriptionManagementBodyData,
  subscriptionTabs,
  subscriptionPlansData,
} from "@/developmentContext/subscriptionManagement";
import HeadingSection from "@/components/organisms/HeadingSection";
import PopOver from "@/components/molecules/PopOver";
import classes from "./subscriptionManagement.module.css";
import PlanCards from "@/components/molecules/PlanCards";

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

  const renderContent = () => {
    if (tabs === "billing") {
      return (
        <Col lg={12}>
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
      );
    }
    if (tabs === "plans") {
      return (
        <Col lg={12}>
          <div className={classes.plansDiv}>
            <h6 className={classes.heading}>For Landlords</h6>
            <Row>
              {subscriptionPlansData?.map((item, index) => (
                <Col lg={4} key={index}>
                  <PlanCards data={item} />
                </Col>
              ))}
            </Row>
          </div>
        </Col>
      );
    }
  };
  return (
    <Container fluid>
      <Row>
        <Col lg={12}>
          <h6 className={classes.heading}>Subscription Management</h6>
          <HeadingSection
            classNameTabs={classes.tabs}
            className={classes.headingSection}
            search={true}
            filter={true}
            tabs={tabs}
            tabsData={subscriptionTabs}
            setTabs={setTabs}
          />
        </Col>
        {renderContent()}
      </Row>
    </Container>
  );
};

export default SubscriptionManagement;
