"use client";

import { useState, useEffect } from "react";
import WeatherCard from "../components/WeatherCard/WeatherCard";
import { usePathname, useRouter } from "next/navigation";

const page = () => {
  const router = useRouter();

  const [weather, setWeather] = useState({});

  const pathname = usePathname();
  const decodedPathname = decodeURIComponent(pathname.split("/")[1]);

  useEffect(() => {
    fetch(`http://localhost:3000/api/weather?${decodedPathname}`)
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
  }, [decodedPathname]);

  return (
    <div className="container max-w-full p-10 flex justify-center items-center">
      <WeatherCard weather={weather} pathname={decodedPathname} />
    </div>
  );
};

export default page;
