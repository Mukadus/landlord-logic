"use client";
import React, { useState } from "react";
import { Container, Row, Col } from "react-bootstrap";
import classes from "./LoginTemplate.module.css";
import Input from "@/components/atoms/Input/Input.jsx";
import Button from "@/components/atoms/Button/index.jsx";

import { loginFormValues } from "@/formik/initialValues";
import { useFormik } from "formik";
import { LoginSchema } from "@/formik/schema";
import { HiOutlineLockClosed, HiOutlineMail } from "react-icons/hi";
import Image from "next/image";
import { useRouter } from "next/navigation";
import RenderToast from "@/components/atoms/RenderToast";
import Cookies from "js-cookie";
import { TOKEN_COOKIE_NAME } from "@/resources/utils/cookie";
import { handleEncrypt } from "@/interceptor/encryption";

export default function LoginTemplate() {
  const router = useRouter();

  const loginForm = useFormik({
    initialValues: loginFormValues,
    validationSchema: LoginSchema,
    onSubmit: (values) => {
      handleSubmit(values);
    },
  });
  const [loading, setLoading] = useState("");

  const handleSubmit = async (values) => {
    // setLoading("login");

    if (
      values.email === "admin@yopmail.com" &&
      values.password === "12345678"
    ) {
      router.push("/dashboard");
      Cookies.set(TOKEN_COOKIE_NAME, handleEncrypt("12345678"));
      RenderToast({
        message: "Login successful",
        type: "success",
      });
    } else {
      RenderToast({
        message: "Invalid email or password",
        type: "error",
      });
    }
  };

  return (
    <div className={classes.loginWrapper}>
      <Container fluid className={classes.container}>
        <Row className={classes.row}>
          {/* Left side - Branding/Image */}
          <Col lg={6} className={classes.brandingContent}>
            <div className={classes.logoSection}>
              <div className={classes.logoIcon}>
                <Image src="/svgs/logo.svg" alt="Landlord Logic" fill />
              </div>
              <h1 className={classes.brandTitle}>Landlord Logic</h1>
              <p className={classes.brandSubtitle}>
                Manage your properties with ease and efficiency
              </p>
            </div>
          </Col>

          {/* Right side - Login Form */}
          <Col lg={6} className={classes.formCol}>
            <div className={classes.formWrapper}>
              <div className={classes.formHeader}>
                <h2 className={classes.formTitle}>Welcome Back</h2>
                <p className={classes.formSubtitle}>
                  Sign in to your account to continue
                </p>
              </div>

              <form
                onSubmit={(e) => {
                  e.preventDefault();
                  loginForm.handleSubmit();
                }}
                className={classes.loginForm}
              >
                <div className={classes.inputGroup}>
                  <Input
                    type="email"
                    label="Email Address"
                    placeholder="Enter your email"
                    value={loginForm.values.email}
                    setValue={(value) =>
                      loginForm.setFieldValue("email", value)
                    }
                    disabled={loading === "login"}
                    error={loginForm.touched.email && loginForm.errors.email}
                    leftIcon={
                      <HiOutlineMail size={20} color="var(--primary)" />
                    }
                    onEnterClick={() => loginForm.handleSubmit()}
                  />
                </div>

                <div className={classes.inputGroup}>
                  <Input
                    type="password"
                    label="Password"
                    placeholder="Enter your password"
                    value={loginForm.values.password}
                    setValue={(value) =>
                      loginForm.setFieldValue("password", value)
                    }
                    error={
                      loginForm.touched.password && loginForm.errors.password
                    }
                    leftIcon={
                      <HiOutlineLockClosed size={20} color="var(--primary)" />
                    }
                    disabled={loading === "login"}
                    onEnterClick={() => loginForm.handleSubmit()}
                  />
                </div>

                <p
                  className={classes.forgotPassword}
                  onClick={() => router.push("/forgot-password")}
                >
                  Forgot Password?
                </p>
                <Button
                  type="submit"
                  label={loading === "login" ? "Signing In..." : "Sign In"}
                  variant="primary"
                  fullWidth
                  loading={loading === "login"}
                  disabled={loading === "login"}
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
