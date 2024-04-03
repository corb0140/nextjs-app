import { redirect } from "next/navigation";

import WeatherCard from "../components/WeatherCard/WeatherCard";

const page = async ({ params }) => {
  let { location } = params;
  const decodedLocation = decodeURIComponent(location);

  // const base = process.env.BASE;

  const response = await fetch(
    `http://localhost:3000/api/weather?locale=${decodedLocation}`
  );

  if (!response.ok) {
    redirect("/404");
  }

  const data = await response.json();

  return (
    <div className="container max-w-full p-10 flex justify-center items-center">
      <WeatherCard weather={{ data }} location={decodedLocation} />
    </div>
  );
};

export default page;
