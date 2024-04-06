import { redirect } from "next/navigation";

import WeatherCard from "../components/WeatherCard/WeatherCard";

export const fetchCache = "force-no-store";

const page = async ({ params }) => {
  let { location } = params;
  const decodedLocation = decodeURIComponent(location);

  const base = process.env.BASE;

  const response = await fetch(`${base}/api/weather?locale=${decodedLocation}`);

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
