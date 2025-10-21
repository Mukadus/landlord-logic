"use client";
import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import classes from "./JobRequestDetailTemplate.module.css";
import BreadCrumbSection from "@/components/organisms/BreadCrumbSection";
import {
  jobRequestDetailData,
  overViewDataJobRequestDetail,
} from "@/developmentContext/jobRequest";
import { useState } from "react";
import InformationSection from "@/components/molecules/InformationSection";
import useAxios from "@/interceptor/axios-functions";

const JobRequestDetailTemplate = ({ slug = "" }) => {
  const { Get } = useAxios();
  const [data, setData] = useState(jobRequestDetailData);
  const [loading, setLoading] = useState(false);

  // API FUNCTION
  const getData = async () => {
    setLoading("getData");
    const { response } = await Get({ route: `job-requests/${slug}` });
    if (response) {
      setData(response?.data?.data);
    }
    setLoading("");
  };

  return (
    <Container fluid>
      <Row>
        <Col lg={12} className={classes.breadCrumbSection}>
          <BreadCrumbSection
            title="Job Requests"
            title2="Maintenance Details"
          />
        </Col>
        <Col lg={12}>
          <InformationSection data={overViewDataJobRequestDetail(data)} containerClass={classes.informationSection} />
        </Col>
      </Row>
    </Container>
  );
};

export default JobRequestDetailTemplate;
