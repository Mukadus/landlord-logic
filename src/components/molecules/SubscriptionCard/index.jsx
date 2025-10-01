import React from "react";
import classes from "./SubscriptionCard.module.css";
import clsx from "clsx";
import { getFormattedPrice } from "@/resources/utils/helper";

export default function SubscriptionCard({ data }) {
  return (
    <div className={classes.cardDiv}>
      <div className={classes.header}>
        <div className={classes.headerSection}>
          <div className={classes.iconContainer}>
            <div className={classes.iconBackground}>
              <div className={classes.iconSquare}>
                {data?.icon}
              </div>
            </div>
          </div>
          <div className={classes.headerSection}>
            <h3 className={clsx(classes.planName, "fw500 fs16")}>
              {data?.plan || "Starter"}
            </h3>
          </div>
        </div>

        <h3 className={clsx(classes.price, "fw600 fs30")}>
          {getFormattedPrice(data?.price) || "£14.99"}
        </h3>
      </div>

      <div className={classes.body}>
        <ul className={classes.featuresList}>
          {data?.features && data.features.length > 0
            ? data.features.map((feature, index) => (
                <li key={index} className={clsx(classes.featureItem, "fs14")}>
                  {feature}
                </li>
              ))
            : null}
        </ul>
      </div>
    </div>
  );
}
