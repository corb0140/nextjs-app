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
        "content-type": "application/json",
        "access-control-allow-methods": "GET,HEAD",
        "access-control-allow-origin": "*",
      },
    }
  );

  if (!res.ok) {
    throw new Error("Failed to fetch data from the API");
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

export async function HEAD(request) {
  return new Response(null, {
    headers: {
      "content-type": "application/json",
      "content-length": 868,
      "access-control-allow-methods": "GET,HEAD",
      "access-control-allow-origin": "*",
    },
    status: 200,
  });
}
