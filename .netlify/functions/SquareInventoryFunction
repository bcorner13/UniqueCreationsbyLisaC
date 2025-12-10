export default async (req, context) => {
  // 1. Security Check: Ensure the Square Token exists in Netlify Settings
  if (!process.env.SQUARE_ACCESS_TOKEN) {
    console.error("Missing SQUARE_ACCESS_TOKEN environment variable");
    return new Response(JSON.stringify({ error: "Server configuration error" }), {
      status: 500,
      headers: { "Content-Type": "application/json" }
    });
  }

  try {
    // 2. Call Square API securely from the server
    const response = await fetch("https://connect.squareup.com/v2/catalog/list?types=ITEM", {
      method: "GET",
      headers: {
        "Authorization": `Bearer ${process.env.SQUARE_ACCESS_TOKEN}`,
        "Content-Type": "application/json",
        "Square-Version": "2023-10-20" // Pins the API version for stability
      }
    });

    if (!response.ok) {
      const errorText = await response.text();
      console.error("Square API Error:", errorText);
      throw new Error(`Square API responded with ${response.status}`);
    }

    const data = await response.json();

    // 3. Return the data to your frontend
    return new Response(JSON.stringify(data), {
      status: 200,
      headers: {
        "Content-Type": "application/json",
        "Access-Control-Allow-Origin": "*" // Allow your site to access this
      }
    });

  } catch (error) {
    console.error("Function Error:", error);
    return new Response(JSON.stringify({ error: "Failed to fetch inventory" }), {
      status: 500,
      headers: { "Content-Type": "application/json" }
    });
  }
};
