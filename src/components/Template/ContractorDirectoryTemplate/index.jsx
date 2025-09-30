"use client";
import { useState, useEffect } from "react";
import { Container, Row, Col } from "react-bootstrap";
import Table from "@/components/organisms/ResponsiveTable/ResponsiveTable";
import {
  contractorDirectoryTableHeader,
  contractorBodyData,
} from "@/developmentContext/contractorDirectory";
import HeadingSection from "@/components/organisms/HeadingSection";

const ContractorDirectoryTemplate = () => {
  const [loading, setLoading] = useState(false);
  const [data, setData] = useState(contractorBodyData);
  const [search, setSearch] = useState("");
  const [filter, setFilter] = useState("");
  const [totalRecords, setTotalRecords] = useState(0);

  return (
    <Container fluid>
      <Row>
        <Col lg={12} className="p-0">
          <HeadingSection
            heading="Contractor Directory"
            search={true}
            filter={true}
            button={true}
            buttonText="Add Contractor"
          />
        </Col>
        <Col lg={12} className="p-0">
          <Table
            tableHeader={contractorDirectoryTableHeader}
            data={data}
            loading={loading}
            pagination={true}
          />
        </Col>
      </Row>
    </Container>
  );
};

export default ContractorDirectoryTemplate;
