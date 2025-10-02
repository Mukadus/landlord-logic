"use client";
import InformationSection from "@/components/molecules/InformationSection";
import BreadCrumbSection from "@/components/organisms/BreadCrumbSection";
import {
  complaintDetailData,
  overViewData,
} from "@/developmentContext/complaintManagement";
import React, { useState } from "react";
import classes from "./ComplaintManagementDetailTemplate.module.css";
import { Col, Container, Row } from "react-bootstrap";
import { FaRegCircleCheck } from "react-icons/fa6";

export default function ComplaintManagementDetailTemplate({ slug = "" }) {
  const [data, setData] = useState(complaintDetailData);
  return (
    <Container>
      <Row>
        <Col lg={12}>
          <BreadCrumbSection
            title="Complaints Management"
            title2="Complaint Details"
            showStatusButton={true}
            label={`${
              data?.status === "pending" ? "Resolve" : "Reopen"
            } Complaint`}
            leftIcon={
              data?.status === "pending" ? (
                <FaRegCircleCheck />
              ) : (
                <FaRegCircleCheck />
              )
            }
            handleStatusButton={() => {}}
          />
        </Col>
        <Col lg={12} className={classes.informationSection}>
          <InformationSection
            data={overViewData(data)}
            containerClass={classes.informationSection}
          />
        </Col>
      </Row>
    </Container>
  );
}
