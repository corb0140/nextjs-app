"use client";

import classes from "./MovieCard.module.css";

import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";

import Link from "next/link";

import Loader from "../Loader/Loader";
import imageNotFound from "@/public/image-not-found-icon.svg";

const MovieCard = ({ movies, location }) => {
  const router = useRouter();
  const [loading, setLoading] = useState(true);

  const back = (ev) => {
    ev.preventDefault();
    router.back();
  };

  const home = (ev) => {
    ev.preventDefault();
    router.push("/");
  };

  useEffect(() => {
    if (movies.length > 0) {
      setLoading(false);
    }
  }, [movies]);

  return (
    <>
      <div className={classes.buttonContainer}>
        <button className={classes.button} onClick={(ev) => back(ev)}>
          Back to {location}
        </button>

        <button className={classes.button} onClick={(ev) => home(ev)}>
          New Location
        </button>
      </div>

      {loading && <Loader />}

      <ul className={classes.cardList}>
        {movies.length > 0 &&
          movies.map((movie) => {
            return (
              <Link
                href={`https://www.themoviedb.org/movie/${movie.id}-${movie.title}?language=en-CA`}
                target="_blank"
                key={movie.id}
              >
                <li className={classes.card}>
                  <div className={classes.imageContainer}>
                    {movie.poster_path === null ? (
                      <img
                        className={classes.imageNotFound}
                        src={imageNotFound.src}
                        alt={movie.title}
                      />
                    ) : (
                      <img
                        className={classes.image}
                        src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
                        alt={movie.title}
                      />
                    )}
                  </div>
                  <h1 className={classes.heading}>{movie.title}</h1>
                </li>
              </Link>
            );
          })}
      </ul>
    </>
  );
};

export default MovieCard;
