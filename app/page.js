"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";

export default function Home() {
  const [value, setValue] = useState("");
  const [location, setLocation] = useState("");

  const router = useRouter();

  const handleSubmit = (ev) => {
    ev.preventDefault();

    if (value.includes(",")) {
      setLocation(value);
    } else {
      alert("Please enter a valid input (city, country)");
      return;
    }

    ev.target.reset();
  };

  const onChange = (ev) => {
    setValue(ev.target.value);
  };

  useEffect(() => {
    router.push(`/${encodeURIComponent(location)}`);
  }, [location]);

  useEffect(() => {
    console.log(value);
  }, [value]);

  return (
    <>
      <div className="container max-w-full flex flex-col justify-center items-center py-8 gap-8">
        <form
          action=""
          onSubmit={handleSubmit}
          className="container max-w-full flex flex-col gap-2 justify-center items-center"
        >
          <input
            className="border-none outline-none p-2 text-black w-3/4 md:w-2/3 lg:w-1/2"
            type="text"
            placeholder="city, country"
            value={value}
            onChange={onChange}
            required
          />

          <button
            className="bg-purple-950 text-white p-2 w-3/4 md:w-2/3 lg:w-1/2"
            type="submit"
            disabled={value === "" ? true : false}
          >
            Submit
          </button>
        </form>
      </div>
    </>
  );
}
