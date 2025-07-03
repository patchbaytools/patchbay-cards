import { NextRequest, NextResponse } from "next/server";

const DJANGO_API_BASE = "http://localhost:8000/api/business-card/";
const FALLBACK = "N/A";

const normalizeCardData = (data: any, bookNumber: string) => ({
  id: data?.id ?? bookNumber ?? FALLBACK,
  name: data?.name ?? FALLBACK,
  title: data?.title ?? FALLBACK,
  subtitle: data?.subtitle ?? FALLBACK,
  email: data?.email ?? FALLBACK,
  phone: data?.phone ?? FALLBACK,
  location: data?.location ?? FALLBACK,
  image: data?.image ?? FALLBACK,
  contractingInfo: Array.isArray(data?.contractingInfo) && data.contractingInfo.length > 0
    ? data.contractingInfo
    : [FALLBACK],
  pubLine: Array.isArray(data?.pubLine) && data.pubLine.length > 0
    ? data.pubLine
    : [FALLBACK],
  metadata: {
    isrc: Array.isArray(data?.metadata?.isrc) && data.metadata.isrc.length > 0
      ? data.metadata.isrc
      : [FALLBACK],
    upc: data?.metadata?.upc ?? FALLBACK,
    rights: data?.metadata?.rights ?? FALLBACK,
    publisher: data?.metadata?.publisher ?? FALLBACK,
  },
});

export async function GET(
  req: NextRequest,
  { params }: { params: { bookNumber: string } }
) {
  const { bookNumber } = params;

  try {
    const res = await fetch(`${DJANGO_API_BASE}${bookNumber}/`);
    if (!res.ok) {
      return NextResponse.json(normalizeCardData({}, bookNumber), { status: 200 });
    }
    const data = await res.json();
    return NextResponse.json(normalizeCardData(data, bookNumber), { status: 200 });
  } catch (error) {
    return NextResponse.json(normalizeCardData({}, bookNumber), { status: 200 });
  }
} 