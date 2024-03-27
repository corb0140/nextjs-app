"use client";

import { useSearchParams } from "next/navigation";

const page = (props) => {
  let location = decodeURIComponent(props.params.location);
  const searchParams = useSearchParams();
  const query = searchParams.get("main");

  return (
    <div>
      {query} - {location}
    </div>
  );
};

export default page;
