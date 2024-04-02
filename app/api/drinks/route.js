export async function GET(request) {
  const url = new URL(request.url);
  const query = url.search;
  const decodedQuery = decodeURIComponent(query.split("?")[1]);

  const res = await fetch(
    `https://www.thecocktaildb.com/api/json/v1/1/search.php?s=${decodedQuery}`,
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
