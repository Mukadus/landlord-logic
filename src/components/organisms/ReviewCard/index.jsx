"use client";
import React, { memo } from "react";
import Image from "next/image";
import classes from "./ReviewCard.module.css";
import clsx from "clsx";
import moment from "moment-timezone";
import StarRatings from "react-star-ratings";

function ReviewCard({ data = [] }) {
  const reviews = Array.isArray(data) ? data : [];

  return (
    <div className={classes.mainDiv}>
      <div className={clsx(classes.reviewsList, "custom-scrollbar")}>
        {reviews?.map((review, index) => {
          // Determine who gave the review
          const givenBy = review?.givenBy;
          const reviewerName = givenBy?.fullName;
          const reviewerType = review?.givenBy?.role;

          return (
            <div key={index} className={classes.reviewCard}>
              <div className={classes.reviewCardHeader}>
                <div className={classes.reviewHeader}>
                  <div className={classes.reviewerInfo}>
                    <div className={classes.avatarContainer}>
                      <Image
                        src="/app-images/default-user.png"
                        alt={reviewerName || "Reviewer"}
                        fill
                        sizes="32px"
                        loading="lazy"
                      />
                    </div>
                    <div className={classes.reviewerDetails}>
                      {reviewerName && (
                        <p className={clsx(classes.reviewerName, "fs14 fw500")}>
                          {reviewerName}
                        </p>
                      )}
                      <p className={clsx(classes.reviewerType, "fs12 fw400")}>
                        {reviewerType}
                      </p>
                      <p className={clsx(classes.reviewDate, "fs12 fw400")}>
                        {moment(review.createdOn).format("MMM DD, YYYY")}
                      </p>
                    </div>
                  </div>
                  <div className={classes.ratingContainer}>
                    <StarRatings
                      rating={review.rating}
                      numberOfStars={5}
                      starDimension="14px"
                      starSpacing="2px"
                      starRatedColor="#fbbf24"
                      starEmptyColor="#e4e5e9"
                    />
                    <span className={clsx(classes.ratingValue, "fs12 fw500")}>
                      {review.rating}
                    </span>
                  </div>
                </div>

                {review?.message && (
                  <div className={classes.reviewContent}>
                    <p className={clsx(classes.comment, "fs14 fw400")}>
                      {review?.message}
                    </p>
                  </div>
                )}
              </div>

              {review?.property?.title && (
                <div className={classes.propertyInfo}>
                  <p className={clsx(classes.propertyName, "fs12 fw500")}>
                    Property: {review?.property?.title}
                  </p>
                </div>
              )}
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default memo(ReviewCard);
