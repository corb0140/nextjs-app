export async function GET(request) {
  const url = new URL(request.url);
  const query = new URLSearchParams(url.search);
  const locale = query.get("locale");
  const apiKey = process.env.WEATHER_API_KEY;

  const res = await fetch(
    `https://api.openweathermap.org/data/2.5/weather?q=${locale}&appid=${apiKey}&units=metric`,
    {
      method: "GET",
      next: { revalidate: 0 },
      headers: {
        accept: "application/json",
      },
    }
  );

  if (!res.ok) {
    throw new Error("Failed to fetch data from openweathermap API");
  }

  const data = await res.json();

  return new Response(JSON.stringify(data), {
    headers: {
      "content-type": "application/json",
      "access-control-allow-methods": "GET,HEAD",
      "access-control-allow-origin": "*",
    },
    status: 200,
  });
}
