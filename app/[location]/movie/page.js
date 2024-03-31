"use client";

import { useEffect, useState } from "react";

import MovieCard from "../../components/MovieCard/MovieCard";
import { useSearchParams } from "next/navigation";

const page = (props) => {
  const location = decodeURIComponent(props.params.location);
  const [movies, setMovies] = useState([]);
  const searchParams = useSearchParams();
  const query = searchParams.get("main");

  console.log(query);
  console.log(location);

  useEffect(() => {
    fetch(
      `https://api.themoviedb.org/3/search/movie?api_key=${process.env.NEXT_PUBLIC_MOVIE_API_KEY}&query=${query}&include_adult=false&language=en-US&page=1`
    )
      .then((response) => {
        if (!response.ok) throw new Error("Failed to fetch data");

        return response.json();
      })
      .then((data) => {
        console.log(data);
        setMovies(data.results);
      })
      .catch((error) => {
        console.error(error);
      });
  }, [query]);

  return (
    <div className="container max-w-full p-10">
      <h2 className="pb-3">
        Movies for <span className="text-teal-300">{query}</span>
      </h2>

      <p className="pb-3">Click on card to see movie details</p>
      <MovieCard movies={movies} location={location} />
    </div>
  );
};

export default page;
