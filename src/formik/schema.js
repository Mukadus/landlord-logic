import { emailRegex, passwordRegex } from "@/resources/utils/regex";
import * as Yup from "yup";

export const LoginSchema = Yup.object({
  email: Yup.string()
    .email("Invalid email address")
    .required("Email is required")
    .test(
      "no-special-chars",
      "Email contains invalid characters",
      (value) => !value || emailRegex.test(value)
    ),
  password: Yup.string().required("Password is required"),
});

export const ForgotPasswordSchema = Yup.object({
  email: Yup.string()
    .email("Invalid email address")
    .required("Email is required"),
});

export const OtpVerificationSchema = Yup.object({
  code: Yup.string()
    .required("Code is required")
    .min(6, "Code must be 6 digits"),
});

export const UpdatePasswordSchema = Yup.object({
  password: Yup.string()
    .required("Password is required")
    .test(
      "password-regex",
      "Password must contain at least one uppercase letter, one lowercase letter, one number, and one special character",
      (value) => passwordRegex.test(value)
    ),
  confirmPassword: Yup.string()
    .required("Confirm password is required")
    .oneOf([Yup.ref("password"), null], "Passwords must match"),
  currentPassword: Yup.string().required("Current password is required"),
});

export const ContractorSchema = Yup.object({
  contractorName: Yup.string()
    .required("Contractor name is required")
    .min(2, "Contractor name must be at least 2 characters")
    .max(50, "Contractor name must be less than 50 characters"),
  contractorEmail: Yup.string()
    .email("Invalid email address")
    .required("Contractor email is required")
    .test(
      "no-special-chars",
      "Email contains invalid characters",
      (value) => !value || emailRegex.test(value)
    ),
  contractorCategory: Yup.array()
    .required("Contractor category is required")
    .min(1, "Contractor category is required"),
});