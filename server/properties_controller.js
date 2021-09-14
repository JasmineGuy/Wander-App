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
    let { id } = req.params;
    // console.log("controller id:", id);
    const dbInstance = req.app.get("db");
    dbInstance
      .get_property(id)
      .then((listing) => {
        // console.log("listing:", listing);
        res.status(200).send(listing[0]);
      })
      .catch((err) => {
        res.status(500).send({
          errorMessage: "Oops it's busted",
        });
        console.log(err);
      });
  },
  getReviews: (req, res) => {
    let { id } = req.params;
    const dbInstance = req.app.get("db");
    dbInstance
      .get_reviews(id)
      .then((reviews) => res.status(200).send(reviews))
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
  createReview: (req, res) => {
    let { id } = req.params;
    let { text, rating, userID } = req.body;
    // console.log("review text:", text);
    const dbInstance = req.app.get("db");
    dbInstance
      .create_review([userID, id, text, rating])
      .then((results) => res.status(200).send(results));
  },
  editReview: (req, res) => {
    // console.log("made it to edit controller!");
    // console.log("should be rating info:", req.body);
    // console.log("should be rating id:", req.params);
    let { id } = req.params;
    let { text, rating, propId } = req.body;
    // console.log("review text:", text);
    const dbInstance = req.app.get("db");
    dbInstance
      .edit_review([text, rating, id, propId])
      .then((results) => res.status(200).send(results));
  },
  deleteReview: (req, res) => {
    // console.log("made it to delete controller!");
    let { id } = req.params;
    console.log("delete id:", id);
    const dbInstance = req.app.get("db");
    dbInstance
      .delete_review([id])
      .then((results) => res.status(200).send(results));
  },
};
