import {
  RenderDateCell,
  RenderStatusCell,
  RenderTextCell,
  RenderUserCell,
  RenderCurrencyCell,
  categoryCell,
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
    renderValue: (item) => categoryCell({ cellValue: { item } }),
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
    category: ["Plumbing", "Electrical"],
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
    category: ["Carpentry", "Painting"],
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
    category: ["HVAC", "Plumbing"],
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
    category: ["Landscaping", "Roofing"],
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
    category: ["Electrical", "Security Systems"],
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
    category: ["Flooring", "Interior Design"],
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
    category: ["Concrete", "Masonry"],
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
    category: ["Cleaning", "Maintenance"],
    createdOn: "2023-08-30",
    status: "pending",
    amount: 1200,
  },
];
