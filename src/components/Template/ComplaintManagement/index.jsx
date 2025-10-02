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

const ComplaintManagement = () => {
  const [loading, setLoading] = useState(false);
  const [data, setData] = useState(complaintBodyData);
  const [search, setSearch] = useState("");
  const [filter, setFilter] = useState("");
  const [totalRecords, setTotalRecords] = useState(0);
  const [page, setPage] = useState(1);

  return (
    <Container fluid>
      <Row>
        <Col lg={12}>
          <HeadingSection
            heading="Complaint Management"
            search={true}
            filter={true}
            className={classes.headingSection}
          />
        </Col>
        <Col lg={12}>
          <Table
            tableHeader={complaintManagementTableHeader}
            data={data}
            loading={loading}
            noDataText={"No Data Found"}
            hasPagination={true}
            props={{
              totalRecords: totalRecords,
              onPageChange: (pg) => {
                setPage(pg);
                setData(complaintBodyData);
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

export default ComplaintManagement;
