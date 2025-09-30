import {
  RenderDateCell,
  RenderStatusCell,
  RenderTextCell,
  RenderUserCell,
  RenderCurrencyCell,
} from "@/components/organisms/ResponsiveTable/CommonCells";

export const tenantProfileTableHeader = [
  {
    title: "Tenant",
    key: "user",
    style: { width: "30%" },
    renderItem: ({ data }) => <RenderUserCell cellValue={data?.user} />,
  },
  {
    title: "Landlord",
    key: "landlord",
    renderItem: ({ item }) => <RenderTextCell cellValue={item} />,
  },
  {
    title: "Joined On",
    key: "joinedOn",
    renderItem: ({ item }) => <RenderDateCell cellValue={item} />,
  },
  {
    title: "Status",
    key: "status",
    renderItem: ({ item }) => <RenderStatusCell cellValue={item} />,
  },
  {
    title: "Total Spent",
    key: "totalSpent",
    renderItem: ({ item }) => <RenderCurrencyCell cellValue={item} />,
  },
  {
    title: "",
    key: "actions",
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
    totalSpent: 2500.00,
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
    totalSpent: 1800.50,
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
    totalSpent: 4100.00,
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
    totalSpent: 1200.00,
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
    totalSpent: 2800.50,
  },
];
