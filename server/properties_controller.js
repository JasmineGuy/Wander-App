module.exports = {
  getAllProperties: (req, res, next) => {
    console.log("in controller!");
    const dbInstance = req.app.get("db");
    console.log("db:", dbInstance);
    dbInstance
      .get_properties()
      .then((res) => res.status(200).send(res))
      .catch((err) => {
        res.status(500).send({ errorMessage: "Failed" });
        console.log(err);
      });
  },
};
