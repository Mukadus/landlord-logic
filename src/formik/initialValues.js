import { statusOptions } from "@/developmentContext/dropDownOption";

export const loginFormValues = {
  email: "",
  password: "",
};

export const updatePasswordValues = {
  currentPassword: "",
  password: "",
  confirmPassword: "",
};

export const forgotPasswordValues = {
  email: "",
};

export const otpVerificationValues = {
  code: "",
};

export const contractorFormValues = {
  contractorName: "",
  contractorEmail: "",
  contractorCategory: [],
  status: statusOptions[0]?.value || "",
};