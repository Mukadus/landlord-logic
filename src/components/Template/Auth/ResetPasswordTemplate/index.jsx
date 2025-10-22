"use client";
import React, { useState } from "react";
import { Container, Row, Col } from "react-bootstrap";
import classes from "../../LoginTemplate/LoginTemplate.module.css";
import Input from "@/components/atoms/Input/Input.jsx";
import Button from "@/components/atoms/Button/index.jsx";
import { HiOutlineLockClosed } from "react-icons/hi";
import { updatePasswordValues } from "@/formik/initialValues";
import { UpdatePasswordSchema } from "@/formik/schema";
import { useFormik } from "formik";
import Image from "next/image";
import useAxios from "@/interceptor/axios-functions";
import RenderToast from "@/components/atoms/RenderToast";
import { removeEmailCookie, getEmailCookie } from "@/resources/utils/cookie";
import { removeOtpCodeCookie, getOtpCodeCookie } from "@/resources/utils/cookie";
import { useRouter } from "next/navigation";

export default function ResetPasswordTemplate() {

  const { Post } = useAxios();
  const router = useRouter();
  const [loading, setLoading] = useState("");

  const resetPasswordForm = useFormik({
    initialValues: updatePasswordValues,
    validationSchema: UpdatePasswordSchema,
    onSubmit: (values) => {
      handleSubmit(values);
    },
  });
  console.log(resetPasswordForm.values);
  console.log(resetPasswordForm.errors);



  const email = getEmailCookie();
  const otpCode = getOtpCodeCookie();


  const handleSubmit = async (values) => {
    setLoading("resetPassword");

    const payload = {
      email,
      code: otpCode,
      password: values?.password,
      confirmPassword: values?.confirmPassword,
    };

    const response = await Post({
      route: "auth/reset/password",
      data: payload,
    });

    if (response) {
      removeEmailCookie();
      removeOtpCodeCookie();
      RenderToast({
        message: "Password updated successfully",
        type: "success",
      });
      router.push("/");
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
              <h1 className={classes.brandTitle}>Set new password</h1>
              <p className={classes.brandSubtitle}>Keep your account secure</p>
            </div>
          </Col>

          <Col lg={6} className={classes.formCol}>
            <div className={classes.formWrapper}>
              <div className={classes.formHeader}>
                <h2 className={classes.formTitle}>Create a new password</h2>
                <p className={classes.formSubtitle}>
                  Enter and confirm your new password
                </p>
              </div>

              <form
                onSubmit={(e) => {
                  e.preventDefault();
                  resetPasswordForm.handleSubmit();
                }}
                className={classes.loginForm}
              >
                <div className={classes.inputGroup}>
                  <Input
                    type="password"
                    label="New Password"
                    disabled={loading == "resetPassword"}
                    placeholder="Enter new password"
                    value={resetPasswordForm.values.password}
                    setValue={(v) =>
                      resetPasswordForm.setFieldValue("password", v)
                    }
                    error={
                      resetPasswordForm.touched.password &&
                      resetPasswordForm.errors.password
                    }
                    leftIcon={
                      <HiOutlineLockClosed size={20} color="var(--primary)" />
                    }
                  />
                </div>

                <div className={classes.inputGroup}>
                  <Input
                    type="password"
                    label="Confirm Password"
                    disabled={loading == "resetPassword"}
                    placeholder="Re-enter new password"
                    value={resetPasswordForm.values.confirmPassword}
                    setValue={(v) =>
                      resetPasswordForm.setFieldValue("confirmPassword", v)
                    }
                    error={
                      resetPasswordForm.touched.confirmPassword &&
                      resetPasswordForm.errors.confirmPassword
                    }
                    leftIcon={
                      <HiOutlineLockClosed size={20} color="var(--primary)" />
                    }
                  />
                </div>

                <Button
                  type="submit"
                  label={loading ? "Updating..." : "Update Password"}
                  variant="primary"
                  fullWidth
                  loading={loading == "resetPassword"}
                  disabled={loading == "resetPassword"}
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
