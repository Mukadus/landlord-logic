import {
  RenderDateCell,
  RenderStatusCell,
  RenderTextCell,
  RenderUserCell,
  RenderCurrencyCell,
  RenderCategoryCell,
} from "@/components/organisms/ResponsiveTable/CommonCells";
import { FaRegCircleCheck } from "react-icons/fa6";
import { GrLocation } from "react-icons/gr";
import { IoCalendarClearOutline } from "react-icons/io5";
import { LuUser } from "react-icons/lu";
import moment from "moment-timezone";

export const contractorDirectoryTableHeader = [
  {
    title: "Contractor",
    key: "contractor",
    style: { width: "25%" },
    renderValue: (item, data) => (
      <RenderUserCell cellValue={data?.contractor} />
    ),
  },
  {
    title: "Category",
    key: "category",
    style: { width: "20%" },
    renderValue: (item) => <RenderCategoryCell cellValue={item} />,
  },
  {
    title: "Created On",
    key: "createdOn",
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
    title: "Amount",
    key: "amount",
    style: { width: "15%" },
    renderValue: (item) => <RenderCurrencyCell cellValue={item} />,
  },
  {
    title: "",
    key: "action",
    style: { width: "10%" },
  },
];

export const contractorBodyData = [
  {
    contractor: {
      fullName: "John Smith",
      photo: "/app-images/Avatar.png",
      email: "john.smith@example.com",
    },
    category: [{ name: "Plumbing" }, { name: "Electrical" }],
    createdOn: "2023-01-15",
    status: "active",
    amount: 2500,
  },
  {
    contractor: {
      fullName: "Sarah Johnson",
      photo: "/app-images/Avatar.png",
      email: "sarah.johnson@example.com",
    },
    category: [{ name: "Carpentry" }, { name: "Painting" }],
    createdOn: "2023-02-20",
    status: "active",
    amount: 1800,
  },
  {
    contractor: {
      fullName: "Mike Wilson",
      photo: "/app-images/Avatar.png",
      email: "mike.wilson@example.com",
    },
    category: [{ name: "HVAC" }, { name: "Plumbing" }],
    createdOn: "2023-03-10",
    status: "inactive",
    amount: 3200,
  },
  {
    contractor: {
      fullName: "Emily Davis",
      photo: "/app-images/Avatar.png",
      email: "emily.davis@example.com",
    },
    category: [{ name: "Landscaping" }, { name: "Roofing" }],
    createdOn: "2023-04-05",
    status: "active",
    amount: 4200,
  },
  {
    contractor: {
      fullName: "David Brown",
      photo: "/app-images/Avatar.png",
      email: "david.brown@example.com",
    },
    category: [{ name: "Electrical" }, { name: "Security Systems" }],
    createdOn: "2023-05-12",
    status: "inactive",
    amount: 1500,
  },
  {
    contractor: {
      fullName: "Lisa Anderson",
      photo: "/app-images/Avatar.png",
      email: "lisa.anderson@example.com",
    },
    category: [{ name: "Flooring" }, { name: "Interior Design" }],
    createdOn: "2023-06-18",
    status: "active",
    amount: 2800,
  },
  {
    contractor: {
      fullName: "Robert Taylor",
      photo: "/app-images/Avatar.png",
      email: "robert.taylor@example.com",
    },
    category: [{ name: "Concrete" }, { name: "Masonry" }],
    createdOn: "2023-07-22",
    status: "inactive",
    amount: 3500,
  },
  {
    contractor: {
      fullName: "Jennifer Martinez",
      photo: "/app-images/Avatar.png",
      email: "jennifer.martinez@example.com",
    },
    category: [{ name: "Cleaning" }, { name: "Maintenance" }],
    createdOn: "2023-08-30",
    status: "active",
    amount: 1200,
  },
];

export const contractorDirectoryDetailData = {
  reviews: [
    {
      rating: 4.5,
      message: "Great service",
      givenBy: {
        fullName: "Gail Cole",
        photo: "/app-images/Avatar.png",
        role: "tenant",
      },
      property: {
        title: "Mataram Griya Residence",
      },
      createdOn: "2021-01-01T00:00:00.000Z",
    },
    {
      rating: 4,
      message: "Good service",
      givenBy: {
        fullName: "Gustavo Lima",
        photo: "/app-images/Avatar.png",
        role: "landlord",
      },
      property: {
        title: "Mataram Griya Residence",
      },
      createdOn: "2021-01-01T00:00:00.000Z",
    },
  ],
  user: {
    fullName: "Gail Cole",
    createdOn: "2021-01-01T00:00:00.000Z",
    status: "active",
    photo: "/app-images/Avatar.png",
    lastMonthSpending: 244,
    totalSpending: 50222,
    totalJobs: 66,
    rating: 4.5,
    categories: [{ name: "Plumbing" }, { name: "Electrical" }],
    role: "contractor",

    portfolio: [
      { documentName: "Deutchhome_portfolio.pdf", size: "100KB" },
      { documentName: "Deutchhome_portfolio.png", size: "100KB" },
      { documentName: "Deutchhome_portfolio.jpg", size: "100KB" },
      { documentName: "Deutchhome_portfolio.jpg", size: "100KB" },
    ],
  },
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

    registrationDate: "2021-01-01T00:00:00.000Z",
  },
  previousProperties: [
    {
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

      registrationDate: "2021-01-01T00:00:00.000Z",
    },
    {
      image: "/app-images/property-two.jpg",
      title: "Mataram Griya Residence",
      status: "active",
      location: "3967 Bosco Circles, Weberboro 61294",
      tenant: null,

      registrationDate: "2021-01-01T00:00:00.000Z",
    },
    {
      image: "/app-images/property-three.jpg",
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

      registrationDate: "2021-01-01T00:00:00.000Z",
    },
    {
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

      registrationDate: "2021-01-01T00:00:00.000Z",
    },
    {
      image: "/app-images/property-two.jpg",
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

      registrationDate: "2021-01-01T00:00:00.000Z",
    },
    {
      image: "/app-images/property-three.jpg",
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

      registrationDate: "2021-01-01T00:00:00.000Z",
    },
  ],
};

export const overViewData = (data, user) => [
  {
    icon: <LuUser />,
    label: "Contractor Name",
    value: data?.contractor?.fullName,
  },
  {
    icon: <IoCalendarClearOutline />,
    label: "Registration",
    value: moment(data?.registrationDate).format("MMMM DD, YYYY"),
  },
  {
    icon: <IoCalendarClearOutline />,
    label: "Categories",
    value: <RenderCategoryCell cellValue={user?.categories} />,
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
