"use client";

import { handleForm } from "@/app/actions";

export default function Home() {
  return (
    <div className="container max-w-full flex flex-col justify-center items-center py-8 gap-8">
      <form
        action={handleForm}
        className="container max-w-full flex flex-col gap-2 justify-center items-center"
      >
        <input
          className="border-[1px] border-purple-950 outline-none p-2 text-black w-3/4 md:w-2/3 lg:w-1/2"
          type="text"
          placeholder="city, country"
          name="location"
          required
        />

        <button
          className="bg-purple-950 text-white p-2 w-3/4 md:w-2/3 lg:w-1/2"
          type="submit"
        >
          Submit
        </button>
      </form>
    </div>
  );
}
