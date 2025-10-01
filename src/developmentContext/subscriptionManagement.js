import {
  RenderDateCell,
  RenderStatusCell,
  RenderTextCell,
  RenderUserCell,
  RenderCurrencyCell,
} from "@/components/organisms/ResponsiveTable/CommonCells";

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
  },
  {
    label: "Plans",
    value: "plans",
  },
];
