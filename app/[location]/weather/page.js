"use client";

import { useState, useEffect } from "react";
import WeatherCard from "../../components/WeatherCard/WeatherCard";
import { usePathname, useRouter } from "next/navigation";

const page = () => {
  const [weather, setWeather] = useState({});

  const pathname = usePathname();
  const decodedPathname = decodeURIComponent(pathname.split("/")[1]);
  const router = useRouter();

  console.log(decodedPathname);

  useEffect(() => {
    fetch(
      `https://api.openweathermap.org/data/2.5/weather?q=${decodedPathname}&appid=${process.env.NEXT_PUBLIC_WEATHER_API_KEY}&units=metric`,
      { cache: "force-cache" }
    )
      .then((response) => {
        if (!response.ok) {
          router.push("/404");
          throw new Error("location not found");
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
    <div className="container max-w-full p-10">
      <WeatherCard weather={weather} pathname={decodedPathname} />
    </div>
  );
};

export default page;
