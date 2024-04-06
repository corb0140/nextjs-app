import { redirect } from "next/navigation";

import FoodCard from "@/app/components/FoodCard/FoodCard";

export const fetchCache = "force-no-store";

const page = async ({ params, searchParams }) => {
  let { location } = params;
  const decodedLocation = decodeURIComponent(location);

  let search = new URLSearchParams(searchParams);
  const query = search.get("main");

  const base = process.env.BASE;

  const response = await fetch(`${base}/api/food?q=${query}`);

  if (!response.ok) {
    redirect("/404");
  }

  let data = await response.json();

  return (
    <div className="container max-w-full p-10 flex flex-col justify-center">
      <h2 className="pb-3 text-white">
        Recipes for:
        <span className="text-teal-200 pl-1 font-semibold">{query}</span>
      </h2>
      <FoodCard food={data} location={decodedLocation} />
    </div>
  );
};

export default page;
