'use client';
import { useState, useEffect } from "react";
import classes from "./LandlordInsightTemplate.module.css";
import { Container } from "react-bootstrap";
import Table from "@/components/organisms/ResponsiveTable/ResponsiveTable";
import { landlordInsightTableHeader, guardiansBodyData } from "@/developmentContext/landlordInsight";

const LandlordInsightTemplate = () => {
  const [loading, setLoading] = useState(false);
  const [data, setData] = useState( guardiansBodyData);

  return (
    <Container>
      <Table
        tableHeader={landlordInsightTableHeader}
        data={data}
        loading={loading}
        pagination={true}
      />
    </Container>
  );
};

export default LandlordInsightTemplate;
