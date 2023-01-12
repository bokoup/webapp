import QRCode from "qrcode";
import type { LoaderArgs } from "@remix-run/node";
import { json } from "@remix-run/node";

export interface QRCodeData {
  promoName: string;
  dataUrl: string;
}

export async function loader({ request }: LoaderArgs) {
  const url = new URL(request.url);
  const text = url.searchParams.get("text");
  const promoName = url.searchParams.get("promoName");
  try {
    return json({
      promoName,
      dataUrl: await QRCode.toDataURL(`solana:${text!}`),
    });
  } catch (error: any) {
    return json({ error: error.message });
  }
}
