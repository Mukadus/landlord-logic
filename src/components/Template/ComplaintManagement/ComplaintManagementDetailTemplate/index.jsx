"use client";
import InformationSection from "@/components/molecules/InformationSection";
import BreadCrumbSection from "@/components/organisms/BreadCrumbSection";
import {
  complaintDetailData,
  overViewData,
} from "@/developmentContext/complaintManagement";
import React, { useState, useEffect } from "react";
import classes from "./ComplaintManagementDetailTemplate.module.css";
import { Col, Container, Row } from "react-bootstrap";
import { FaRegCircleCheck } from "react-icons/fa6";
import useAxios from "@/interceptor/axios-functions";
import RenderToast from "@/components/atoms/RenderToast";
import AreYouSureModal from "@/components/organisms/Modals/AreYouSureModal";

export default function ComplaintManagementDetailTemplate({ slug = "" }) {
  const { Get } = useAxios();

  const [data, setData] = useState(complaintDetailData);
  const [loading, setLoading] = useState("");
  const [showModal, setShowModal] = useState(false);

  // API FUNCTION
  const getData = async () => {
    setLoading("getData");
    const { response } = await Get({ route: `complaints/${slug}` });
    if (response) {
      setData(response?.data?.data);
    }
    setLoading("");
  };


  // HANDLE RESOLVE COMPLAINT
  const handleResolveComplaint = async () => {
    setLoading("resolveComplaint");
    const { response } = await Patch({ route: `complaints/${slug}`, data: { status: "resolved" } });
    if (response) {
      // RenderToast({
      //   message: "Complaint resolved successfully",
      //   type: "success",
      // });
      setShowModal(false);
      getData();
    }
    setLoading("");
  };

  // useEffect
  useEffect(() => {
    if(slug) {
      getData();
    }
  }, [slug]);

  return (
    <Container fluid>
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
            handleStatusButton={() => {
              setShowModal(true);
            }}
          />
        </Col>
        <Col lg={12} className={classes.informationSection}>
          <InformationSection
            data={overViewData(data)}
            containerClass={classes.informationSection}
          />
        </Col>
      </Row>
      <AreYouSureModal
        show={showModal}
        setShow={setShowModal}
        title="Are You Sure You Want to Resolve This Complaint?"
        subTitle="This action cannot be undone. Please confirm to proceed."
        onClick={() => {
          handleResolveComplaint();
        }}
        showCloseIcon={true}
        isLoading={false}
        type="success"
      />
    </Container>
  );
}
