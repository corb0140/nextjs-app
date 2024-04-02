export async function GET(request) {
  const url = new URL(request.url);
  const query = url.search;
  const decodedQuery = decodeURIComponent(query.split("?")[1]);

  const res = await fetch(
    `https://api.openweathermap.org/data/2.5/weather?q=${decodedQuery}&appid=${process.env.WEATHER_API_KEY}&units=metric`,
    {
      headers: {
        "Content-Type": "application/json",
      },
    }
  );

  if (!res.ok) {
    return;
  }

  const data = await res.json();

  return Response.json(data);
}
