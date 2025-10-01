import {
  RenderDateCell,
  RenderStatusCell,
  RenderTextCell,
  RenderUserCell,
} from "@/components/organisms/ResponsiveTable/CommonCells";

export const landlordInsightTableHeader = [
  {
    title: "Landlord",
    key: "user",
    style: { width: "30%" },
    renderValue: (item, data) => <RenderUserCell cellValue={data?.user} />,
  },
  {
    title: "Joined On",
    key: "joinedOn",
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

export const landlordInsightBodyData = [
  {
    user: {
      fullName: "Corey George",
      photo: "/app-images/Avatar.png",
      email: "Corey@yopmail.com",
    },
    joinedOn: "2021-01-01",
    status: false,
    totalProperties: 10,
  },
  {
    user: {
      fullName: "Corey George",
      photo: "/app-images/Avatar.png",
      email: "Corey@yopmail.com",
    },
    joinedOn: "2021-01-01",
    status: false,
    totalProperties: 10,
  },
  {
    user: {
      fullName: "Corey George",
      photo: "/app-images/Avatar.png",
      email: "Corey@yopmail.com",
    },
    joinedOn: "2021-01-01",
    status: true,
    totalProperties: 10,
  },
  {
    user: {
      fullName: "Corey George",
      photo: "/app-images/Avatar.png",
      email: "Corey@yopmail.com",
    },
    joinedOn: "2021-01-01",
    status: false,
    totalProperties: 10,
  },
  {
    user: {
      fullName: "Corey George",
      photo: "/app-images/Avatar.png",
      email: "Corey@yopmail.com",
    },
    joinedOn: "2021-01-01",
    status: true,
    totalProperties: 10,
  },
  {
    user: {
      fullName: "Corey George",
      photo: "/app-images/Avatar.png",
      email: "Corey@yopmail.com",
    },
    joinedOn: "2021-01-01",
    status: false,
    totalProperties: 10,
  },
  {
    user: {
      fullName: "Corey George",
      photo: "/app-images/Avatar.png",
      email: "Corey@yopmail.com",
    },
    joinedOn: "2021-01-01",
    status: true,
    totalProperties: 10,
  },
];

export const landlordInsightDetailData = {
  properties: [
    {
      image: "/app-images/property-one.png",
      title: "Mataram Griya Residence",
      status: "active",
      location: "3967 Bosco Circles, Weberboro 61294",
      tenant: {
        fullName: "Gail Cole",
        createdOn: "2021-01-01T00:00:00.000Z",
      },
      user: {
        fullName: "Gustavo Lima",
        createdOn: "2021-01-01T00:00:00.000Z",
        photo: "/app-images/Avatar.png",
        lastMonthSpending: 244,
        totalSpending: 50222,
        subscription: {
          package: {
            name: "Intermediate",
          },
        },
      },
      registrationDate: "2021-01-01T00:00:00.000Z",
      complains: [
        {
          message:
            "Figma ipsum component variant main layer. Hand effect rotate duplicate flatten flows arrange.",
          status: "pending",

          createdOn: "2021-01-01T00:00:00.000Z", //time stamp
        },
        {
          message:
            "Figma ipsum component variant main layer. Hand effect rotate duplicate flatten flows arrange.",
          status: "pending",
          role: "landlord",
          createdOn: "2021-01-01T00:00:00.000Z",
        },
        {
          message:
            "Figma ipsum component variant main layer. Hand effect rotate duplicate flatten flows arrange.",
          status: "pending",
          role: "landlord",
          createdOn: "2021-01-01T00:00:00.000Z",
        },
      ],
    },
  ],
};
