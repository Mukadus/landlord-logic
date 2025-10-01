import TenantDetailTemplate from "@/components/Template/TenantProfileTemplate/TenantDetailTemplate";

export default async function TenantDetailPage({ params }) {
  const { slug } = await params;
  return <TenantDetailTemplate slug={slug} />;
}
