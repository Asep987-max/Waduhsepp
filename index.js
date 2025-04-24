const express = require("express");
const cors = require("cors");
const path = require("path");
const app = express();
const PORT = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());

app.get("/api/profile", (req, res) => {
  res.json({
    name: "Nama Anda",
    bio: "Saya adalah seorang pengembang web fullstack.",
    email: "email@anda.com",
    projects: [
      { title: "Website A", description: "Deskripsi proyek A" },
      { title: "Website B", description: "Deskripsi proyek B" }
    ]
  });
});

app.use(express.static(path.join(__dirname, "../client/dist")));
app.get("*", (req, res) => {
  res.sendFile(path.join(__dirname, "../client/dist/index.html"));
});

app.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}`);
});
