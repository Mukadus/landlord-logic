import JobRequestDetailTemplate from "@/components/Template/JobRequestTemplate/JobRequestDetailTemplate";
import React from "react";

export default async function JobRequestPage({ params }) {
  const { slug } = await params;

  return <JobRequestDetailTemplate slug={slug} />;
}
