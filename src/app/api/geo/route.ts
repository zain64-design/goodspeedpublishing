export async function GET(request: Request) {
  const ip = request.headers.get("x-forwarded-for")?.split(",")[0] ?? "";
  const res = await fetch(`https://api.ipapi.is/?q=${ip}`);
  const data = await res.json();
  return Response.json({
    ip: data.ip || "",
    city: data.location?.city || "",
    country: data.location?.country || "",
    zip_code: data.location?.zip || "",
  });
}
