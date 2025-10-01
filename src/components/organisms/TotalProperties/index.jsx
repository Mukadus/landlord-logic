import clsx from "clsx";
import React from "react";
import classes from "./TotalProperties.module.css";
import Image from "next/image";
import { IoIosArrowForward } from "react-icons/io";

export default function TotalProperties({ data, setSelectedProperty }) {
  return (
    <div className={classes.mainDiv}>
      <div className={classes.headerDiv}>
        <p className={clsx(classes.title, "fs16 fw500")}>Total Properties</p>
        <p className={clsx(classes.totalProperties, "fs16 fw500")}>
          {data?.length ?? 0}
        </p>
      </div>
      <div className={classes.bodyDiv}>
        {data?.map((item) => (
          <div
            className={classes.propertyDiv}
            key={item?._id}
            onClick={() => setSelectedProperty(item)}
          >
            <div className={classes.propertyLeftCol}>
              <div className={classes.propertyImage}>
                <Image src={item?.image} alt={item?.title} fill />
              </div>
              <div className={classes.propertyInfo}>
                <p className={clsx(classes.propertyName, "fs16 fw500")}>
                  {item?.title}
                </p>
                <p className={clsx(classes.propertyStatus, "fs14 fw500")}>
                  {item?.status}
                </p>
              </div>
            </div>
            <IoIosArrowForward className={classes.arrowIcon} />
          </div>
        ))}
      </div>
    </div>
  );
}
