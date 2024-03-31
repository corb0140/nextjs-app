"use client";

import classes from "./moviecard.module.css";

import { useRouter } from "next/navigation";
import Image from "next/image";
import imageNotFound from "../../../public/image-not-found-icon.svg";
import Link from "next/link";

const MovieCard = ({ movies, location }) => {
  const router = useRouter();

  const back = (ev) => {
    ev.preventDefault();
    router.back();
  };

  const home = (ev) => {
    ev.preventDefault();
    router.push("/");
  };

  return (
    <ul className={classes.cardList}>
      {movies.length > 0 &&
        movies.map((movie) => {
          return (
            <Link
              href={`https://www.themoviedb.org/movie/${movie.id}-clouds?language=en-CA`}
              target="_blank"
              key={movie.id}
            >
              <li className={classes.card}>
                <h1 className={classes.heading}>{movie.title}</h1>

                {movie.poster_path === null ? (
                  <Image
                    className={classes.image}
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

                <div className={classes.buttonContainer}>
                  <button className={classes.button} onClick={(ev) => back(ev)}>
                    Back to {location}
                  </button>

                  <button className={classes.button} onClick={(ev) => home(ev)}>
                    New Location
                  </button>
                </div>
              </li>
            </Link>
          );
        })}
    </ul>
  );
};

export default MovieCard;
