"use client";

import classes from "./WeatherCard.module.css";
import { useEffect, useState } from "react";
import Link from "next/link";

import { useRouter } from "next/navigation";

const WeatherCard = ({ weather }) => {
  const [showCard, setShowCard] = useState(true);
  const router = useRouter();

  const navigation = (route) => {
    router.push(
      `/${encodeURIComponent(
        `${weather.name},${weather.sys.country}`
      )}/${route}?main=${weather.main}`
    );
  };

  useEffect(() => {
    if (weather.name) {
      setShowCard(false);
    }
  }, [weather]);

  return (
    <>
      {showCard ? (
        ""
      ) : (
        <div className={classes.card}>
          <h1 className={classes.heading}>
            {weather.name} {weather.sys.country}
          </h1>
          <p className={classes.paragraph}>{weather.main}</p>
          <p className={classes.paragraph}>{weather.description}</p>
          <div>
            <img
              className={classes.icon}
              src={`http://openweathermap.org/img/wn/${weather.icon}.png`}
              alt="weather icon"
            />
          </div>

          <div className={classes.buttonContainer}>
            <button
              className={classes.button}
              onClick={() => navigation("drink")}
            >
              Perfect Drink
            </button>
            <button
              className={classes.button}
              onClick={() => navigation("movie")}
            >
              Perfect Movie
            </button>
          </div>
        </div>
      )}
    </>
  );
};

export default WeatherCard;
