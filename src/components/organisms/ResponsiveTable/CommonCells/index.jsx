import {
  // calculateAge,
  capitalizeFirstLetter,
  getFormattedPrice,
  imageUrl,
} from "@/resources/utils/helper";
// import Rating from "@mui/material/Rating";
import clsx from "clsx";
import moment from "moment";
import { GoDotFill } from "react-icons/go";
import Image from "next/image";
import classes from "./CommonCells.module.css";
import { FaRegCheckCircle } from "react-icons/fa";
import { MdOutlineCancel } from "react-icons/md";
import { MdOutlineWatchLater } from "react-icons/md";
import { MdOutlinePending } from "react-icons/md";

// statusClassMap - a map of status classes
const statusClassMap = {
  active: {
    className: classes.activeStatus,
    icon: <FaRegCheckCircle />,
  },
  inactive: {
    className: classes.deactiveStatus,
    icon: <MdOutlineCancel />,
  },

  completed: {
    icon: <FaRegCheckCircle />,
    className: classes.statusCompleted,
  },
  ongoing: {
    icon: <MdOutlinePending />,
    className: classes.statusOngoing,
  },
  pending: {
    icon: <MdOutlineWatchLater />,
    className: classes.statusPending,
  },
};
export const RenderCurrencyCell = ({ cellValue }) => {
  return (
    <span className={classes.textCell}>
      {cellValue != null ? getFormattedPrice(cellValue) : "-"}
    </span>
  );
};

export const RenderTextCell = ({ cellValue: item }) => {
  return (
    <span className={clsx("maxLine1", classes.textCell)}>
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

export const RenderDateCell = ({ cellValue: item }) => {
  return (
    <span className={clsx(classes?.date)}>
      {moment(item).format("DD.MM.YYYY")}
    </span>
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
  const displayValue = isBoolean ? (item ? "active" : "inactive") : item;

  const statusClass = statusClassMap[displayValue];

  return (
    <span
      className={clsx(
        classes.status,
        "fs-12 fw-600 lh-18",
        statusClass && statusClass?.className
      )}
    >
      {statusClass?.icon && statusClass.icon}
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

export const RenderUserCell = ({ cellValue }) => {
  if (!cellValue) return null;

  return (
    <div className={classes.userDataCell}>
      {cellValue?.photo && (
        <div className={classes.userAvatar}>
          <Image
            src={
              cellValue?.photo ? imageUrl(cellValue?.photo) : cellValue?.photo
            }
            alt={cellValue?.fullName}
            width={48}
            height={48}
          />
        </div>
      )}
      <div className={classes.userInfo}>
        <div className={classes.userName}>{cellValue?.fullName}</div>
        <div className={classes.userEmail}>{cellValue?.email}</div>
      </div>
    </div>
  );
};

export const categoryCell = ({ cellValue: { item } }) => {
  return item?.map((item, index) => (
    <div title={item} key={index} className={classes.categoryCell}>
      {item ? capitalizeFirstLetter(item) : "-"}
    </div>
  ));
};
