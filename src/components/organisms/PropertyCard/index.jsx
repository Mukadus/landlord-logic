"use client";
import React, { memo } from "react";
import Image from "next/image";
import classes from "./PropertyCard.module.css";
import clsx from "clsx";
import moment from "moment-timezone";
import { RenderStatusCell } from "../ResponsiveTable/CommonCells";
import { LuMapPin, LuUser, LuCalendar } from "react-icons/lu";

function PropertyCard({ data }) {
  return (
    <div className={classes.container}>
      {/* Property Image */}
      <div className={classes.imageContainer}>
        <Image
          src={data?.image || "/app-images/default-fallback-image.png"}
          alt={data?.title || "Property"}
          fill
          sizes="(max-width: 768px) 100vw, 400px"
          loading="lazy"
          className={classes.propertyImage}
        />
      </div>

      {/* Property Content */}
      <div className={classes.content}>
        {/* Property Title */}
        <div className={classes.titleSection}>
          <h3 className={clsx(classes.propertyTitle, "fs18 fw600")}>
            {data?.title || "Property Name"}
          </h3>
          {data?.status && (
            <div className={classes.statusContainer}>
              <RenderStatusCell cellValue={data?.status} />
            </div>
          )}
        </div>

        {/* Location */}
        {data?.location && (
          <div className={classes.infoRow}>
            <LuMapPin className={classes.infoIcon} />
            <p className={clsx(classes.infoText, "fs14 fw400")}>
              {data?.location}
            </p>
          </div>
        )}

        {/* Landlord Info */}
        {data?.landlord && (
          <div className={classes.infoRow}>
            <LuUser className={classes.infoIcon} />
            <div className={classes.userInfo}>
              <p className={clsx(classes.label, "fs12 fw500")}>Landlord</p>
              <p className={clsx(classes.infoText, "fs14 fw400")}>
                {data?.landlord?.fullName || data?.landlord}
              </p>
            </div>
          </div>
        )}

        {/* Tenant Info */}
        {data?.tenant && (
          <div className={classes.infoRow}>
            <LuUser className={classes.infoIcon} />
            <div className={classes.userInfo}>
              <p className={clsx(classes.label, "fs12 fw500")}>Tenant</p>
              <p className={clsx(classes.infoText, "fs14 fw400")}>
                {data?.tenant?.fullName || data?.tenant}
              </p>
            </div>
          </div>
        )}

        {/* Registration Date */}
        {data?.registrationDate && (
          <div className={classes.infoRow}>
            <LuCalendar className={classes.infoIcon} />
            <div className={classes.userInfo}>
              <p className={clsx(classes.label, "fs12 fw500")}>
                Registration Date
              </p>
              <p className={clsx(classes.infoText, "fs14 fw400")}>
                {moment(data?.registrationDate).format("MMMM DD, YYYY")}
              </p>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

export default memo(PropertyCard);
