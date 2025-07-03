import { getCardData } from "@/lib/getCardData"
import CardPageContent from "./CardPageContent"

export default async function Page({ params }: { params: { id: string } }) {
  const data = await getCardData(params.id)
  return <CardPageContent data={data} id={params.id} />
}