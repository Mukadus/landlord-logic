"use client";
import React, { memo, useMemo } from "react";
import Image from "next/image";
import classes from "./ReviewCard.module.css";
import clsx from "clsx";
import moment from "moment-timezone";
import { FaStar, FaRegStar } from "react-icons/fa";

function ReviewCard({ data = [] }) {
  const reviews = Array.isArray(data) ? data : [];

  const renderStars = (rating) => {
    return Array.from({ length: 5 }, (_, index) => {
      const StarIcon = index < rating ? FaStar : FaRegStar;
      return (
        <StarIcon
          key={index}
          className={clsx(classes.star, index < rating && classes.starFilled)}
        />
      );
    });
  };

  const averageRating = useMemo(() => {
    if (reviews.length === 0) return 0;
    const total = reviews.reduce(
      (sum, review) => sum + (review.rating || 0),
      0
    );
    return (total / reviews.length).toFixed(1);
  }, [reviews]);

  if (reviews.length === 0) {
    return (
      <div className={classes.container}>
        <div className={classes.header}>
          <h3 className={clsx(classes.title, "fw600 fs16")}>
            Reviews & Ratings
          </h3>
        </div>
        <div className={classes.noReviews}>
          <p className="fs14 fw400 text-secondary">
            No reviews found for this tenant.
          </p>
        </div>
      </div>
    );
  }

  return (
    <div className={classes.container}>
      <div className={classes.header}>
        <h3 className={clsx(classes.title, "fw600 fs16")}>Reviews & Ratings</h3>
        <div className={classes.ratingSummary}>
          <div className={classes.averageRating}>
            <span className={clsx(classes.ratingNumber, "fs24 fw600")}>
              {averageRating}
            </span>
            <div className={classes.starsContainer}>
              {renderStars(Math.round(averageRating))}
            </div>
          </div>
          <p className={clsx(classes.reviewCount, "fs12 fw400")}>
            Based on {reviews.length} review{reviews.length !== 1 ? "s" : ""}
          </p>
        </div>
      </div>

      <div className={clsx(classes.reviewsList, "custom-scrollbar")}>
        {reviews.map((review, index) => (
          <div key={index} className={classes.reviewCard}>
            <div className={classes.reviewHeader}>
              <div className={classes.reviewerInfo}>
                <div className={classes.avatarContainer}>
                  <Image
                    src={
                      review.reviewer?.photo || "/app-images/default-user.png"
                    }
                    alt={review.reviewer?.name || "Reviewer"}
                    fill
                    sizes="32px"
                    loading="lazy"
                  />
                </div>
                <div className={classes.reviewerDetails}>
                  <p className={clsx(classes.reviewerName, "fs14 fw500")}>
                    {review.reviewer?.name || "Anonymous"}
                  </p>
                  <p className={clsx(classes.reviewDate, "fs12 fw400")}>
                    {moment(review.createdOn).format("MMM DD, YYYY")}
                  </p>
                </div>
              </div>
              <div className={classes.ratingContainer}>
                {renderStars(review.rating)}
              </div>
            </div>

            {review.comment && (
              <div className={classes.reviewContent}>
                <p className={clsx(classes.comment, "fs14 fw400")}>
                  {review.comment}
                </p>
              </div>
            )}

            {review.property && (
              <div className={classes.propertyInfo}>
                <p className={clsx(classes.propertyName, "fs12 fw500")}>
                  Property: {review.property.name}
                </p>
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}

export default memo(ReviewCard);
