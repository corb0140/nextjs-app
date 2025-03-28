import { redirect } from "next/navigation";

import MovieCard from "@/app/components/MovieCard/MovieCard";

export const fetchCache = "force-no-store";

const page = async ({ params, searchParams }) => {
  let { location } = params;
  const decodedLocation = decodeURIComponent(location);
  let search = new URLSearchParams(searchParams);

  const query = search.get("main");

  const base = process.env.BASE;

  const response = await fetch(`${base}/api/movies?q=${query}`);

  if (!response.ok) {
    redirect("/error/500");
  }

  const data = await response.json();

  return (
    <div className="container max-w-full py-2 px-10">
      <h2 className="py-2 text-white">
        Movie for:
        <span className="text-teal-200 pl-1 font-semibold">{query}</span>
      </h2>

      <MovieCard movies={data.results} location={decodedLocation} />
    </div>
  );
};

export default page;
