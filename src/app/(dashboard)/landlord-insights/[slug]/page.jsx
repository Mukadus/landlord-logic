import LandlordInsightDetailTemplate from "@/components/Template/LandlordInsightTemplate/LandlordInsightDetailTemplate";
import React from "react";

export default async function LandlordInsightPage({ params }) {
  const { slug } = await params;

  return <LandlordInsightDetailTemplate slug={slug} />;
}
