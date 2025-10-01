"use client";
import { useState, useEffect } from "react";
import classes from "./LandlordInsightTemplate.module.css";
import { Container, Row, Col } from "react-bootstrap";
import AppTable from "@/components/organisms/ResponsiveTable/ResponsiveTable";
import {
  landlordInsightTableHeader,
  landlordInsightBodyData,
} from "@/developmentContext/landlordInsight";
import HeadingSection from "@/components/organisms/HeadingSection";
import PopOver from "@/components/molecules/PopOver";

const LandlordInsightTemplate = () => {
  const [loading, setLoading] = useState(false);
  const [data, setData] = useState(landlordInsightBodyData);
  const [search, setSearch] = useState("");
  const [filter, setFilter] = useState("");
  const [totalRecords, setTotalRecords] = useState(0);
  const [page, setPage] = useState(1);
  const [tabs, setTabs] = useState("all");
  const tabsOptions = [
    {
      label: "All",
      value: "all",
    },
  ];
  // Popover options for action menu
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
            heading="Landlord Insights"
            search={true}
            filter={true}
            tabs={true}
            tabsOptions={tabsOptions}
            setTabs={setTabs}
          />
        </Col>
        <Col lg={12} className="p-0">
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

export default LandlordInsightTemplate;
