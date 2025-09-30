import {
  RenderDateCell,
  RenderStatusCell,
  RenderTextCell,
  RenderUserCell,
} from "@/components/organisms/ResponsiveTable/CommonCells";

export const landlordInsightTableHeader = [
  {
    title: "User",
    key: "user",
    style: { width: "30%" },
    renderItem: ({ data }) => <RenderUserCell cellValue={data?.user}  />,
  },
  {
    title: "Joined On",
    key: "joinedOn",
    renderItem: ({ item }) => <RenderDateCell cellValue={item} />,
  },
  {
    title: "Status",
    key: "status",
    renderItem: ({ item }) => (
      <RenderStatusCell cellValue={item} />
    ),
  },
  {
    title: "Total Properties",
    key: "totalProperties",
    renderItem: ({ item }) => <RenderTextCell cellValue={item} />,
  },
  {
    title: "",
    key: "actions",
  },
];

export const guardiansBodyData = [
  {
    user: {
      fullName: "Corey George",
      photo: "/app-images/Avatar.png",
      email: "Corey@yopmail.com",
    },
    joinedOn: "2021-01-01",
    status: "Active",
    totalProperties: 10,
  },
  {
    user: {
      fullName: "Corey George",
      photo: "/app-images/Avatar.png",
      email: "Corey@yopmail.com",
    },
    joinedOn: "2021-01-01",
    status: "Active",
    totalProperties: 10,
  },
  {
    user: {
      fullName: "Corey George",
      photo: "/app-images/Avatar.png",
      email: "Corey@yopmail.com",
    },
    joinedOn: "2021-01-01",
    status: "Active",
    totalProperties: 10,
  },
  {
    user: {
      fullName: "Corey George",
      photo: "/app-images/Avatar.png",
      email: "Corey@yopmail.com",
    },
    joinedOn: "2021-01-01",
    status: "Active",
    totalProperties: 10,
  },
  {
    user: {
      fullName: "Corey George",
      photo: "/app-images/Avatar.png",
      email: "Corey@yopmail.com",
    },
    joinedOn: "2021-01-01",
    status: "Active",
    totalProperties: 10,
  },
  {
    user: {
      fullName: "Corey George",
      photo: "/app-images/Avatar.png",
      email: "Corey@yopmail.com",
    },
    joinedOn: "2021-01-01",
    status: "Active",
    totalProperties: 10,
  },
  {
    user: {
      fullName: "Corey George",
      photo: "/app-images/Avatar.png",
      email: "Corey@yopmail.com",
    },
    joinedOn: "2021-01-01",
    status: "Active",
    totalProperties: 10,
  },
];
