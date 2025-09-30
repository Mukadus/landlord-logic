"use client";
import { useState, useEffect } from "react";
// import classes from "./JobRequestTemplate.module.css";
import { Container, Row, Col } from "react-bootstrap";
import Table from "@/components/organisms/ResponsiveTable/ResponsiveTable";
import {
  jobRequestTableHeader,
  jobRequestBodyData,
} from "@/developmentContext/jobRequest";
import HeadingSection from "@/components/organisms/HeadingSection";

const JobRequestTemplate = () => {
  const [loading, setLoading] = useState(false);
  const [data, setData] = useState(jobRequestBodyData);
  const [search, setSearch] = useState("");
  const [filter, setFilter] = useState("");
  const [totalRecords, setTotalRecords] = useState(0);
  const [page, setPage] = useState(1);

  return (
    <Container fluid>
      <Row>
        <Col lg={12} className="p-0">
          <HeadingSection heading="Job Requests" search={true} filter={true} />
        </Col>
        <Col lg={12} className="p-0">
          <Table
            tableHeader={jobRequestTableHeader}
            data={data}
            loading={loading}
            pagination={true}
            page={page}
            totalRecords={totalRecords}
            onPageChange={setPage}
          />
        </Col>
      </Row>
    </Container>
  );
};

export default JobRequestTemplate;
