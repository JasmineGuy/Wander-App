require("dotenv").config();
const express = require("express");
const massive = require("massive");
const ctrl = require("./properties_controller");
const path = require("path");

const app = express();
app.use(express.static(path.join(__dirname, "../build")));

const { PORT, DATABASE_URL } = process.env;
const port = PORT || 4000;

massive({
  connectionString: DATABASE_URL,
  ssl: { rejectUnauthorized: false, require: true },
})
  .then((dbInstance) => {
    app.set("db", dbInstance);
  })
  .catch((err) => console.log(err));

app.use(express.json());

//endpoints
app.post("/api/search", ctrl.getResults);
app.get("/api/properties", ctrl.getAllProperties);
app.get("/api/properties/:id", ctrl.getCategory);
app.get("/api/listing/:id", ctrl.getProperty);
app.get("/api/reviews/:id", ctrl.getReviews);
app.post("/api/review/:id", ctrl.createReview);
app.put("/api/review/:id", ctrl.editReview);
app.get("/api/average/:id", ctrl.getAverage);
app.get("/api/count/:id", ctrl.getCount);
app.post("/api/favorites", ctrl.addFavorite);

app.delete("/api/review/:id", ctrl.deleteReview);

app.get("*", (req, res) => {
  res.sendFile(path.join(__dirname, "../build", "index.html"));
});

app.listen(port, () => {
  console.log(`Server listening on port ${port}`);
});
