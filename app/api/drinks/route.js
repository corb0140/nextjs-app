export async function GET(request) {
  const url = new URL(request.url);
  const query = url.search;
  const decodedQuery = decodeURIComponent(query.split("?")[1]);

  const res = await fetch(
    `https://www.thecocktaildb.com/api/json/v1/1/search.php?s=${decodedQuery}`,
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
