module.exports = {
  getAllProperties: (req, res) => {
    // console.log("in controller!");
    const dbInstance = req.app.get("db");
    // console.log("db:", dbInstance);
    dbInstance
      .get_properties()
      .then((properties) => res.status(200).send(properties))
      .catch((err) => {
        res.status(500).send({ errorMessage: "Failed" });
        console.log(err);
      });
  },

  getCampers: (req, res) => {
    console.log("INSIDE GET CAMPERS");
    const dbInstance = req.app.get("db");
    dbInstance
      .get_campers()
      .then((campers) => res.status(200).send(campers))
      .catch((err) => {
        res.status(500).send({
          errorMessage: "Oops it's busted",
        });
        console.log(err);
      });
  },
  getResults: (req, res) => {
    console.log("inside controller");
    let { userInput } = req.body;
    console.log(userInput);
    const dbInstance = req.app.get("db");
    dbInstance
      .get_results([userInput])
      .then((results) => res.status(200).send(results));
  },
};
