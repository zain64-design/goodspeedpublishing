export async function POST(request: Request) {
  try {
    const formData = await request.formData();

    const name = (formData.get("name") as string | null)?.trim();
    const phone = (formData.get("phone") as string | null)?.trim();
    const email = (formData.get("email") as string | null)?.trim();
    const message = (formData.get("message") as string | null)?.trim();
    const ip = (formData.get("ip") as string | null)?.trim() || "";
    const city = (formData.get("city") as string | null)?.trim() || "";
    const country = (formData.get("country") as string | null)?.trim() || "";
    const zip_code = (formData.get("zip_code") as string | null)?.trim() || "";

    if (!name || !phone || !email || !message) {
      return Response.json(
        { success: false, error: "Missing required fields" },
        { status: 400 },
      );
    }

    const params = new URLSearchParams({
      name,
      phone,
      email,
      message,
      ip,
      city,
      country,
      zip_code,
      brand_name: "goodspeedpublishing.com",
      lead_area: "https://goodspeedpublishing.vercel.app/",
    });

    const controller = new AbortController();
    const timeoutId = setTimeout(() => controller.abort(), 8000);

    const res = await fetch(
      `https://leads.infinityprojectmanager.com/brand/goodspeedpublishing/lead?${params.toString()}`,
      { method: "GET", redirect: "manual", signal: controller.signal },
    );

    clearTimeout(timeoutId);

    if (res.status >= 200 && res.status < 400) {
      return Response.json({ success: true });
    }

    return Response.json({ success: false }, { status: res.status });
  } catch (err) {
    console.error("Lead submission error:", err);
    return Response.json({ success: false }, { status: 500 });
  }
}
