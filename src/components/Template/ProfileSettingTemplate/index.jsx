"use client";
import { useState } from "react";
import { Container, Row, Col } from "react-bootstrap";
import classes from "./ProfileSettingTemplate.module.css";
import ProfileForm from "@/components/molecules/ProfileForm";
import HeadingSection from "@/components/organisms/HeadingSection";
import { useFormik } from "formik";
import { profileFormValues } from "@/formik/initialValues";
import { ProfileSchema } from "@/formik/schema";
import RenderToast from "@/components/atoms/RenderToast";
import UpdatePasswordModal from "@/components/organisms/Modals/UpdatePasswordModal";
import { userData } from "@/developmentContext/app-data";
import useAxios from "@/interceptor/axios-functions";

export default function ProfileSettingTemplate() {
  const { Patch } = useAxios();

  const [showModal, setShowModal] = useState("");
  const [loading, setLoading] = useState("");

  const profileForm = useFormik({
    initialValues: profileFormValues(userData),
    validationSchema: ProfileSchema,
    onSubmit: (values) => {
      console.log(values);
    },
  });


  const handleSubmit = async (values) => {
    setLoading("submit");

    const payload = {
      ...profileForm?.values,
    }
    const { response } = await Patch({
      route: "users/me",
      data: payload,
    });
    if (response) {
      RenderToast({ message: "Profile updated successfully", type: "success" });
    }
    setLoading("");
  };


  
  return (
    <Container fluid className={classes.main}>
      <Row>
        <Col lg={12}>
          <HeadingSection
            heading="Profile Setting"
            className={classes.headingSection}
          />
        </Col>
        <Col lg={12}>
          <Row>
            <Col lg={12}>
              <ProfileForm form={profileForm} setShowModal={setShowModal} handleSubmit={handleSubmit} loading={loading} />
            </Col>
          </Row>
        </Col>
      </Row>
      <UpdatePasswordModal show={showModal === "update-password"} setShow={() => setShowModal("")} />
    </Container>
  );
}