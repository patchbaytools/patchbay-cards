import 'server-only'

export type CardData = {
  id: string
  name: string
  title: string
  subtitle: string
  email: string
  phone: string
  location: string
  image: string
  contractingInfo: string[]
  pubLine: string[]
  metadata: {
    isrc: string[]
    upc: string
    rights: string
    publisher: string
  }
}

const FALLBACK = "N/A"

export async function getCardData(id: string): Promise<CardData> {
  try {
    const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/api/business-card/${id}/`, { cache: 'no-store' })
    if (!res.ok) throw new Error('Not found')
    const data = await res.json()
    return {
      id: data?.id ?? id ?? FALLBACK,
      name: data?.name ?? FALLBACK,
      title: data?.title ?? FALLBACK,
      subtitle: data?.subtitle ?? FALLBACK,
      email: data?.email ?? FALLBACK,
      phone: data?.phone ?? FALLBACK,
      location: data?.location ?? FALLBACK,
      image: data?.image ?? FALLBACK,
      contractingInfo: Array.isArray(data?.contractingInfo) && data.contractingInfo.length > 0 ? data.contractingInfo : [FALLBACK],
      pubLine: Array.isArray(data?.pubLine) && data.pubLine.length > 0 ? data.pubLine : [FALLBACK],
      metadata: {
        isrc: Array.isArray(data?.metadata?.isrc) && data.metadata.isrc.length > 0 ? data.metadata.isrc : [FALLBACK],
        upc: data?.metadata?.upc ?? FALLBACK,
        rights: data?.metadata?.rights ?? FALLBACK,
        publisher: data?.metadata?.publisher ?? FALLBACK,
      }
    }
  } catch {
    return {
      id,
      name: FALLBACK,
      title: FALLBACK,
      subtitle: FALLBACK,
      email: FALLBACK,
      phone: FALLBACK,
      location: FALLBACK,
      image: FALLBACK,
      contractingInfo: [FALLBACK],
      pubLine: [FALLBACK],
      metadata: {
        isrc: [FALLBACK],
        upc: FALLBACK,
        rights: FALLBACK,
        publisher: FALLBACK,
      }
    }
  }
}