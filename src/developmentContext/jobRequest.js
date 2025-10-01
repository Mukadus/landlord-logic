import {
  RenderDateCell,
  RenderStatusCell,
  RenderTextCell,
  RenderUserCell,
  RenderCurrencyCell,
  RenderCategoryCell,
} from "@/components/organisms/ResponsiveTable/CommonCells";

export const jobRequestTableHeader = [
  {
    title: "Tenant",
    key: "tenant",
    style: { width: "20%" },
    renderValue: (item, data) => <RenderUserCell cellValue={data?.tenant} />,
  },
  {
    title: "Contractor",
    key: "contractor",
    style: { width: "20%" },
    renderValue: (item, data) => (
      <RenderUserCell cellValue={data?.contractor} />
    ),
  },
  {
    title: "Category",
    key: "category",
    style: { width: "15%" },
    renderValue: (item) => <RenderCategoryCell cellValue={item} />,
  },
  {
    title: "Requested On",
    key: "requestedOn",
    style: { width: "15%" },
    renderValue: (item) => <RenderDateCell cellValue={item} />,
  },
  {
    title: "Status",
    key: "status",
    style: { width: "10%" },
    renderValue: (item) => <RenderStatusCell cellValue={item} />,
  },
  {
    title: "Amount",
    key: "amount",
    style: { width: "10%" },
    renderValue: (item) => <RenderCurrencyCell cellValue={item} />,
  },
  {
    title: "",
    key: "action",
    style: { width: "10%" },
  },
];

export const jobRequestBodyData = [
  {
    tenant: {
      fullName: "John Smith",
    },
    contractor: {
      fullName: "Mike Johnson",
    },
    category: [{ name: "Carpentry" }, { name: "Painting" }],
    requestedOn: "2024-01-15",
    status: "pending",
    amount: 250.0,
  },
  {
    tenant: {
      fullName: "Sarah Wilson",
    },
    contractor: {
      fullName: "David Brown",
    },
    category: [{ name: "Carpentry" }, { name: "Painting" }],
    requestedOn: "2024-01-14",
    status: "ongoing",
    amount: 450.0,
  },
  {
    tenant: {
      fullName: "Emily Davis",
    },
    contractor: {
      fullName: "Robert Taylor",
    },
    category: [{ name: "Carpentry" }, { name: "Painting" }],
    requestedOn: "2024-01-13",
    status: "completed",
    amount: 750.0,
  },
  {
    tenant: {
      fullName: "Michael Chen",
    },
    contractor: {
      fullName: "Lisa Anderson",
    },
    category: [{ name: "Carpentry" }, { name: "Painting" }],
    requestedOn: "2024-01-12",
    status: "pending",
    amount: 320.0,
  },
  {
    tenant: {
      fullName: "Jennifer Lee",
    },
    contractor: {
      fullName: "Tom Wilson",
    },
    category: [{ name: "Painting" }, { name: "Carpentry" }],
    requestedOn: "2024-01-11",
    status: "ongoing",
    amount: 180.0,
  },
  {
    tenant: {
      fullName: "Alex Rodriguez",
    },
    contractor: {
      fullName: "Maria Garcia",
    },
    category: [
      { name: "Flooring" },
      { name: "Carpentry" },
      { name: "Painting" },
    ],
    requestedOn: "2024-01-10",
    status: "completed",
    amount: 650.0,
  },
  {
    tenant: {
      fullName: "Emily Davis",
    },
    contractor: {
      fullName: "Robert Taylor",
    },
    category: [{ name: "HVAC" }, { name: "Plumbing" }, { name: "Electrical" }],
    requestedOn: "2024-01-13",
    status: "completed",
    amount: 750.0,
  },
  {
    tenant: {
      fullName: "Michael Chen",
    },
    contractor: {
      fullName: "Lisa Anderson",
    },
    category: [
      { name: "Carpentry" },
      { name: "Painting" },
      { name: "Flooring" },
    ],
    requestedOn: "2024-01-12",
    status: "pending",
    amount: 320.0,
  },
  {
    tenant: {
      fullName: "Jennifer Lee",
    },
    contractor: {
      fullName: "Tom Wilson",
    },
    category: [
      { name: "Painting" },
      { name: "Carpentry" },
      { name: "Flooring" },
    ],
    requestedOn: "2024-01-11",
    status: "ongoing",
    amount: 180.0,
  },
  {
    tenant: {
      fullName: "Alex Rodriguez",
    },
    contractor: {
      fullName: "Maria Garcia",
    },
    category: [
      { name: "Flooring" },
      { name: "Gardening" },
      { name: "Landscaping" },
    ],
    requestedOn: "2024-01-10",
    status: "completed",
    amount: 650.0,
  },
];

export const jobRequestDetailData = {
  tenant: {
    fullName: "John Smith",
  },
  requestedOn: "2024-01-15",
  amount: 250.0,
  category: [{ name: "Carpentry" }, { name: "Painting" }],
  urgency: "high",
  status: "ongoing",
  description:
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
};
// export const jobRequestDetailData = {
