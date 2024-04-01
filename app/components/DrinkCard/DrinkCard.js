"use client";

import classes from "./DrinkCard.module.css";

import { useRouter } from "next/navigation";
import Link from "next/link";

const DrinkCard = ({ drink, location }) => {
  const router = useRouter();

  const back = () => {
    router.back();
  };

  const home = () => {
    router.push("/");
  };

  return (
    <div className={classes.card}>
      <h1 className={classes.heading}>{drink.title}</h1>

      <Link
        className={classes.ingredientsLink}
        href={`https://www.thecocktaildb.com/drink/${drink.id}`}
        target="_blank"
      >
        Click to see ingredients
      </Link>

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

export default DrinkCard;
