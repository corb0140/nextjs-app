"use client";

import classes from "./WeatherCard.module.css";

import { useRouter } from "next/navigation";

const WeatherCard = ({ weather, location }) => {
  const router = useRouter();

  const data = weather.data;

  const home = () => {
    router.push("/");
  };

  const navigation = (route) => {
    router.push(
      `/${encodeURIComponent(`${location}`)}/${route}?main=${
        data.weather[0].main
      }`
    );
  };

  return (
    <div className={classes.card}>
      <h1 className={classes.heading}>
        {data.name}, {data.sys.country}
      </h1>
      <p className={classes.paragraph}>{data.weather[0].main}</p>
      <p className={classes.paragraph}>{data.weather[0].description}</p>
      <p className={classes.paragraph}>Temperature: {data.main.temp}°C</p>

      <div className={classes.coordinates}>
        <span className={classes.paragraph}>lat: {data.coord.lat}</span>
        <span className={classes.paragraph}>lon: {data.coord.lon}</span>
      </div>

      <div className={classes.buttonContainer}>
        <button className={classes.button} onClick={() => navigation("food")}>
          Perfect Foods
        </button>
        <button className={classes.button} onClick={() => navigation("movie")}>
          Perfect Movies
        </button>
        <button className={classes.button} onClick={home}>
          New Location
        </button>
      </div>
    </div>
  );
};

export default WeatherCard;
