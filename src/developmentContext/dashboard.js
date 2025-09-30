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
      email: "helen.emmerich@email.com",
      createdAt: "2021-01-01",
      status: true,
      totalProperties: 10,
    },
    {
      fullName: "Helen Emmerich",
      email: "helen.emmerich@email.com",
      createdAt: "2021-01-01",
      status: true,
      totalProperties: 10,
    },
    {
      fullName: "Helen Emmerich",
      email: "helen.emmerich@email.com",
      createdAt: "2021-01-01",
      status: true,
      totalProperties: 10,
    },
  ],
};

export const statsData = (data) => [
  {
    title: "Active Users",
    value: data.totalUsers,
    img: "/svgs/nav-3.svg",
    subTitle: "Users",
  },
  {
    title: "Total Revenue",
    value: getFormattedPrice(data.totalRevenue),
    img: "/svgs/nav-7.svg",
  },
  {
    title: "New Sign-ups",
    value: data.newUsers,
    img: "/svgs/nav-6.svg",
  },
];
