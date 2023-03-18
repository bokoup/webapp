import type { LoaderArgs } from "@remix-run/node";
import { json } from "@remix-run/node";

export async function action({ request }: LoaderArgs) {
  switch (request.method) {
    case "POST": {
      const url = (await request.json()).url;
      if (!url) {
        throw json({ error: "url must be included in body" }, 404);
      }

      let body = JSON.stringify({
        data: {
          attributes: {
            url,
          },
          type: "purges",
        },
      });

      const req = await fetch("https://api.imgix.com/api/v1/purge", {
        method: "POST",
        headers: {
          Authorization: `Bearer ${process.env.IMGIX_API_TOKEN}`,
          "Content-Type": "application/vnd.api+json",
        },
        body,
      });

      return json({});
    }
    default: {
      throw json({ error: "Method not supported" }, 405);
    }
  }
}
