"use client";

import { useState, useEffect } from "react";
import WeatherCard from "../components/WeatherCard/WeatherCard";
import { useRouter } from "next/navigation";

const page = ({ params }) => {
  const { location } = params;
  const decodedLocation = decodeURIComponent(location);

  const router = useRouter();

  const [weather, setWeather] = useState({});

  useEffect(() => {
    fetch(`http://localhost:3000/api/weather?${decodedLocation}`)
      .then((response) => {
        if (!response.ok) {
          router.push("/404");
          throw new Error("Location not found");
        }
        return response.json();
      })
      .then((data) => {
        console.log(data);
        setWeather({
          name: data.name,
          sys: data.sys,
          main: data.weather[0].main,
          description: data.weather[0].description,
          temp: data.main.temp,
          lat: data.coord.lat,
          lon: data.coord.lon,
        });
      })
      .catch((error) => {
        console.error(error);
      });
  }, [decodedLocation]);

  return (
    <div className="container max-w-full p-10 flex justify-center items-center">
      <WeatherCard weather={weather} location={decodedLocation} />
    </div>
  );
};

export default page;
