"use client";
import { useState, useRef, useEffect } from "react";
import WeatherCard from "./components/WeatherCard/WeatherCard";

export default function Home() {
  const [weather, setWeather] = useState({});
  const [search, setSearch] = useState({ city: "", country: "" });
  const cityNameRef = useRef(null);
  const countryCodeRef = useRef(null);

  const handleSubmit = (ev) => {
    ev.preventDefault();

    setSearch({
      city: cityNameRef.current.value,
      country: countryCodeRef.current.value,
    });

    ev.target.reset();
  };

  useEffect(() => {
    if (search.city === "") return;

    console.log(search);

    fetch(
      `https://api.openweathermap.org/data/2.5/weather?q=${search.city},${search.country}&appid=${process.env.NEXT_PUBLIC_API_KEY}`,
      { cache: "force-cache" }
    )
      .then((response) => {
        if (!response.ok) throw new Error("Failed to fetch data");

        return response.json();
      })
      .then((data) => {
        console.log(data);

        setWeather({
          name: data.name,
          sys: data.sys,
          main: data.weather[0].main,
          description: data.weather[0].description,
          icon: data.weather[0].icon,
        });

        setTimeout(async () => {
          setSearch({ city: "", country: "" });
        }, 2000);
      })
      .catch((error) => {
        console.error(error);
      });
  }, [search]);

  return (
    <>
      <div className="container max-w-full flex flex-col justify-center items-center py-8 gap-8">
        <form
          action=""
          onSubmit={handleSubmit}
          className="container max-w-full flex flex-col gap-2 justify-center items-center"
        >
          <input
            className="border-none outline-none p-2 text-black w-3/4"
            type="text"
            placeholder="Current location"
            ref={cityNameRef}
            required
          />
          <input
            className="border-none outline-none p-2 text-black w-3/4"
            type="text"
            placeholder="Country code"
            ref={countryCodeRef}
            required
          />
          <button className="bg-purple-950 text-white p-2 w-3/4" type="submit">
            Submit
          </button>
        </form>

        <div className="container max-w-full p-10">
          <WeatherCard weather={weather} />
        </div>
      </div>
    </>
  );
}
