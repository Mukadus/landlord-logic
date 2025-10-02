"use client";
import { mergeClass } from "@/resources/utils/helper";
import React, { useState } from "react";
import { FaEye, FaEyeSlash } from "react-icons/fa6";
import classes from "./Input.module.css";

export default function Input({
  type = "text",
  label = "",
  label2 = "", // sub label
  value = "", // input value
  setValue = () => {}, //setValue
  noBorder = false,
  placeholder = "",
  disabled = false,
  customStyle = {}, //Input container inline Style
  inputStyle = {}, //Input inline Style
  labelStyle = {}, //Label inline Style
  error = "", // Error Text
  leftIcon = null, // Icon For  console.log(contractorForm.values);Input
  rightIcon = null,
  inputRef = null,
  inputClass = "",
  onEnterClick = () => {},
  className = "",
  containerStyles = {},
  containerClass = "",
  required = false,
  ...props
}) {
  const [show, setShow] = useState(false);

  return (
    <>
      <div
        className={mergeClass(classes.container, className)}
        style={containerStyles}
      >
        {label && (
          <label
            htmlFor={`input${label}`}
            className={mergeClass(
              classes.labelText,
              disabled && classes.disabled
            )}
            style={labelStyle}
          >
            {label} {label2 && label2} {required && <span style={{ color: "var(--pending-bg-dark)", marginLeft: "2px" }}>*</span>}
          </label>
        )}
        <div
          className={mergeClass(classes.inputContainer, containerClass)}
          style={customStyle}
        >
          {leftIcon && <div className={classes.leftIconBox}>{leftIcon}</div>}
          <input
            value={value}
            onChange={(e) => {
              setValue(e.target.value);
            }}
            disabled={disabled}
            placeholder={placeholder}
            type={show == true ? "text" : type}
            id={`input${label}`}
            className={mergeClass(
              inputClass,
              classes.inputClassName,
              noBorder && classes.noBorder,
              error && classes.hasError
            )}
            style={inputStyle}
            data-has-left-icon={!!leftIcon}
            data-has-right-icon={!!(rightIcon || type === "password")}
            onKeyDownCapture={(e) => {
              ["Enter", "NumpadEnter"].includes(e.code) &&
                onEnterClick &&
                onEnterClick();
            }}
            onBlur={() => {
              if (
                typeof value === "string" &&
                (type === "text" || type === "") &&
                setValue
              ) {
                setValue(value?.trim());
              }
            }}
            ref={inputRef}
            {...props}
            onKeyDown={(e) => {
              if (type == "number") {
                return (
                  ["e", "E", "+", "-"].includes(e.key) && e.preventDefault()
                );
              }
            }}
          />

          {rightIcon && <div className={classes.rightIconBox}>{rightIcon}</div>}
          {type == "password" && show == false && (
            <FaEyeSlash
              className={mergeClass(classes.passwordIcon)}
              onClick={() => setShow(!show)}
            />
          )}
          {type == "password" && show && (
            <FaEye
              className={mergeClass(classes.passwordIcon)}
              onClick={() => setShow(!show)}
            />
          )}
        </div>
        {error && <p className={`mt-1 errorText`}>*{error}</p>}
      </div>
    </>
  );
}
