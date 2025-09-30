"use client";
import { useState, useEffect } from "react";
import { Container, Row, Col } from "react-bootstrap";
import Table from "@/components/organisms/ResponsiveTable/ResponsiveTable";
import {
  tenantProfileTableHeader,
  tenantProfileBodyData,
} from "@/developmentContext/tenantProfile";
import HeadingSection from "@/components/organisms/HeadingSection";

const TenantProfileTemplate = () => {
  const [loading, setLoading] = useState(false);
  const [data, setData] = useState(tenantProfileBodyData);
  const [search, setSearch] = useState("");
  const [filter, setFilter] = useState("");
  const [totalRecords, setTotalRecords] = useState(0);

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
            pagination={true}
          />
        </Col>
      </Row>
    </Container>
  );
};

export default TenantProfileTemplate;
