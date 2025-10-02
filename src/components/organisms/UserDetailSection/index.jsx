import clsx from "clsx";
import moment from "moment-timezone";
import Image from "next/image";
import React from "react";
import classes from "./UserDetailSection.module.css";
import StarRatings from "react-star-ratings";
import PortfolioSection from "../PortfolioSection";

export default function UserDetailSection({
  data,
  text,
  stats,
  showPortfolio = false,
}) {
  return (
    <div className={clsx(classes.userDetailSection)}>
      <div className={classes.userDetailSectionHeader}>
        <div className={classes.userDetailSectionHeaderLeft}>
          <div className={classes.imageDiv}>
            <Image src={data?.photo} alt={"user image"} fill />
          </div>
          <div className={classes.userNameDiv}>
            <p className={clsx(classes.userName, "fw400 fs24")}>
              {data?.fullName}
            </p>
            {text && <p className={clsx("fs10 fw600", classes.text)}>{text}</p>}
            {data?.createdOn && (
              <p className={clsx("fs14 fw500", classes.joinedOn)}>
                {moment(data?.createdOn).format("MMMM DD, YYYY")}
              </p>
            )}
          </div>
        </div>
        {data?.rating && data?.role === "contractor" && (
          <StarRatings
            rating={data?.rating}
            numberOfStars={5}
            starDimension="24px"
            starSpacing="2px"
            starRatedColor="#fbbf24"
            starEmptyColor="#e4e5e9"
          />
        )}
      </div>
      <div className={classes.userDetailSectionFooter}>
        {stats?.map((item, index) => (
          <div key={index}>
            <p className={clsx("fs32 fw400", classes.title)}>{item.title}</p>
            <p className={clsx("fs14 fw400", classes.value)}>{item.value}</p>
          </div>
        ))}
      </div>

      {showPortfolio && <PortfolioSection data={data?.portfolio} />}
    </div>
  );
}
