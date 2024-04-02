export async function GET(request, { params }) {
  const url = new URL(request.url);
  const query = url.search;
  const decodedQuery = decodeURIComponent(query.split("?")[1]);
  console.log(params);

  const res = await fetch(
    `https://api.openweathermap.org/data/2.5/weather?q=${decodedQuery}&appid=${process.env.WEATHER_API_KEY}&units=metric`,
    {
      method: "GET",
      headers: {
        accept: "application/json",
      },
      next: { revalidate: 60 },
    }
  );

  if (!res.ok) {
    return;
  }

  const data = await res.json();

  return new Response(JSON.stringify(data), {
    headers: {
      "content-type": "application/json",
      "access-control-allow-methods": "GET,HEAD",
      "access-control-allow-origin": "*",
    },
  });
}
