import {
  RenderDateCell,
  RenderStatusCell,
  RenderTextCell,
  RenderUserCell,
} from "@/components/organisms/ResponsiveTable/CommonCells";
import { FaRegCircleCheck } from "react-icons/fa6";
import { LuMessageSquare, LuUser } from "react-icons/lu";

export const complaintManagementTableHeader = [
  {
    title: "Name",
    key: "user",
    style: { width: "25%" },
    renderValue: (item, data) => <RenderUserCell cellValue={data?.user} />,
  },
  {
    title: "Role",
    key: "user",
    style: { width: "15%" },
    renderValue: (item) => <RenderTextCell cellValue={item?.role} />,
  },
  {
    title: "Message",
    key: "message",
    style: { width: "25%" },
    renderValue: (item) => <RenderTextCell cellValue={item} />,
  },
  {
    title: "Status",
    key: "status",
    style: { width: "20%" },
    renderValue: (item) => <RenderStatusCell cellValue={item} />,
  },
  {
    title: "",
    key: "action",
    style: { width: "15%" },
  },
];

export const complaintBodyData = [
  {
    user: {
      fullName: "John Smith",
      role: "tenant",
    },
    message: "Water leakage in bathroom, needs immediate attention",
    status: "pending",
  },
  {
    user: {
      fullName: "Sarah Johnson",
      role: "landlord",
    },
    message:
      "Heating system not working properly in winter ,Heating system not working properly in winter,Heating system not working properly in winter",
    status: "ongoing",
  },
  {
    user: {
      fullName: "Mike Wilson",
      role: "tenant",
    },
    message: "Noise complaint from upstairs neighbors",
    status: "completed",
  },
  {
    user: {
      fullName: "Emily Davis",
      role: "tenant",
    },
    message: "Broken window in living room",
    status: "pending",
  },
  {
    user: {
      fullName: "David Brown",
      role: "tenant",
    },
    message: "Elevator maintenance required",
    status: "ongoing",
  },
  {
    user: {
      fullName: "Lisa Anderson",
      role: "landlord",
    },
    message: "Internet connectivity issues",
    status: "completed",
  },
];

export const complaintDetailData = {
  user: {
    fullName: "John Smith",
    role: "tenant",
  },
  message: "Water leakage in bathroom, needs immediate attention",
  status: "pending",
  createdOn: "2021-01-01T00:00:00.000Z",
};

export const overViewData = (data) => {
  return [
    {
      label: "Full Name",
      value: data?.user?.fullName,
      icon: <LuUser />,
    },
    {
      label: "Role",
      value: data?.user?.role,
      icon: <LuUser />,
    },
    {
      label: "Status",
      value: data?.status,
      icon: <FaRegCircleCheck />,
    },
    {
      label: "Message",
      value: data?.message,
      type: "text",
    },
  ];
};
