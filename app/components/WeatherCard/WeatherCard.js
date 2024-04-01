"use client";

import classes from "./WeatherCard.module.css";
import { useEffect, useState } from "react";

import { useRouter } from "next/navigation";

const WeatherCard = ({ weather, pathname }) => {
  const [showCard, setShowCard] = useState(true);
  const router = useRouter();

  const home = () => {
    router.push("/");
  };

  const navigation = (route) => {
    router.push(
      `/${encodeURIComponent(`${pathname}`)}/${route}?main=${weather.main}`
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
            {weather.name}, {weather.sys.country}
          </h1>
          <p className={classes.paragraph}>{weather.main}</p>
          <p className={classes.paragraph}>{weather.description}</p>
          <p className={classes.paragraph}>Temperature: {weather.temp}°C</p>

          <div className={classes.coordinates}>
            <span className={classes.paragraph}>lat: {weather.lat}</span>
            <span className={classes.paragraph}>lon: {weather.lon}</span>
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
            <button className={classes.button} onClick={home}>
              New Location
            </button>
          </div>
        </div>
      )}
    </>
  );
};

export default WeatherCard;
