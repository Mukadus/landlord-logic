import { statusOptions } from "@/developmentContext/dropDownOption";

export const loginFormValues = {
  email: "",
  password: "",
};

export const updatePasswordValues = {
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

export const profileFormValues = (userData) => {
  return {
    fullName: userData?.fullName || "",
    email: userData?.email || "",
    phoneNumber: userData?.phoneNumber || "",
    location: userData?.location || "",
    photo: userData?.photo || "",
  };
};

export const changePasswordFormValues = {
  currentPassword: "",
  password: "",
  confirmPassword: "",
};