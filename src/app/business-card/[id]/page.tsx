// ** Custom Components, Hooks, Utils, etc.
import BusinessCard from "@/app/business-card/[id]/BusinessCard";
import { getCardData } from "@/lib/getCardData";

export default async function Page({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const resolvedParams = await params;
  const data = await getCardData(resolvedParams.id);
  return <BusinessCard data={data} id={resolvedParams.id} />;
}
