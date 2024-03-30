"use client";

import { useRef } from "react";
import { useRouter } from "next/navigation";

export default function Home() {
  const cityRef = useRef(null);
  const countryRef = useRef(null);
  const router = useRouter();

  const navigation = () => {
    router.push(
      `/${encodeURIComponent(
        `${cityRef.current.value},${countryRef.current.value}`
      )}`
    );
  };

  const handleSubmit = (ev) => {
    ev.preventDefault();

    navigation();

    ev.target.reset();
  };

  return (
    <>
      <div className="container max-w-full flex flex-col justify-center items-center py-8 gap-8">
        <form
          action=""
          onSubmit={handleSubmit}
          className="container max-w-full flex flex-col gap-2 justify-center items-center"
        >
          <input
            className="border-none outline-none p-2 text-black w-3/4"
            type="text"
            placeholder="Enter Your City"
            ref={cityRef}
            required
          />
          <input
            className="border-none outline-none p-2 text-black w-3/4"
            type="text"
            placeholder="Enter Your Country"
            ref={countryRef}
            required
          />
          <button className="bg-purple-950 text-white p-2 w-3/4" type="submit">
            Submit
          </button>
        </form>
      </div>
    </>
  );
}
