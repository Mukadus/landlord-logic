import {
  RenderDateCell,
  RenderStatusCell,
  RenderTextCell,
  RenderUserCell,
  RenderCurrencyCell,
} from "@/components/organisms/ResponsiveTable/CommonCells";
import { PiFolderOpenLight } from "react-icons/pi";
import { PiTagSimple } from "react-icons/pi";

export const subscriptionManagementTableHeader = [
  {
    title: "Landlord",
    key: "user",
    style: { width: "30%" },
    renderItem: ({ data }) => <RenderUserCell cellValue={data?.user} />,
  },
  {
    title: "Joined On",
    key: "joinedOn",
    style: { width: "20%" },
    renderItem: ({ item }) => <RenderDateCell cellValue={item} />,
  },
  {
    title: "Status",
    key: "status",
    style: { width: "20%" },
    renderItem: ({ item }) => <RenderStatusCell cellValue={item} />,
  },
  {
    title: "Amount",
    key: "amount",
    style: { width: "20%" },
    renderItem: ({ item }) => <RenderCurrencyCell cellValue={item} />,
  },
  {
    title: "",
    key: "action",
    style: { width: "10%" },
  },
];

export const subscriptionManagementBodyData = [
  {
    user: {
      fullName: "Corey George",
    },
    joinedOn: "2021-01-01",
    status: "ongoing",
    amount: 10,
  },
  {
    user: {
      fullName: "Corey George",
    },
    joinedOn: "2021-01-01",
    status: "pending",
    amount: 10,
  },
  {
    user: {
      fullName: "Corey George",
    },
    joinedOn: "2021-01-01",
    status: "completed",
    amount: 10,
  },
  {
    user: {
      fullName: "Corey George",
    },
    joinedOn: "2021-01-01",
    status: "ongoing",
    amount: 10,
  },
  {
    user: {
      fullName: "Corey George",
    },
    joinedOn: "2021-01-01",
    status: "completed",
    amount: 10,
  },
  {
    user: {
      fullName: "Corey George",
    },
    joinedOn: "2021-01-01",
    status: "pending",
    totalProperties: 10,
  },
  {
    user: {
      fullName: "Corey George",
    },
    joinedOn: "2021-01-01",
    status: "completed",
    amount: 10,
  },
];

export const subscriptionTabs = [
  {
    label: "Billing",
    value: "billing",
    icon: <PiFolderOpenLight />,
  },
  {
    label: "Plans",
    value: "plans",
    icon: <PiTagSimple />,
  },
];

export const subscriptionPlansData = [
  {
    plan: "Starter",
    price: 10,
    features: [
      "Compliance-only plan (meaning that landlord can upload their compliances documents)    ",
      "AI compliance reminders (up to 5 documents/year)",
      "Document uploads with auto-expiry detection",
      "Dashboard countdowns + push/email reminders",
      "Export basic compliance report (CSV/Excel)",
      "No tenant job reporting, contractor acces, payments, or messaging",
    ],
  },
  {
    plan: "Intermediate",
    price: 10,
    features: [
      "Compliance-only plan (meaning that landlord can upload their compliances documents)    ",
      "AI compliance reminders (up to 5 documents/year)",
      "Document uploads with auto-expiry detection",
      "Dashboard countdowns + push/email reminders",
      "Export basic compliance report (CSV/Excel)",
      "No tenant job reporting, contractor acces, payments, or messaging",
    ],
  },
  {
    plan: "Expert",
    price: 10,
    features: [
      "Compliance-only plan (meaning that landlord can upload their compliances documents)    ",
      "AI compliance reminders (up to 5 documents/year)",
      "Document uploads with auto-expiry detection",
      "Dashboard countdowns + push/email reminders",
      "Export basic compliance report (CSV/Excel)",
      "No tenant job reporting, contractor acces, payments, or messaging",
    ],
  },
];
