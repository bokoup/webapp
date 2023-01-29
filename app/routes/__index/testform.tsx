import { Form } from "@remix-run/react";
import { type ActionArgs, redirect } from "@remix-run/server-runtime";
import { json } from "react-router";
import { safeRedirect, sleep } from "~/utils";

export async function action({ request }: ActionArgs) {
  const data = await request.formData();
  const myData = data.get("mydata")?.toString();
  const redirectTo = safeRedirect(data.get("redirectTo")?.toString(), "/");
  console.log(myData);
  await sleep(1000);
  console.log(redirectTo);
  if (false) {
    return redirect(redirectTo);
  }

  return json({ success: true });
}

export default function TestForm() {
  return (
    <>
      <Form method="post">
        <input type="text" name="mydata" className="border" />
        <button type="submit">submit</button>
      </Form>
    </>
  );
}
