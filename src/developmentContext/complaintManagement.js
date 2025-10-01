import {
  RenderDateCell,
  RenderStatusCell,
  RenderTextCell,
  RenderUserCell,
} from "@/components/organisms/ResponsiveTable/CommonCells";

export const complaintManagementTableHeader = [
  {
    title: "Tenant",
    key: "tenant",
    style: { width: "25%" },
    renderValue: ({ data }) => <RenderUserCell cellValue={data?.tenant} />,
  },
  {
    title: "Role",
    key: "role",
    style: { width: "15%" },
    renderValue: ({ item }) => <RenderTextCell cellValue={item} />,
  },
  {
    title: "Message",
    key: "message",
    style: { width: "25%" },
    renderValue: ({ item }) => <RenderTextCell cellValue={item} />,
  },
  {
    title: "Status",
    key: "status",
    style: { width: "20%" },
    renderValue: ({ item }) => <RenderStatusCell cellValue={item} />,
  },
  {
    title: "Action",
    key: "actions",
    style: { width: "15%" },
  },
];

export const complaintBodyData = [
  {
    tenant: {
      fullName: "John Smith",
    },
    role: "Tenant",
    message: "Water leakage in bathroom, needs immediate attention",
    status: "pending",
  },
  {
    tenant: {
      fullName: "Sarah Johnson",
    },
    role: "Tenant",
    message:
      "Heating system not working properly in winter ,Heating system not working properly in winter,Heating system not working properly in winter",
    status: "ongoing",
  },
  {
    tenant: {
      fullName: "Mike Wilson",
    },
    role: "Tenant",
    message: "Noise complaint from upstairs neighbors",
    status: "completed",
  },
  {
    tenant: {
      fullName: "Emily Davis",
    },
    role: "Tenant",
    message: "Broken window in living room",
    status: "pending",
  },
  {
    tenant: {
      fullName: "David Brown",
    },
    role: "Tenant",
    message: "Elevator maintenance required",
    status: "ongoing",
  },
  {
    tenant: {
      fullName: "Lisa Anderson",
    },
    role: "Tenant",
    message: "Internet connectivity issues",
    status: "completed",
  },
];
