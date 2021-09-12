module.exports = {
  getAllProperties: (req, res) => {
    const dbInstance = req.app.get("db");
    dbInstance
      .get_properties()
      .then((properties) => res.status(200).send(properties))
      .catch((err) => {
        res.status(500).send({ errorMessage: "Failed" });
        console.log(err);
      });
  },
  getProperty: (req, res) => {
    // console.log("in listing controller!");
    let { id } = req.params;
    const dbInstance = req.app.get("db");
    dbInstance
      .get_property(id)
      .then((listing) => res.status(200).send(listing[0]))
      .catch((err) => {
        res.status(500).send({
          errorMessage: "Oops it's busted",
        });
        console.log(err);
      });
  },

  getResults: (req, res) => {
    let { searchParam } = req.body;
    console.log(searchParam);
    const dbInstance = req.app.get("db");
    dbInstance
      .get_results([searchParam])
      .then((results) => res.status(200).send(results));
  },
  getCategory: (req, res) => {
    let { id } = req.params;
    const dbInstance = req.app.get("db");
    dbInstance
      .get_category(id)
      .then((results) => res.status(200).send(results))
      .catch((err) => {
        res.status(500).send({
          errorMessage: "Oops it's busted",
        });
        console.log(err);
      });
  },
};
