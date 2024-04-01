"use client";

import { useEffect, useState } from "react";
import DrinkCard from "../../components/DrinkCard/DrinkCard";

import { useSearchParams } from "next/navigation";

const page = (props) => {
  let location = decodeURIComponent(props.params.location);
  const [drink, setDrink] = useState({});
  const searchParams = useSearchParams();
  const query = searchParams.get("main");

  useEffect(() => {
    fetch(`https://www.thecocktaildb.com/api/json/v1/1/search.php?s=${query}`)
      .then((response) => {
        if (!response.ok) throw new Error("Failed to fetch data");

        return response.json();
      })
      .then((data) => {
        if (data.drinks === null) {
          fetch(`https://www.thecocktaildb.com/api/json/v1/1/random.php`)
            .then((response) => response.json())
            .then((data) => {
              setDrink({
                title: data.drinks[0].strDrink,
                id: data.drinks[0].idDrink,
              });
            });
        } else {
          setDrink({
            title: data.drinks[0].strDrink,
            id: data.drinks[0].idDrink,
          });
        }
      })
      .catch((error) => {
        console.error(error);
      });
  }, [query]);

  return (
    <div className="container max-w-full p-10">
      <h2 className="pb-3">
        Ingredients for <span className="text-teal-300">{query}</span>
      </h2>
      <DrinkCard drink={drink} location={location} />
    </div>
  );
};

export default page;
