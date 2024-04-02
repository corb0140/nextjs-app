"use client";

import classes from "./MovieCard.module.css";

import { useRouter } from "next/navigation";
import Image from "next/image";
import imageNotFound from "../../../public/image-not-found-icon.svg";
import Link from "next/link";
import { useEffect, useState } from "react";
import Loader from "../Loader/Loader";

const MovieCard = ({ movies, location, isLoading }) => {
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
      setLoading(isLoading);
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
              <li className={classes.card} key={movie.id}>
                <div className={classes.imgContainer}>
                  {movie.poster_path === null ? (
                    <Image
                      className={classes.imageNotFound}
                      src={imageNotFound}
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

                <Link
                  href={`https://www.themoviedb.org/movie/${movie.id}-${movie.title}?language=en-CA`}
                  target="_blank"
                  className={classes.button}
                >
                  Click for details
                </Link>
              </li>
            );
          })}
      </ul>
    </>
  );
};

export default MovieCard;
