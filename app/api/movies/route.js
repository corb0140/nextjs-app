export async function GET(request) {
  const url = new URL(request.url);
  const query = new URLSearchParams(url.search);
  const locale = query.get("q");

  const res = await fetch(
    `https://api.themoviedb.org/3/search/movie?api_key=${process.env.MOVIE_API_KEY}&query=${locale}&include_adult=false&language=en-US&page=1`,
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
