"use client";
import Button from "@/components/atoms/Button/index.jsx";
import Input from "@/components/atoms/Input/Input.jsx";
import { otpVerificationValues } from "@/formik/initialValues";
import { OtpVerificationSchema } from "@/formik/schema";
import { useFormik } from "formik";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { Col, Container, Row } from "react-bootstrap";
import { MdOutlinePrivacyTip } from "react-icons/md";
import classes from "../../LoginTemplate/LoginTemplate.module.css";
import Image from "next/image";

export default function VerifyOtpTemplate() {
  const router = useRouter();
  const [loading, setLoading] = useState(false);

  const verifyOtpForm = useFormik({
    initialValues: otpVerificationValues,
    validationSchema: OtpVerificationSchema,
    onSubmit: (values) => {
      handleSubmit(values);
    },
  });

  const handleSubmit = async (values) => {
    setLoading("verifyOtp");
  };

  const resendCode = async () => {
    console.log("resendCode");
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
              <h1 className={classes.brandTitle}>Verify Code</h1>
              <p className={classes.brandSubtitle}>
                Enter the code sent to you
              </p>
            </div>
          </Col>

          <Col lg={6} className={classes.formCol}>
            <div className={classes.formWrapper}>
              <div className={classes.formHeader}>
                <h2 className={classes.formTitle}>Verify your identity</h2>
                <p className={classes.formSubtitle}>
                  Enter the verification code to continue
                </p>
              </div>

              <form
                onSubmit={(e) => {
                  e.preventDefault();
                  verifyOtpForm.handleSubmit();
                }}
                className={classes.loginForm}
              >
                <div className={classes.inputGroup}>
                  <Input
                    disabled={loading == "verifyOtp"}
                    type="text"
                    label="Verification Code"
                    placeholder="Enter code"
                    value={verifyOtpForm.values.code}
                    setValue={(v) => verifyOtpForm.setFieldValue("code", v)}
                    error={
                      verifyOtpForm.touched.code && verifyOtpForm.errors.code
                    }
                    onEnterClick={() => verifyOtpForm.handleSubmit()}
                    leftIcon={<MdOutlinePrivacyTip />}
                  />
                </div>

                <p className={classes.forgotPassword} onClick={resendCode}>
                  Resend code
                </p>

                <Button
                  type="submit"
                  label={loading == "verifyOtp" ? "Verifying..." : "Verify"}
                  variant="primary"
                  fullWidth
                  loading={loading == "verifyOtp"}
                  disabled={loading == "verifyOtp"}
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
