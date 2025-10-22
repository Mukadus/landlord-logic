import { handleDecrypt, handleEncrypt } from "@/interceptor/encryption";
import Cookies from "js-cookie";

export const PROJECT_NAME = "landlord-logic";

export const TOKEN_COOKIE_NAME = `_xpdx_${PROJECT_NAME}`;
export const REFRESH_TOKEN_COOKIE_NAME = `_xpdx_rf_${PROJECT_NAME}`;
export const USER_METADATA_COOKIE_NAME = `_xpdx_m_${PROJECT_NAME}`;
export const EMAIL_COOKIE_NAME = `_xpdx_email_${PROJECT_NAME}`;
export const OTP_CODE_COOKIE_NAME = `_xpdx_otp_code_${PROJECT_NAME}`;

export const setTokenCookie = (token) => {
  Cookies.set(TOKEN_COOKIE_NAME, handleEncrypt(token), { expires: 90 });
};

export const getTokenCookie = () => {
  const token = Cookies.get(TOKEN_COOKIE_NAME);
  return token ? handleDecrypt(token) : null;
};

export const removeTokenCookie = () => {
  Cookies.remove(TOKEN_COOKIE_NAME);
};

export const setRefreshTokenCookie = (refreshToken) => {
  Cookies.set(REFRESH_TOKEN_COOKIE_NAME, handleEncrypt(refreshToken), {
    expires: 90,
  });
};

export const setUserMetadataCookie = (user) => {
  const dataToSet = {
    role: user?.role,
    //! ...add more as needed
  };
  Cookies.set(
    USER_METADATA_COOKIE_NAME,
    handleEncrypt(JSON.stringify(dataToSet)),
    {
      expires: 90,
    }
  );
};

export const getUserMetadataCookie = () => {
  const userMetadata = Cookies.get(USER_METADATA_COOKIE_NAME);
  return userMetadata ? handleDecrypt(userMetadata) : null;
};

export const removeUserMetadataCookie = () => {
  Cookies.remove(USER_METADATA_COOKIE_NAME);
};

export const clearAllCookies = () => {
  Cookies.remove(TOKEN_COOKIE_NAME);
  Cookies.remove(USER_METADATA_COOKIE_NAME);
  Cookies.remove(REFRESH_TOKEN_COOKIE_NAME);
};
export const setEmailCookie = (email) => {
  Cookies.set(EMAIL_COOKIE_NAME, handleEncrypt(email), { expires: 90 });
};

export const getEmailCookie = () => {
  const email = Cookies.get(EMAIL_COOKIE_NAME);
  return email ? handleDecrypt(email) : null;
};

export const removeEmailCookie = () => {
  Cookies.remove(EMAIL_COOKIE_NAME);
};  

export const setOtpCodeCookie = (otpCode) => {
  Cookies.set(OTP_CODE_COOKIE_NAME, handleEncrypt(otpCode), { expires: 90 });
};

export const getOtpCodeCookie = () => {
  const otpCode = Cookies.get(OTP_CODE_COOKIE_NAME);
  return otpCode ? handleDecrypt(otpCode) : null;
};

export const removeOtpCodeCookie = () => {
  Cookies.remove(OTP_CODE_COOKIE_NAME);
};