import {
  RenderUserCell,
  RenderTextCell,
  RenderDateCell,
  RenderStatusCell,
  RenderCurrencyCell,
} from "@/components/organisms/ResponsiveTable/CommonCells";
import { getFormattedPrice } from "@/resources/utils/helper";

export const dashboardData = {
  totalUsers: 125,
  totalRevenue: 125456,
  newUsers: 32,
  transactions: [
    {
      user: {
        fullName: "Julian",
        email: "julian.neslon@email.com",
      },
      nextPaymentDate: "2021-01-01",
      amount: 145,
    },
    {
      user: {
        fullName: "Isabell",
        email: "isabell.johnson@email.com",
      },
      nextPaymentDate: "2021-01-01",
      amount: 145,
    },
    {
      user: {
        fullName: "Noah",
        email: "noah.carter@email.com",
      },
      nextPaymentDate: "2021-01-01",
      amount: 145,
    },
    {
      user: {
        fullName: "Olivia",
        email: "olivia.rodriguez@email.com",
      },
      nextPaymentDate: "2021-01-01",
      amount: 145,
    },
  ],
  revenueGraph: [
    { name: "Jan", value: 580 },
    { name: "Feb", value: 650 },
    { name: "Mar", value: 690 },
    { name: "Apr", value: 590 },
    { name: "May", value: 660 },
    { name: "Jun", value: 570 },
    { name: "Jul", value: 650 },
    { name: "Aug", value: 680 },
    { name: "Sep", value: 660 },
    { name: "Oct", value: 650 },
    { name: "Nov", value: 580 },
    { name: "Dec", value: 670 },
  ],
  registrations: [
    {
      fullName: "Helen Emmerich",
      photo: "/app-images/Avatar.png",
      email: "helen.emmerich@email.com",
      createdAt: "2021-01-01",
      status: true,
      totalProperties: 10,
    },
    {
      fullName: "Helen Emmerich",
      photo: "/app-images/Avatar.png",
      email: "helen.emmerich@email.com",
      createdAt: "2021-01-01",
      status: true,
      totalProperties: 10,
    },
    {
      fullName: "Helen Emmerich",
      photo: "/app-images/Avatar.png",
      email: "helen.emmerich@email.com",
      createdAt: "2021-01-01",
      status: true,
      totalProperties: 10,
    },
  ],
};

export const statsData = (data) => [
  {
    title: "Contractors",
    value: data?.totalUsers,
    img: "/svgs/nav-3.svg",
    subTitle: "Users",
    route: "/contractor-profiles",
  },
  {
    title: "Total Revenue",
    value: getFormattedPrice(data?.totalRevenue),
    img: "/svgs/nav-7.svg",
    route: "/subscription-management",
  },
  {
    title: "Tenants",
    value: data?.newUsers,
    img: "/svgs/nav-6.svg",
    route: "/tenant-profiles",
  },
];

export const registrationTableHeader = [
  {
    title: "Landlord",
    key: "landlord",
    style: { width: "30%" },
    renderValue: (item, data) => <RenderUserCell cellValue={data} />,
  },
  {
    title: "Joined On",
    key: "createdAt",
    style: { width: "20%" },
    renderValue: (item) => <RenderDateCell cellValue={item} />,
  },
  {
    title: "Status",
    key: "status",
    style: { width: "20%" },
    renderValue: (item) => <RenderStatusCell cellValue={item} />,
  },
  {
    title: "Total Properties",
    key: "totalProperties",
    style: { width: "20%" },
    renderValue: (item) => <RenderTextCell cellValue={item} />,
  },
  {
    title: "",
    key: "action",
    style: { width: "10%" },
  },
];
