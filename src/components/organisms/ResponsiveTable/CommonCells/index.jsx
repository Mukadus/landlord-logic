import {
    calculateAge,
    capitalizeFirstLetter,
    getFormattedPrice,
    mediaUrl,
  } from "@/utils/helper";
  import Rating from "@mui/material/Rating";
  import clsx from "clsx";
  import moment from "moment";
  import { GoDotFill } from "react-icons/go";
  import Image from "next/image";
  import classes from "./CommonCells.module.css";
  
  const statusClassMap = {
    true: "statusFalse",
    false: "statusTrue",
    completed: "statusCompleted",
    pending: "statusPending",
    active: "activeStatus",
    deactive: "deactiveStatus",
  };
  
  export const RenderCurrencyCell = ({ cellValue }) => {
    return <span>{cellValue != null ? getFormattedPrice(cellValue) : "-"}</span>;
  };
  
  export const RenderTextCell = ({ cellValue: item }) => {
    return (
      <span className={clsx("maxLine1")}>
        {item ? capitalizeFirstLetter(item?.toString()) : item ?? "-"}
      </span>
    );
  };
  export const RenderBoldTextCell = ({ cellValue: item }) => {
    return (
      <span className={clsx("maxLine1 fw-500")}>
        {item ? capitalizeFirstLetter(item?.toString()) : item ?? "-"}
      </span>
    );
  };
  export const RenderCategoryCell = ({ cellValue: { item } }) => {
    return (
      <span title={item} className={clsx("maxLine1")}>
        {item ? capitalizeFirstLetter(item) : "-"}
      </span>
    );
  };
  
  export const RenderDateCell = ({ cellValue: item }) => {
    return (
      <span className={clsx(classes?.date)}>{moment(item).format("ll")}</span>
    );
  };
  
  export const RenderPhoneNumber = ({ cellValue: item, rowData: rowItem }) => {
    if (!rowItem) return null;
    const { fullName, phoneNumber } = rowItem;
    return (
      <div className={classes.phoneNumberCell}>
        <p className={clsx(classes.name, "fs-14 fw-500 lh-20")}>{fullName}</p>
        <p className={"fs-14 fw-400 lh-20"}>{phoneNumber}</p>
      </div>
    );
  };
  
  export const RenderStatusCell = ({ cellValue: item }) => {
    const isBoolean = typeof item === "boolean";
    const displayValue = isBoolean ? (item ? "Inactive" : "Active") : item;
  
    // Normalize specific leave status strings
    let normalized = String(item).toLowerCase();
    if (normalized === "paid leaves") {
      normalized = "paid"; // Map 'Paid Leaves' and 'Approved' to 'approved' for green styling
    } else if (normalized === "unpaid") {
      normalized = "unpaid"; // Map 'Unpaid' to 'unpaid' for red styling
    }
  
    const statusClass = statusClassMap[normalized];
  
    const shouldShowDot = normalized !== "paid" && normalized !== "unpaid"; // Also hide dot for approved status
  
    return (
      <span
        className={clsx(
          classes.status,
          "fs-12 fw-600 lh-18",
          statusClass && classes[statusClass]
        )}
      >
        {shouldShowDot && <GoDotFill className={classes.dotIcon} />}
        {capitalizeFirstLetter(displayValue)}
      </span>
    );
  };
  export const IconButton = ({ icon, onClick }) => {
    return (
      <div className={classes?.iconButton} onClick={onClick}>
        {icon}
      </div>
    );
  };
  
  export const RenderAgeCell = ({ cellValue: item }) => {
    return <span className={clsx(classes?.age)}>{calculateAge(item)} Years</span>;
  };
  
  export const RenderProductCell = ({ cellValue }) => {
    if (!cellValue) return null;
  
    return (
      <div className={classes.productDataCell}>
        <div className={classes.productAvatar}>
          <Image
            src={mediaUrl(cellValue?.icon)}
            // src={"/app-images/star.svg"}
            alt={cellValue?.name}
            width={48}
            height={48}
          />
        </div>
        <div className={classes.productInfo}>
          <div className={classes.productName}>{cellValue?.name}</div>
          <div className={classes.productId}>{cellValue?.description}</div>
        </div>
      </div>
    );
  };
  