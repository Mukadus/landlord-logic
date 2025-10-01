import React from "react";
import classes from "./InformationSection.module.css";
import clsx from "clsx";
import { LuPencil } from "react-icons/lu";
import { overViewData } from "@/developmentContext/landlordInsight";

export default function InformationSection({ data }) {
  return (
    <div className={classes.informationSection}>
      <div className={classes.headerDiv}>
        <p className={clsx(classes.title, "fs16 fw500")}>Information</p>
        <LuPencil className={classes.editIcon} />
      </div>
      {overViewData(data)?.map((item, index) => (
        <div key={index} className={classes.informationItem}>
          <div className={classes.informationItem}>
            {item?.icon && item?.icon}
            <p className={clsx("fs14 fw500", classes.label)}>{item?.label}</p>
          </div>
          <p
            className={clsx(
              "fs14 fw500",
              item?.value === "active"
                ? classes.activeStatus
                : item?.value === "inactive" && classes.inactiveStatus,
              item?.type === "status" ? classes.statusValue : "",
              classes.value
            )}
          >
            {item?.value}
          </p>
        </div>
      ))}
    </div>
  );
}
