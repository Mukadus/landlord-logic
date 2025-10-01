import { BiMessageSquareError } from "react-icons/bi";
import { IoIosCheckboxOutline } from "react-icons/io";
import { LuSquareDashed } from "react-icons/lu";
import { PiStarFill } from "react-icons/pi";
import { RxCounterClockwiseClock } from "react-icons/rx";

export const FILTER_OPTIONS = [
  {
    label: "All",
    value: "all",
  },
  {
    label: "Active",
    value: "active",
  },
  {
    label: "Inactive",
    value: "inactive",
  },
];

export const popoverOptions = [
  {
    label: "View Details",
    value: "viewDetails",
  },
];
// Popover options for action menu
export const actionPopoverOptions = [
  {
    label: "View Details",
    value: "viewDetails",
  },
  {
    label: "Edit",
    value: "edit",
  },
  {
    label: "Delete",
    value: "delete",
  },
];
export const propertyTabs = [
  {
    label: "Overview",
    value: "overview",
    icon: <LuSquareDashed />,
  },
  {
    label: "Assigned Tenants",
    value: "tenants",
    icon: <RxCounterClockwiseClock />,
  },
  {
    label: "Complaints",
    value: "complaints",
    icon: <BiMessageSquareError />,
  },
];

export const tenantProfileTabs = [
  {
    label: "Overview",
    value: "overview",
    icon: <LuSquareDashed />,
  },
  {
    label: "All Jobs History",
    value: "allJobsHistory",
    icon: <IoIosCheckboxOutline />,
  },
  {
    label: "Rating and Reviews",
    value: "ratingAndReviews",
    icon: <PiStarFill />,
  },
];

export const categoryOptions = [
  {
    label: "Plumbing",
    value: "plumbing",
  },
  {
    label: "Electrician",
    value: "electrician",
  },
  {
    label: "Carpenter",
    value: "carpenter",
  },
];
