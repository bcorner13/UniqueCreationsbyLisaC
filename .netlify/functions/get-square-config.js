export default async (req, context) => {
    // Return the public IDs needed for the frontend SDK
    return new Response(JSON.stringify({
        appId: process.env.SQUARE_APP_ID,
        locationId: process.env.SQUARE_LOCATION_ID
    }), {
        status: 200,
        headers: { 
            "Content-Type": "application/json",
            "Access-Control-Allow-Origin": "*"
        }
    });
};