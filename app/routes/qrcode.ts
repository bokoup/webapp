import QRCode from "qrcode";
import type { LoaderArgs } from "@remix-run/node";
import { json } from "@remix-run/node";

export interface QRCodeData {
  dataUrl: string;
  title: string;
  description: string;
}

export async function loader({ request }: LoaderArgs) {
  const url = new URL(request.url);
  const text = url.searchParams.get("text");
  const title = url.searchParams.get("title");
  const description = url.searchParams.get("description");
  const dataUrl = await QRCode.toDataURL(text!);
  try {
    return json({
      dataUrl,
      title,
      description,
    } as QRCodeData);
  } catch (error: any) {
    return json({ error: error.message });
  }
}
