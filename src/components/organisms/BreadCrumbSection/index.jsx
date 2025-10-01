import React from "react";
import classes from "./BreadCrumbSection.module.css";
import Button from "@/components/atoms/Button";
import clsx from "clsx";

export default function BreadCrumbSection({
  title = "",
  title2 = "",
  showStatusButton = false,
  label = "",
  handleStatusButton = () => {},
  leftIcon = null,
}) {
  return (
    <div className={classes.breadCrumbSection}>
      <div className={classes.headingTitle}>
        {title && (
          <h6 className={clsx(classes.title, "fs18 fw600")}>{title}</h6>
        )}
        {title && title2 && (
          <span className={clsx(classes.separator, "fs24")}>{">"}</span>
        )}
        {title2 && (
          <h6 className={clsx(classes.title2, "fs18 fw600")}>{title2}</h6>
        )}
      </div>
      {showStatusButton && (
        <div className={classes.statusButton}>
          <Button
            onClick={handleStatusButton}
            label={label}
            variant={"transparent"}
            leftIcon={leftIcon}
          />
        </div>
      )}
    </div>
  );
}
