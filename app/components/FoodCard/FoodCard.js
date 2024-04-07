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

  const randomNumber = Math.floor(Math.random() * data.length);

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

      {loading === true ? (
        ""
      ) : (
        <div className={classes.cardWrapper}>
          {data.length > 0 &&
            data
              .filter((food, index) => index === randomNumber)
              .map((food) => {
                return (
                  <div className={classes.card}>
                    <h1 className={classes.heading}>{food.recipe.label}</h1>

                    <div className={classes.imageContainer}>
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
                    </div>

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
        </div>
      )}
    </>
  );
};

export default FoodCard;
