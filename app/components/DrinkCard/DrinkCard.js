"use client";

import classes from "./DrinkCard.module.css";

import { useRouter } from "next/navigation";
import Link from "next/link";
import { useEffect, useState } from "react";

import Loader from "../Loader/Loader";

const DrinkCard = ({ drinks, location, isLoading }) => {
  const router = useRouter();

  const [loading, setLoading] = useState(true);

  const back = () => {
    router.back();
  };

  const home = () => {
    router.push("/");
  };

  useEffect(() => {
    if (drinks.length > 0) {
      setLoading(isLoading);
    }
  }, [drinks]);

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
        {drinks.length > 0 &&
          drinks.map((drink) => {
            return (
              <div className={classes.card} key={drink.idDrink}>
                <h1 className={classes.heading}>{drink.strDrink}</h1>

                <img
                  className={classes.image}
                  src={drink.strDrinkThumb}
                  alt={drink.strDrink}
                />

                <Link
                  className={classes.ingredientsLink}
                  href={`https://www.thecocktaildb.com/drink/${drink.idDrink}`}
                  target="_blank"
                >
                  Click to see ingredients
                </Link>
              </div>
            );
          })}
      </ul>
    </>
  );
};

export default DrinkCard;
