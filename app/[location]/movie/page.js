import { redirect } from "next/navigation";

import MovieCard from "../../components/MovieCard/MovieCard";

const page = async ({ params, searchParams }) => {
  let { location } = params;
  const decodedLocation = decodeURIComponent(location);
  let search = new URLSearchParams(searchParams);

  const query = search.get("main");

  // const base = process.env.BASE;

  const response = await fetch(`http://localhost:3000/api/movies?q=${query}`);

  if (!response.ok) {
    redirect("/404");
  }

  const data = await response.json();

  return (
    <div className="container max-w-full p-10">
      <h2 className="pb-3">
        Movies for <span className="text-teal-300">{query}</span>
      </h2>

      <MovieCard movies={data.results} location={decodedLocation} />
    </div>
  );
};

export default page;
