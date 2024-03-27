import classes from "./WeatherCard.module.css";
import { useEffect, useState } from "react";
import Link from "next/link";

const WeatherCard = ({ weather }) => {
  const [showCard, setShowCard] = useState(true);

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
            <Link
              className={classes.button}
              href={
                "/" +
                encodeURIComponent(`${weather.name} ${weather.sys.country}`) +
                "/drink"
              }
            >
              Perfect Drink
            </Link>
            <Link
              className={classes.button}
              href={
                "/" +
                encodeURIComponent(`${weather.name} ${weather.sys.country}`) +
                "/movie"
              }
            >
              Perfect Movie
            </Link>
          </div>
        </div>
      )}
    </>
  );
};

export default WeatherCard;
