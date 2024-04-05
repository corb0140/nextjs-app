export async function GET(request) {
  const url = new URL(request.url);
  const searchParam = new URLSearchParams(url.search);
  const query = searchParam.get("q");
  const appId = process.env.FOOD_APP_ID;
  const apiKey = process.env.FOOD_API_KEY;

  const res = await fetch(
    `https://api.edamam.com/api/recipes/v2?type=public&q=${query}&app_id=${appId}&app_key=${apiKey}`,
    {
      method: "GET",
      headers: {
        accept: "application/json",
      },
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
