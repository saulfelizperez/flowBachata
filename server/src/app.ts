import express from "express";

const app = express();
const PORT = 3000;

// Endpoint
app.get("/places", (req, res) => {
  res.json([
    {
      id: 1,
      name: "Bachastation",
      type: "social",
      days: ["domingo"],
      music: "sensual"
    },
    {
      id: 2,
      name: "QChimba",
      type: "Social",
      days: ["viernes", "domingos"],
      music: "sensual"
    }
  ]);
});

// Servidor escuchando
app.listen(PORT, () => {
  console.log(`Servidor corriendo en http://localhost:${PORT}`);
});