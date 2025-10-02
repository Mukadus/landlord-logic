import {
  RenderDateCell,
  RenderStatusCell,
  RenderBillingMonthCell,
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
    renderValue: (item, data) => <RenderUserCell cellValue={data?.user} />,
  },
  {
    title: "Billing Month",
    key: "billingMonth",
    style: { width: "25%" },
    renderValue: (item) => <RenderBillingMonthCell cellValue={item} />,
  },
  {
    title: "Status",
    key: "status",
    style: { width: "25%" },
    renderValue: (item) => <RenderStatusCell cellValue={item} />,
  },
  {
    title: "Amount",
    key: "amount",
    style: { width: "20%" },
    renderValue: (item) => <RenderCurrencyCell cellValue={item} />,
  },
];

export const subscriptionManagementBodyData = [
  {
    user: {
      fullName: "Corey George",
    },
    billingMonth: "2021-01-01",
    status: "ongoing",
    amount: 10,
  },
  {
    user: {
      fullName: "Corey George",
    },
    billingMonth: "2021-01-01",
    status: "pending",
    amount: 10,
  },
  {
    user: {
      fullName: "Corey George",
    },
    billingMonth: "2021-01-01",
    status: "completed",
    amount: 10,
  },
  {
    user: {
      fullName: "Corey George",
    },
    billingMonth: "2021-01-01",
    status: "ongoing",
    amount: 10,
  },
  {
    user: {
      fullName: "Corey George",
    },
    billingMonth: "2021-01-01",
    status: "completed",
    amount: 10,
  },
  {
    user: {
      fullName: "Corey George",
    },
    billingMonth: "2021-01-01",
    status: "pending",
    totalProperties: 10,
    amount: 10,
  },
  {
    user: {
      fullName: "Corey George",
    },
    billingMonth: "2021-01-01",
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
    icon: "/app-images/sub-card.png",
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
    icon: "/app-images/sub-card.png",
    features: [
      "Compliance-only plan (meaning that landlord can upload their compliances documents)",
      "AI compliance reminders (up to 5 documents/year)",
      "Document uploads with auto-expiry detection",
      "Dashboard countdowns + push/email reminders",
      "Export basic compliance report (CSV/Excel)",
      "No tenant job reporting, contractor acces, payments, or messaging",
      "Jobs carry a small platform fee ( £0.50/job)",
    ],
  },
  {
    plan: "Expert",
    price: 10,
    icon: "/app-images/sub-card.png",
    features: [
      "Full automation package",
      "Stripe escrow for job payments",
      "Repair float wallet for urgent jobs",
      "Contractor payouts via Stripe Connect",
      "Unlimited AI compliance documents with reminders",
      "Export-ready VAT & tax packs",
      "co platform fee on jobs (only Stripe fees)",
      "Priority support (phone + email)",
    ],
  },
];
