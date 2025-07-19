// ** Custom Components, Hooks, Utils, etc.
import BusinessCard from "@/app/[hash]/[custom_endpoint]/BusinessCard";
import { getCardData } from "@/lib/getCardData";

// Test if this file is being loaded

export default async function Page({
  params,
}: {
  params: Promise<{ custom_endpoint: string; hash: string }>;
}) {
  const resolvedParams = await params;

  const data = await getCardData(
    resolvedParams.hash,
    resolvedParams.custom_endpoint
  );
  return (
    <div className='w-full h-full'>
      <BusinessCard data={data} id={resolvedParams.custom_endpoint} />
    </div>
  );
}
