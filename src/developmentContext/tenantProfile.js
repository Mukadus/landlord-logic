import {
  RenderDateCell,
  RenderStatusCell,
  RenderTextCell,
  RenderUserCell,
  RenderCurrencyCell,
} from "@/components/organisms/ResponsiveTable/CommonCells";
import moment from "moment-timezone";
import { FaRegCircleCheck } from "react-icons/fa6";
import { GrLocation } from "react-icons/gr";
import { IoCalendarClearOutline } from "react-icons/io5";
import { LuUser } from "react-icons/lu";

export const tenantProfileTableHeader = [
  {
    title: "Landlord",
    key: "user",
    style: { width: "30%" },
    renderValue: (item, data) => <RenderUserCell cellValue={data?.user} />,
  },
  {
    title: "Landlord",
    key: "landlord",
    style: { width: "20%" },
    renderValue: (item) => <RenderTextCell cellValue={item} />,
  },
  {
    title: "Joined On",
    key: "joinedOn",
    style: { width: "15%" },
    renderValue: (item) => <RenderDateCell cellValue={item} />,
  },
  {
    title: "Status",
    key: "status",
    style: { width: "15%" },
    renderValue: (item) => <RenderStatusCell cellValue={item} />,
  },
  {
    title: "Total Spent",
    key: "totalSpent",
    style: { width: "10%" },
    renderValue: (item) => <RenderCurrencyCell cellValue={item} />,
  },
  {
    title: "",
    key: "action",
    style: { width: "10%" },
  },
];

export const tenantProfileBodyData = [
  {
    user: {
      fullName: "John Smith",
      photo: "/app-images/Avatar.png",
      email: "john.smith@email.com",
    },
    landlord: "Sarah Johnson",
    joinedOn: "2023-01-15",
    status: "active",
    totalSpent: 2500.0,
  },
  {
    user: {
      fullName: "Emily Davis",
      photo: "/app-images/Avatar.png",
      email: "emily.davis@email.com",
    },
    landlord: "Michael Brown",
    joinedOn: "2023-03-22",
    status: "pending",
    totalSpent: 1800.5,
  },
  {
    user: {
      fullName: "David Wilson",
      photo: "/app-images/Avatar.png",
      email: "david.wilson@email.com",
    },
    landlord: "Lisa Anderson",
    joinedOn: "2022-11-08",
    status: "active",
    totalSpent: 3200.75,
  },
  {
    user: {
      fullName: "Maria Garcia",
      photo: "/app-images/Avatar.png",
      email: "maria.garcia@email.com",
    },
    landlord: "Robert Taylor",
    joinedOn: "2023-05-10",
    status: "inactive",
    totalSpent: 950.25,
  },
  {
    user: {
      fullName: "James Miller",
      photo: "/app-images/Avatar.png",
      email: "james.miller@email.com",
    },
    landlord: "Jennifer White",
    joinedOn: "2023-02-28",
    status: "active",
    totalSpent: 4100.0,
  },
  {
    user: {
      fullName: "Sarah Thompson",
      photo: "/app-images/Avatar.png",
      email: "sarah.thompson@email.com",
    },
    landlord: "Christopher Lee",
    joinedOn: "2023-04-12",
    status: "pending",
    totalSpent: 1200.0,
  },
  {
    user: {
      fullName: "Michael Johnson",
      photo: "/app-images/Avatar.png",
      email: "michael.johnson@email.com",
    },
    landlord: "Amanda Clark",
    joinedOn: "2022-12-05",
    status: "active",
    totalSpent: 2800.5,
  },
  {
    user: {
      fullName: "John Smith",
      photo: "/app-images/Avatar.png",
      email: "john.smith@email.com",
    },
    landlord: "Sarah Johnson",
    joinedOn: "2023-01-15",
    status: "active",
    totalSpent: 2500.0,
  },
  {
    user: {
      fullName: "Emily Davis",
      photo: "/app-images/Avatar.png",
      email: "emily.davis@email.com",
    },
    landlord: "Michael Brown",
    joinedOn: "2023-03-22",
    status: "pending",
    totalSpent: 1800.5,
  },
  {
    user: {
      fullName: "David Wilson",
      photo: "/app-images/Avatar.png",
      email: "david.wilson@email.com",
    },
    landlord: "Lisa Anderson",
    joinedOn: "2022-11-08",
    status: "active",
    totalSpent: 3200.75,
  },
  {
    user: {
      fullName: "Maria Garcia",
      photo: "/app-images/Avatar.png",
      email: "maria.garcia@email.com",
    },
    landlord: "Robert Taylor",
    joinedOn: "2023-05-10",
    status: "inactive",
    totalSpent: 950.25,
  },
  {
    user: {
      fullName: "James Miller",
      photo: "/app-images/Avatar.png",
      email: "james.miller@email.com",
    },
    landlord: "Jennifer White",
    joinedOn: "2023-02-28",
    status: "active",
    totalSpent: 4100.0,
  },
  {
    user: {
      fullName: "Sarah Thompson",
      photo: "/app-images/Avatar.png",
      email: "sarah.thompson@email.com",
    },
    landlord: "Christopher Lee",
    joinedOn: "2023-04-12",
    status: "pending",
    totalSpent: 1200.0,
  },
  {
    user: {
      fullName: "Michael Johnson",
      photo: "/app-images/Avatar.png",
      email: "michael.johnson@email.com",
    },
    landlord: "Amanda Clark",
    joinedOn: "2022-12-05",
    status: "active",
    totalSpent: 2800.5,
  },
  {
    user: {
      fullName: "David Wilson",
      photo: "/app-images/Avatar.png",
      email: "david.wilson@email.com",
    },
    landlord: "Lisa Anderson",
    joinedOn: "2022-11-08",
    status: "active",
    totalSpent: 3200.75,
  },
  {
    user: {
      fullName: "Maria Garcia",
      photo: "/app-images/Avatar.png",
      email: "maria.garcia@email.com",
    },
    landlord: "Robert Taylor",
    joinedOn: "2023-05-10",
    status: "inactive",
    totalSpent: 950.25,
  },
  {
    user: {
      fullName: "James Miller",
      photo: "/app-images/Avatar.png",
      email: "james.miller@email.com",
    },
    landlord: "Jennifer White",
    joinedOn: "2023-02-28",
    status: "active",
    totalSpent: 4100.0,
  },
  {
    user: {
      fullName: "Sarah Thompson",
      photo: "/app-images/Avatar.png",
      email: "sarah.thompson@email.com",
    },
    landlord: "Christopher Lee",
    joinedOn: "2023-04-12",
    status: "pending",
    totalSpent: 1200.0,
  },
  {
    user: {
      fullName: "Michael Johnson",
      photo: "/app-images/Avatar.png",
      email: "michael.johnson@email.com",
    },
    landlord: "Amanda Clark",
    joinedOn: "2022-12-05",
    status: "active",
    totalSpent: 2800.5,
  },
  {
    user: {
      fullName: "David Wilson",
      photo: "/app-images/Avatar.png",
      email: "david.wilson@email.com",
    },
    landlord: "Lisa Anderson",
    joinedOn: "2022-11-08",
    status: "active",
    totalSpent: 3200.75,
  },
  {
    user: {
      fullName: "Maria Garcia",
      photo: "/app-images/Avatar.png",
      email: "maria.garcia@email.com",
    },
    landlord: "Robert Taylor",
    joinedOn: "2023-05-10",
    status: "inactive",
    totalSpent: 950.25,
  },
];

