"use server";

import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";

export async function handleForm(formData) {
  "use server";

  const location = formData.get("location");

  redirect(`/${encodeURIComponent(location)}`);

  revalidatePath("/");
}
