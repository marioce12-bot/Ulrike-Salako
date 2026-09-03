module.exports = async (req, res) => {
  if (req.method !== "POST") {
    res.status(405).json({ ok: false, error: "Méthode non autorisée." });
    return;
  }

  let body = req.body;
  if (!body || typeof body === "string") {
    try { body = JSON.parse(body || "{}"); } catch { body = {}; }
  }

  const password = body && body.password;
  const image = body && body.image;
  const name = body && body.name;

  const adminPassword = process.env.ADMIN_PASSWORD;
  const imgbbKey = process.env.IMGBB_API_KEY;

  if (!adminPassword || !imgbbKey) {
    res.status(500).json({
      ok: false,
      error: "Configuration serveur incomplète : vérifie ADMIN_PASSWORD et IMGBB_API_KEY sur Vercel.",
    });
    return;
  }

  if (typeof password !== "string" || password !== adminPassword) {
    res.status(401).json({ ok: false, error: "Non autorisé." });
    return;
  }

  if (typeof image !== "string" || image.length === 0) {
    res.status(400).json({ ok: false, error: "Aucune image reçue." });
    return;
  }

  const base64 = image.includes(",") ? image.split(",").pop() : image;

  try {
    const params = new URLSearchParams();
    params.set("key", imgbbKey);
    params.set("image", base64);
    if (name) params.set("name", String(name).slice(0, 80));

    const upstream = await fetch("https://api.imgbb.com/1/upload", {
      method: "POST",
      headers: { "Content-Type": "application/x-www-form-urlencoded" },
      body: params.toString(),
    });
    const data = await upstream.json();

    if (!upstream.ok || !data || !data.data || !data.data.url) {
      res.status(502).json({
        ok: false,
        error: (data && data.error && data.error.message) || "Échec de l'upload vers imgbb.",
      });
      return;
    }

    res.status(200).json({ ok: true, url: data.data.display_url || data.data.url });
  } catch (err) {
    res.status(500).json({ ok: false, error: "Erreur serveur lors de l'upload." });
  }
};
