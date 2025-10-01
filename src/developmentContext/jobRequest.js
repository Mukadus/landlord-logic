import {
  RenderDateCell,
  RenderStatusCell,
  RenderTextCell,
  RenderUserCell,
  RenderCurrencyCell,
} from "@/components/organisms/ResponsiveTable/CommonCells";

export const jobRequestTableHeader = [
  {
    title: "Tenant",
    key: "tenant",
    style: { width: "20%" },
    renderValue: ({ data }) => <RenderUserCell cellValue={data?.tenant} />,
  },
  {
    title: "Contractor",
    key: "contractor",
    style: { width: "20%" },
    renderValue: ({ data }) => <RenderUserCell cellValue={data?.contractor} />,
  },
  {
    title: "Category",
    key: "category",
    style: { width: "15%" },
    renderValue: ({ item }) => <RenderTextCell cellValue={item} />,
  },
  {
    title: "Requested On",
    key: "requestedOn",
    style: { width: "15%" },
    renderValue: ({ item }) => <RenderDateCell cellValue={item} />,
  },
  {
    title: "Status",
    key: "status",
    style: { width: "10%" },
    renderValue: ({ item }) => <RenderStatusCell cellValue={item} />,
  },
  {
    title: "Amount",
    key: "amount",
    style: { width: "10%" },
    renderValue: ({ item }) => <RenderCurrencyCell cellValue={item} />,
  },
  {
    title: "",
    key: "actions",
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
    category: "Plumbing",
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
    category: "Electrical",
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
    category: "HVAC",
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
    category: "Carpentry",
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
    category: "Painting",
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
    category: "Flooring",
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
    category: "HVAC",
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
    category: "Carpentry",
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
    category: "Painting",
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
    category: "Flooring",
    requestedOn: "2024-01-10",
    status: "completed",
    amount: 650.0,
  },
];
