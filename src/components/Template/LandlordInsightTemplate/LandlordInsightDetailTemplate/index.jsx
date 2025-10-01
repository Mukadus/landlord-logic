"use client";
import BreadCrumbSection from "@/components/organisms/BreadCrumbSection";
import { landlordInsightDetailData } from "@/developmentContext/landlordInsight";
import React, { useState } from "react";
import { Container, Row, Col } from "react-bootstrap";
import classes from "./LandlordInsightDetailTemplate.module.css";

export default function LandlordInsightDetailTemplate({ slug = "" }) {
  const [data, setData] = useState(landlordInsightDetailData ?? null);

  return (
    <Container fluid>
      <Row>
        <Col lg={12} className={classes.breadCrumbSection}>
          <BreadCrumbSection
            title="Landlord Insights"
            title2="Landlord Details"
            showStatusButton={true}
            handleStatusButton={() => {}}
          />
        </Col>
      </Row>
    </Container>
  );
}
