import React from "react";
import { FaRegCheckCircle } from "react-icons/fa";
import { BsClockHistory } from "react-icons/bs";
import { FaRegClock } from "react-icons/fa6";
import classes from "./JobHistorySection.module.css";
import clsx from "clsx";
import moment from "moment-timezone";

export default function JobHistorySection({ jobRequests }) {
  const statusIcon = {
    completed: <FaRegCheckCircle />,
    ongoing: <BsClockHistory />,
    pending: <FaRegClock />,
  };

  return (
    <div className={classes.jobRequestsContainer}>
      <p className={clsx("fs16 fw500", classes.label)}>Recent Job Requests</p>
      <div className={classes.jobRequestsSection}>
        {jobRequests?.map((item, index) => (
          <div key={index} className={clsx(classes.informationItemJobRequests)}>
            <div className={classes.jobRequestsItem}>
              <div className={classes.statusContainer}>
                <div className={clsx(classes.status, classes[item?.status])}>
                  {statusIcon[item?.status]}
                </div>
                <div
                  className={clsx(
                    classes.statusDot,
                    jobRequests.length - 1 === index && classes.lastStatusDot
                  )}
                />
              </div>
              <p
                className={clsx(
                  "fs14 fw500",
                  classes.jobRequestsLabel,
                  classes.label
                )}
              >
                {item?.title}
              </p>
            </div>
            <p className={clsx("fs14 fw500", classes.jobRequestsDate)}>
              {moment(item?.createdOn).format("MMMM DD, YYYY")}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}
