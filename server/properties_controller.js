module.exports = {
  getAllProperties: (req, res) => {
    console.log("in controller!");
    const dbInstance = req.app.get("db");
    // console.log("db:", dbInstance);
    dbInstance
      .get_properties()
      // .then((res) => res.status(200).send(res))
      // .then((res) => console.log("MY RES: ", res))
      .then((properties) => res.status(200).send(properties))
      .catch((err) => {
        res.status(500).send({ errorMessage: "Failed" });
        console.log(err);
      });
  },

  getPics: (req, res) => {
    console.log("INSIDE GET PICS");
    const dbInstance = req.app.get("db");
    dbInstance
      .get_pictures()
      .then((pictures) => res.status(200).send(pictures))
      .catch((err) => {
        res.status(500).send({
          errorMessage: "Oops it's busted",
        });
        console.log(err);
      });
  },
};
