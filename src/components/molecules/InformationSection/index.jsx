import React from "react";
import classes from "./InformationSection.module.css";
import clsx from "clsx";
import { LuPencil } from "react-icons/lu";
import moment from "moment-timezone";
// import { overViewData } from "@/developmentContext/landlordInsight";

export default function InformationSection({
  data,
  header = false,
  containerClass = "",
  jobRequests,
}) {
  return (
    <div className={jobRequests ? classes.mainDiv : ""}>
      <div
        className={clsx(
          classes.informationSection,
          containerClass,
          jobRequests ? classes.informationSectionJobRequests : ""
        )}
      >
        {header && (
          <div className={classes.headerDiv}>
            <p className={clsx(classes.title, "fs16 fw500")}>Information</p>
            <LuPencil className={classes.editIcon} />
          </div>
        )}
        {Array.isArray(data) &&
          data?.map((item, index) => (
            <div key={index} className={classes.informationItem}>
              {item?.label?.toLowerCase() === "description" ? (
                <div className={classes.descriptionContainer}>
                  <h3 className={clsx("fs16 fw600", classes.descriptionTitle)}>
                    {item?.label}
                  </h3>
                  <div className={classes.descriptionContent}>
                    {item?.value}
                  </div>
                </div>
              ) : (
                <>
                  <div className={classes.informationItem}>
                    {item?.icon && item?.icon}
                    <p className={clsx("fs14 fw500", classes.label)}>
                      {item?.label}
                    </p>
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
                </>
              )}
            </div>
          ))}
      </div>
      {jobRequests && (
        <div className={classes.jobRequestsContainer}>
          <p className={clsx("fs16 fw500", classes.label)}>
            Recent Job Requests
          </p>
          <div className={classes.jobRequestsSection}>
            {jobRequests?.map((item, index) => (
              <div key={index} className={classes.informationItem}>
                <p className={clsx("fs14 fw500", classes.label)}>
                  {item?.title}
                </p>
                <p className={clsx("fs14 fw500", classes.value)}>
                  {moment(item?.createdOn).format("MMMM DD, YYYY")}
                </p>
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}
