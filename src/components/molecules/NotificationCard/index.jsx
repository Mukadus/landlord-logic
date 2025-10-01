import React from "react";
import classes from "./NotificationCard.module.css";
import { capitalizeFirstLetter } from "@/resources/utils/helper";
import clsx from "clsx";
import moment from "moment";

export default function NotificationCard({ data, onClick }) {
  // Format the date from API response
  const formatDate = (dateString) => {
    if (!dateString) return "";
    return moment(dateString).fromNow();
  };

  return (
    <div
      className={clsx(
        classes.notificationCard,
        data?.seen === false && classes.unseenNotificationCard
      )}
      onClick={() => onClick(data)}
    >
      <div className={classes.notificationCardHeader}>
        <h3 className={clsx(classes.title, "fs14 fw500")}>{capitalizeFirstLetter(data?.title)}</h3>
        <p className={clsx(classes.date, "fs14 fw500")}>{formatDate(data?.createdAt)}</p>
      </div>
      <p className={clsx(classes.message, "fs14 fw400 maxLine2")}>{data?.message}</p>
    </div>
  );
}
