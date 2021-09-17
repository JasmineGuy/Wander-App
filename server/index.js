require("dotenv").config();
const express = require("express");
const massive = require("massive");
const ctrl = require("./properties_controller");

const app = express();

const { SERVER_PORT, CONNECTION_STRING } = process.env;

massive({
  connectionString: CONNECTION_STRING,
  ssl: { rejectUnauthorized: false },
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

// app.get("/api/campers", ctrl.getCampers);

app.listen(SERVER_PORT, () => {
  console.log(`Server listening on port ${SERVER_PORT}`);
});
