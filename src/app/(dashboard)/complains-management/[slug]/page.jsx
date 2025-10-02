import ComplaintManagementDetailTemplate from "@/components/Template/ComplaintManagement/ComplaintManagementDetailTemplate";
import React from "react";

export default async function ComplainManagementDetailPage({ params }) {
  const { slug } = await params;
  return <ComplaintManagementDetailTemplate slug={slug} />;
}
