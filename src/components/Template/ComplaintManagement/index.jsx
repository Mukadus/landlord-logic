"use client";
import { useState, useEffect } from "react";
import { Container, Row, Col } from "react-bootstrap";
import Table from "@/components/organisms/ResponsiveTable/ResponsiveTable";
import {
  complaintManagementTableHeader,
  complaintBodyData,
} from "@/developmentContext/complaintManagement";
import HeadingSection from "@/components/organisms/HeadingSection";

const ComplaintManagement = () => {
  const [loading, setLoading] = useState(false);
  const [data, setData] = useState(complaintBodyData);
  const [search, setSearch] = useState("");
  const [filter, setFilter] = useState("");
  const [totalRecords, setTotalRecords] = useState(0);

  return (
    <Container fluid>
      <Row>
        <Col lg={12} className="p-0">
          <HeadingSection heading="Complaint Management" search={true} filter={true} />
        </Col>
        <Col lg={12} className="p-0">
          <Table
            tableHeader={complaintManagementTableHeader}
            data={data}
            loading={loading}
            pagination={true}
          />
        </Col>
      </Row>
    </Container>
  );
};

export default ComplaintManagement;
