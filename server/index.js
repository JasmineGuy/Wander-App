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
app.get("/api/properties", ctrl.getAllProperties);

app.listen(SERVER_PORT, () => {
  console.log(`Server listening on port ${SERVER_PORT}`);
});