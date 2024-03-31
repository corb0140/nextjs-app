"use client";

import classes from "./moviecard.module.css";

import { useRouter } from "next/navigation";
import imageNotFound from "../../../public/image-not-found-icon.svg";

const MovieCard = ({ movie, location }) => {
  const router = useRouter();

  const back = () => {
    router.back();
  };

  const home = () => {
    router.push("/");
  };

  return (
    <div className={classes.card}>
      <h1 className={classes.heading}>{movie.title}</h1>
      <p className={classes.paragraph}>{movie.desc}</p>

      {movie.poster_path === null ? (
        <img
          className={classes.image}
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

      <div className={classes.buttonContainer}>
        <button className={classes.button} onClick={back}>
          Back to {location}
        </button>

        <button className={classes.button} onClick={home}>
          New Location
        </button>
      </div>
    </div>
  );
};

export default MovieCard;
