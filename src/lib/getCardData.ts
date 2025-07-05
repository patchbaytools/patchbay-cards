import "server-only";

export type CardData = {
  id: string | undefined;
  name: string | undefined;
  title: string | undefined;
  subtitle: string | undefined;
  email: string | undefined;
  phone: string | undefined;
  location: string | undefined;
  image: string | undefined;
  contractingInfo: string[] | undefined;
  pubLine: string[] | undefined;
  metadata: {
    isrc: string[] | undefined;
    upc: string | undefined;
    rights: string | undefined;
    publisher: string | undefined;
  };
};

const FALLBACK = undefined;

export async function getCardData(custom_endpoint: string): Promise<CardData> {
  try {
    const url = `${process.env.NEXT_PATCHBAY_API_URL}/api/v1/cards/public/${custom_endpoint}`;

    const res = await fetch(url);
    if (!res.ok) {
      throw new Error(`Not found - Status: ${res.status}`);
    }

    const data = await res.json();

    return {
      id: data?.id ?? custom_endpoint ?? FALLBACK,
      name: data?.name ?? FALLBACK,
      title: data?.title ?? FALLBACK,
      subtitle: data?.subtitle ?? FALLBACK,
      email: data?.email ?? FALLBACK,
      phone: data?.phone ?? FALLBACK,
      location: data?.location ?? FALLBACK,
      image: data?.image ?? FALLBACK,
      contractingInfo:
        Array.isArray(data?.contractingInfo) && data.contractingInfo.length > 0
          ? data.contractingInfo
          : [FALLBACK],
      pubLine:
        Array.isArray(data?.pubLine) && data.pubLine.length > 0
          ? data.pubLine
          : [FALLBACK],
      metadata: {
        isrc:
          Array.isArray(data?.metadata?.isrc) && data.metadata.isrc.length > 0
            ? data.metadata.isrc
            : [FALLBACK],
        upc: data?.metadata?.upc ?? FALLBACK,
        rights: data?.metadata?.rights ?? FALLBACK,
        publisher: data?.metadata?.publisher ?? FALLBACK,
      },
    };
  } catch (error) {
    return {
      id: FALLBACK,
      name: FALLBACK,
      title: FALLBACK,
      subtitle: FALLBACK,
      email: FALLBACK,
      phone: FALLBACK,
      location: FALLBACK,
      image: FALLBACK,
      contractingInfo: [],
      pubLine: [],
      metadata: {
        isrc: [],
        upc: FALLBACK,
        rights: FALLBACK,
        publisher: FALLBACK,
      },
    };
  }
}
