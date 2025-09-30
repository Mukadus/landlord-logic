"use client";
import React from "react";
import PhoneNumberInput from "react-phone-number-input";
import "react-phone-number-input/style.css";
import classes from "./PhoneInput.module.css"; // Use Input styles
import { mergeClass } from "@/resources/utils/helper";

export default function PhoneInput({
  defaultCountry = "PK",
  country,
  label,
  label2,
  value,
  setValue,
  noBorder = false,
  placeholder = "",
  disabled = false,
  customStyle = {},
  inputStyle = {},
  labelStyle = {},
  error = "",
  leftIcon,
  rightIcon,
  inputRef,
  inputClass = "",
  onEnterClick,
  className = "",
  containerStyles = {},
  inputContainerClass = "",
  ...props
}) {
  return (
    <div
      className={mergeClass(classes.container, className)}
      style={containerStyles}
    >
      {label && (
        <label
          htmlFor={`input${label}`}
          className={mergeClass(classes.label, disabled && classes.disabled)}
          style={labelStyle}
        >
          {label} {label2 && label2}
        </label>
      )}
      <div
        className={mergeClass(classes.inputContainer, inputContainerClass)}
        style={customStyle}
      >
        {leftIcon && <div className={classes.leftIconBox}>{leftIcon}</div>}
        <PhoneNumberInput
          countryCallingCodeEditable={false}
          international={true}
          defaultCountry={defaultCountry}
          value={value}
          onChange={(value) => {
            setValue(value || "");
          }}
          disabled={disabled}
          placeholder={placeholder}
          id={`input${label}`}
          className={mergeClass(
            inputClass,
            classes.inputClassName,
            noBorder ? classes.noBorder : ""
          )}
          style={{ ...inputStyle, ...(leftIcon && { paddingLeft: 50 }) }}
          onKeyDownCapture={(e) => {
            ["Enter", "NumpadEnter"].includes(e.code) &&
              onEnterClick &&
              onEnterClick();
          }}
          ref={inputRef}
          {...props}
        />
        {rightIcon && <div className={classes.rightIconBox}>{rightIcon}</div>}
      </div>
      {error && <p className={mergeClass("mt-1", classes.error)}>*{error}</p>}
    </div>
  );
}
