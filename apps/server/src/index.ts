import e from "express";

const app = e();
const PORT = process.env.PORT || 3030;

app.get("/", (req, res) => {
  console.log(req);
  res.send({ message: "Animman backend is working 🚀" });
});

app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
