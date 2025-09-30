"use client";
import React from "react";
import classes from "./Button.module.css";
import { Spinner } from "react-bootstrap";
import { mergeClass } from "@/resources/utils/helper";


const Button = ({
  label,
  fullWidth = false,
  rounded = false,
  buttonStyles = {},
  onClick = () => {},
  disabled = false,
  children,
  leftIcon = null,
  rightIcon = null,
  className = "",
  variant = "",
  type = "button",
  loading = false,
  showSpinner = false,
  spinnerStyles = {},
  ...props
}) => {
  return (
    <>
      <button
        type={type}
        style={{
          ...buttonStyles,
          ...(fullWidth && { width: "100%" }),
          ...(rounded && { borderRadius: "50px" }),
        }}
        onClick={onClick}
        disabled={disabled}
        color-variant={variant}
        className={mergeClass(classes.btn, className)}
        {...props}
      >
        {leftIcon && leftIcon}
        {label && <label>{label}</label>}
        {children && { children }}
        {rightIcon && !(loading && showSpinner) && rightIcon}
        {showSpinner && loading && <Spinner size="sm" style={spinnerStyles} />}
      </button>
    </>
  );
};

export default Button;
