export async function GET(request) {
  const url = new URL(request.url);
  const query = new URLSearchParams(url.search);
  const locale = query.get("locale");
  const apiKey = process.env.WEATHER_API_KEY;

  const res = await fetch(
    `https://api.openweathermap.org/data/2.5/weather?q=${locale}&appid=${apiKey}&units=metric`,
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
    status: 200,
  });
}
