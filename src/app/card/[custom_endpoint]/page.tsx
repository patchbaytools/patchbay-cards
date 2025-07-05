// ** Custom Components, Hooks, Utils, etc.
import BusinessCard from "@/app/card/[custom_endpoint]/BusinessCard";
import { getCardData } from "@/lib/getCardData";

// Test if this file is being loaded

export default async function Page({
  params,
}: {
  params: Promise<{ custom_endpoint: string }>;
}) {
  const resolvedParams = await params;
  const data = await getCardData(resolvedParams.custom_endpoint);
  return (
    <div>
      <h1>DEBUG: Route working! ID: {resolvedParams.custom_endpoint}</h1>
      <BusinessCard data={data} id={resolvedParams.custom_endpoint} />
    </div>
  );
}
