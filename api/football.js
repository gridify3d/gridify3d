export default async function handler(req, res) {
  try {
    const limit = req.query.limit;

    let url = "https://api.football-data.org/v4/competitions/WC/matches?season=2026";

    if (limit) {
      url += `&limit=${encodeURIComponent(limit)}`;
    }

    const response = await fetch(url, {
      headers: {
        "X-Auth-Token": process.env.FOOTBALL_API_KEY
      }
    });

    const text = await response.text();

    res.status(response.status);
    res.setHeader("Content-Type", "application/json");
    res.send(text);

  } catch (err) {
    res.status(500).json({
      error: err.message
    });
  }
}