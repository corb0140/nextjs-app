"use client";

import classes from "./FoodCard.module.css";

import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";

import Link from "next/link";

import Loader from "../Loader/Loader";
import imageNotFound from "@/public/image-not-found-icon.svg";

const FoodCard = ({ food, location }) => {
  const router = useRouter();
  const [loading, setLoading] = useState(true);

  const data = food.hits;
  console.log(data);

  const back = () => {
    router.back();
  };

  const home = () => {
    router.push("/");
  };

  useEffect(() => {
    if (data.length > 0) {
      setLoading(false);
    }
  }, [data]);

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
        {data.length > 0 &&
          data.map((food) => {
            const id = crypto.randomUUID();
            return (
              <div className={classes.card} key={id}>
                <h1 className={classes.heading}>{food.recipe.label}</h1>

                {food.recipe.image === null ? (
                  <img
                    className={classes.imageNotFound}
                    src={imageNotFound.src}
                    alt={food.recipe.label}
                  />
                ) : (
                  <img
                    className={classes.image}
                    src={food.recipe.image}
                    alt={food.recipe.label}
                  />
                )}

                <Link
                  className={classes.ingredientsLink}
                  href={food.recipe.url}
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

export default FoodCard;
