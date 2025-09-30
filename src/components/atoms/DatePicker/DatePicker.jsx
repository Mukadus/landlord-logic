"use client";

import { mergeClass } from "@/resources/utils/helper";
import React from "react";
import classes from "./DatePicker.module.css";

import DatePickerInput from "react-multi-date-picker";
import DatePanel from "react-multi-date-picker/plugins/date_panel";
import "react-multi-date-picker/styles/colors/purple.css";


export default function DatePicker({
  dir = "ltr",
  dateFormat = "DD/MM/YYYY",
  label = "",
  label2 = "",
  value = null,
  setValue = () => {},
  noBorder = false,
  placeholder = "",
  disabled = false,
  customStyle = {},
  inputStyle = {},
  labelStyle = {},
  error = "",
  leftIcon = null,
  rightIcon = null,
  inputRef = null,
  inputClass = "",
  onEnterClick = () => {},
  className = "",
  containerStyles = {},
  containerClass = "",
  variant = "",
  multi = false,
  minDate,
  maxDate,
  dateSeparator = " , ",
  ...props
}) {
  return (
    <>
      <div
        dir={dir}
        className={mergeClass(classes.container, className)}
        data-variant={variant}
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
            {label} {label2 && label2}
          </label>
        )}
        <div
          className={mergeClass(classes.inputContainer, containerClass)}
          style={customStyle}
        >
          {leftIcon && <div className={classes.leftIconBox}>{leftIcon}</div>}

          <DatePickerInput
            plugins={[<DatePanel />]}
            dateSeparator={dateSeparator}
            type="button"
            multiple={multi}
            value={value}
            onChange={setValue}
            placeholder={placeholder}
            disabled={disabled}
            minDate={minDate}
            maxDate={maxDate}
            format={dateFormat}
            inputClass={classes.inputClass}
            style={{ ...inputStyle, ...(leftIcon && { paddingLeft: 50 }) }}
            ref={inputRef}
            id={`input${label}`}
            onKeyDownCapture={(e) => {
              ["Enter", "NumpadEnter"].includes(e.code) &&
                onEnterClick &&
                onEnterClick();
            }}
            {...props}
          />
          {rightIcon && <div className={classes.rightIconBox}>{rightIcon}</div>}
        </div>
        {error && (
          <p className={`mt-1 ${[classes.errorText].join(" ")}`}>*{error}</p>
        )}
      </div>
    </>
  );
}
