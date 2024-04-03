"use server";

import { redirect } from "next/navigation";

export async function handleForm(formData) {
  "use server";

  const location = formData.get("location");

  redirect(`/${encodeURIComponent(location)}`);
}
