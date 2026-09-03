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
  const adminPassword = process.env.ADMIN_PASSWORD;
  const firebaseEmail = process.env.FIREBASE_ADMIN_EMAIL;
  const firebasePassword = process.env.FIREBASE_ADMIN_PASSWORD;

  if (!adminPassword || !firebaseEmail || !firebasePassword) {
    res.status(500).json({
      ok: false,
      error: "Configuration serveur incomplète : vérifie ADMIN_PASSWORD, FIREBASE_ADMIN_EMAIL et FIREBASE_ADMIN_PASSWORD sur Vercel.",
    });
    return;
  }

  if (typeof password !== "string" || password.length === 0 || password !== adminPassword) {
    res.status(401).json({ ok: false, error: "Mot de passe incorrect." });
    return;
  }

  res.status(200).json({ ok: true, email: firebaseEmail, password: firebasePassword });
};
