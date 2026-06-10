export default async function handler(req, res) {
  try {
    const response = await fetch(
      "https://api.football-data.org/v4/competitions/WC",
      {
        headers: {
          "X-Auth-Token": process.env.FOOTBALL_API_KEY
        }
      }
    );

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