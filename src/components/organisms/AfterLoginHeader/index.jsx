import React from "react";
import classes from "./AfterLoginHeader.module.css";

export default function AfterLoginHeader({ children }) {
  return (
    <div className={classes.afterLoginHeader}>
      <div className={classes.header}>
        <p className={classes.headerTitle}>Admin Dashboard</p>
      </div>
      <div className={classes.body}>{children}</div>
    </div>
  );
}
