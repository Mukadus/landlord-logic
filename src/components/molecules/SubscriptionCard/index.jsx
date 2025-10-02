import React from "react";
import classes from "./SubscriptionCard.module.css";
import clsx from "clsx";
import { getFormattedPrice } from "@/resources/utils/helper";
import moment from "moment";
 
export default function SubscriptionCard({ data }) {
  return (
    <div className={classes.cardDiv}>
      <div className={classes.userDiv}>
        <p className={clsx(classes.fullName, "fw500 fs13")}>
          {data?.user?.fullName || "-"}
        </p>
        <p className={clsx(classes.email, "fw500 fs14")}>
          {data?.user?.email || "-"}
        </p>
      </div>
      <div className={classes.amountDiv}>
        <p className={clsx(classes.nextPaymentDate, "fw500 fs14")}>
          Due by,  {moment(data?.nextPaymentDate).format("MMM DD, YYYY") || "-"}
        </p>
        <p className={clsx(classes.amount, "fw500 fs14")}>
          {getFormattedPrice(data?.amount) || "-"}
        </p>
      </div>
    </div>
  );
}