export const tenantProfileDetailData = {
  user: {
    fullName: "Gail Cole",
    createdOn: "2021-01-01T00:00:00.000Z",
    status: "active",
    photo: "/app-images/Avatar.png",
    lastMonthSpending: 244,
    totalSpending: 50222,
    totalJobs: 66,
    role: "tenant",
  },
  reviews: [
    {
      rating: 4.5,
      message: "Great service",
      property: {
        title: "Mataram Griya Residence",
      },
      createdOn: "2021-01-01T00:00:00.000Z",
    },
    {
      rating: 4,
      message: "Good service",
      property: {
        title: "Mataram Griya",
      },
      createdOn: "2021-01-01T00:00:00.000Z",
    },
  ],
  properties: {
    image: "/app-images/property-one.jpg",
    title: "Mataram Griya Residence",
    status: "active",
    location: "3967 Bosco Circles, Weberboro 61294",
    tenant: {
      fullName: "Gail Cole",
      createdOn: "2021-01-01T00:00:00.000Z",
      photo: "/app-images/Avatar.png",
      email: "Gail@yopmail.com",
      phone: "1234567890",
      callingCode: "+1",
    },
    jobRequests: [
      {
        title: "Foundation Checkup",
        status: "completed",
        createdOn: "2021-01-01T00:00:00.000Z",
      },
      {
        title: "Heather Maintenance",
        status: "completed",
        createdOn: "2021-01-01T00:00:00.000Z",
      },
      {
        title: "Roof Structure Checkup",
        status: "ongoing",
        createdOn: "2021-01-01T00:00:00.000Z",
      },
      {
        title: "Wall Structure Checkup",
        status: "pending",
        createdOn: "2021-01-01T00:00:00.000Z",
      },
      {
        title: "Water Leakage Checkup",
        status: "pending",
        createdOn: "2021-01-01T00:00:00.000Z",
      },
    ],
  },

  registrationDate: "2021-01-01T00:00:00.000Z",
};

export const overViewData = (data) => [
  {
    icon: <LuUser />,
    label: "Landlord Name",
    value: data?.landlord?.fullName,
  },
  {
    icon: <IoCalendarClearOutline />,
    label: "Registration",
    value: moment(data?.registrationDate).format("MMMM DD, YYYY"),
  },
  {
    icon: <GrLocation />,
    label: "Location",
    value: data?.location,
  },

  {
    icon: <FaRegCircleCheck />,
    label: "Status",
    type: "status",
    value: data?.status,
  },
];
