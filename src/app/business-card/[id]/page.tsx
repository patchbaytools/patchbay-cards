import { getCardData } from "@/lib/getCardData"
import CardPageContent from "./CardPageContent"

export default async function Page({ 
  params 
}: { 
  params: Promise<{ id: string }> 
}) {
  const resolvedParams = await params
  const data = await getCardData(resolvedParams.id)
  return <CardPageContent data={data} id={resolvedParams.id} />
}