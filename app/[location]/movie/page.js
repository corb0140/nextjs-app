"use client";

import { useEffect, useState } from "react";

import MovieCard from "../../components/MovieCard/MovieCard";
import { useSearchParams, useRouter } from "next/navigation";

const page = (props) => {
  const location = decodeURIComponent(props.params.location);
  const [movies, setMovies] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const searchParams = useSearchParams();
  const query = searchParams.get("main");
  const router = useRouter();

  useEffect(() => {
    setIsLoading(true);

    fetch(`http://localhost:3000/api/movies?${query}`)
      .then((response) => {
        if (!response.ok) {
          router.push("/404");
          throw new Error("Failed to fetch data");
        }

        return response.json();
      })
      .then((data) => {
        setMovies(data.results);
      })
      .catch((error) => {
        console.error(error);
      })
      .finally(() => {
        setIsLoading(false);
      });
  }, [query]);

  return (
    <div className="container max-w-full p-10">
      <h2 className="pb-3">
        Movies for <span className="text-teal-300">{query}</span>
      </h2>

      <p className="pb-3">Click on card to see movie details</p>

      <MovieCard movies={movies} location={location} isLoading={isLoading} />
    </div>
  );
};

export default page;
