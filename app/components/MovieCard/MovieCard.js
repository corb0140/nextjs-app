"use client";

import classes from "./moviecard.module.css";

import { useRouter } from "next/navigation";

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

      <img className={classes.image} src={movie.img} alt={movie.title} />

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
