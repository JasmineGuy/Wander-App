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
    const dbInstance = req.app.get("db");
    dbInstance
      .get_property(id)
      .then((listing) => {
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
  getAverage: (req, res) => {
    let { id } = req.params;
    const dbInstance = req.app.get("db");
    dbInstance
      .get_average(id)
      .then((average) => res.status(200).send(average))
      .catch((err) => {
        res.status(500).send({
          errorMessage: "Oops your app is busted",
        });
        console.log(err);
      });
  },
  getCount: (req, res) => {
    let { id } = req.params;
    const dbInstance = req.app.get("db");
    dbInstance
      .get_count(id)
      .then((count) => res.status(200).send(count))
      .catch((err) => {
        res.status(500).send({
          errorMessage: "Oops your app is busted",
        });
        console.log(err);
      });
  },

  getResults: (req, res) => {
    let { searchParam } = req.body;
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
    const dbInstance = req.app.get("db");
    dbInstance
      .create_review([userID, id, text, rating])
      .then((results) => res.status(200).send(results));
  },
  editReview: (req, res) => {
    let { id } = req.params;
    let { text, rating, propId } = req.body;
    const dbInstance = req.app.get("db");
    dbInstance
      .edit_review([text, rating, id, propId])
      .then((results) => res.status(200).send(results));
  },
  deleteReview: (req, res) => {
    let { id } = req.params;
    const dbInstance = req.app.get("db");
    dbInstance
      .delete_review([id])
      .then((results) => res.status(200).send(results));
  },
  addFavorite: (req, res) => {
    let { propID, userID } = req.body;
    const dbInstance = req.app.get("db");
    dbInstance
      .add_favorite([propID, userID])
      .then((faves) => res.status(200).send(faves));
  },
};
