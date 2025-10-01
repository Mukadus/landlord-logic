"use client";
import classes from "./ComplaintsSection.module.css";
import clsx from "clsx";
import moment from "moment";

export default function ComplaintsSection({ data = {} }) {
  const complaints = Array.isArray(data?.complains) ? data.complains : [];

  return (
    <div className={classes.container}>
      <div className={classes.header}>
        <h3 className={clsx(classes.title, "fw600 fs16")}>Complaints</h3>
        <span className={clsx(classes.count, "fs12")}>
          {complaints.length} total
        </span>
      </div>

      <div className={clsx(classes.list)}>
        {complaints?.length === 0 ? (
          <p className={clsx(classes.empty, "fs14")}>No complaints found</p>
        ) : (
          complaints.map((c, idx) => (
            <div key={idx} className={classes.item}>
              <div className={classes.itemHeader}>
                <span
                  className={clsx(
                    classes.status,
                    classes[c?.status || "pending"],
                    "fs12"
                  )}
                >
                  {c?.status || "pending"}
                </span>
                <span className={clsx(classes.date, "fs12")}>
                  {moment(c?.createdOn).format("MMM DD, YYYY")}
                </span>
              </div>
              <p className={clsx(classes.message, "fs14")}>
                {c?.message || "-"}
              </p>
            </div>
          ))
        )}
      </div>
    </div>
  );
}
