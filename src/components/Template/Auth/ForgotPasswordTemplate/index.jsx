"use client";
import React, { useState } from "react";
import { Container, Row, Col } from "react-bootstrap";
import classes from "../../LoginTemplate/LoginTemplate.module.css";
import Input from "@/components/atoms/Input/Input.jsx";
import Button from "@/components/atoms/Button/index.jsx";
import { HiOutlineMail } from "react-icons/hi";
import { forgotPasswordValues } from "@/formik/initialValues";
import { ForgotPasswordSchema } from "@/formik/schema";
import { useFormik } from "formik";
import { useRouter } from "next/navigation";
import Image from "next/image";
import RenderToast from "@/components/atoms/RenderToast";
import useAxios from "@/interceptor/axios-functions";
import { setEmailCookie } from "@/resources/utils/cookie";


export default function ForgotPasswordTemplate() {
  const router = useRouter();

  const { Post } = useAxios();

  const [loading, setLoading] = useState("");

  const forgotPasswordForm = useFormik({
    initialValues: forgotPasswordValues,
    validationSchema: ForgotPasswordSchema,
    onSubmit: (values) => {
      handleSubmit(values);
    },
  });


  const handleSubmit = async (values) => {
    setLoading("submit");
    const response = await Post({
      route: "auth/forgot/password",
      data: values,
    });

    if (response) {
      setEmailCookie(values?.email);
      RenderToast({
        message: "OTP has been sent to this email",
        type: "success",
      });
      router.push("/verify-otp");
    }
    setLoading("");
  };

  return (
    <div className={classes.loginWrapper}>
      <Container fluid className={classes.container}>
        <Row className={classes.row}>
          <Col lg={6} className={classes.brandingContent}>
            <div className={classes.logoSection}>
              <div className={classes.logoIcon}>
                <Image src="/svgs/logo.svg" alt="Landlord Logic" fill />
              </div>
              <div className={classes.logoSection}>
                <h1 className={classes.brandTitle}>Landlord Logic</h1>
                <p className={classes.brandSubtitle}>Secure account recovery</p>
              </div>
            </div>
          </Col>

          <Col lg={6} className={classes.formCol}>
            <div className={classes.formWrapper}>
              <div className={classes.formHeader}>
                <h2 className={classes.formTitle}>Forgot your password?</h2>
                <p className={classes.formSubtitle}>
                  Enter your email to receive a verification code
                </p>
              </div>

              <form
                onSubmit={(e) => {
                  e.preventDefault();
                  forgotPasswordForm.handleSubmit();
                }}
                className={classes.loginForm}
              >
                <div className={classes.inputGroup}>
                  <Input
                    type="email"
                    label="Email Address"
                    placeholder="Enter your email"
                    value={forgotPasswordForm.values.email}
                    setValue={(v) =>
                      forgotPasswordForm.setFieldValue("email", v)
                    }
                    disabled={loading === "forgotPassword"}
                    error={
                      forgotPasswordForm.touched.email &&
                      forgotPasswordForm.errors.email
                    }
                    leftIcon={
                      <HiOutlineMail size={20} color="var(--primary)" />
                    }
                    onEnterClick={() => forgotPasswordForm.handleSubmit()}
                  />
                </div>

                <p
                  className={classes.forgotPassword}
                  onClick={() => router.push("/")}
                >
                  Back to Login
                </p>

                <Button
                  type="submit"
                  label={
                    loading === "forgotPassword" ? "Sending..." : "Send code"
                  }
                  variant="primary"
                  fullWidth
                  loading={loading === "forgotPassword"}
                  disabled={loading === "forgotPassword"}
                  className={classes.loginButton}
                />
              </form>
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
}
