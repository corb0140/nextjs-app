"use server";

import { redirect } from "next/navigation";
// import { revalidatePath } from "next/cache";

export async function handleForm(formData) {
  "use server";

  const location = formData.get("location");

  redirect(`/${encodeURIComponent(location)}`);

  // revalidatePath("/");
}
