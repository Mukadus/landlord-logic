import {
  RenderDateCell,
  RenderStatusCell,
  RenderTextCell,
  RenderUserCell,
  RenderCurrencyCell,
  RenderCategoryCell,
} from "@/components/organisms/ResponsiveTable/CommonCells";

export const contractorDirectoryTableHeader = [
  {
    title: "Contractor",
    key: "contractor",
    style: { width: "25%" },
    renderValue: (item, data) => <RenderUserCell cellValue={data?.contractor} />,
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
    status: "pending",
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
    status: "completed",
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
    status: "ongoing",
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
    status: "active",
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
    status: "pending",
    amount: 1200,
  },
];
