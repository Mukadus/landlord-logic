import ContractorDetailTemplate from "@/components/Template/ContractorDirectoryTemplate/ContractorDetailTemplate";
import React from "react";

export default async function ContractorDetailPage({ params }) {
  const { slug } = await params;
  return <ContractorDetailTemplate slug={slug} />;
}
