var express = require("express");
var router = express.Router();
var model = require("../models/index");

/* GET home page. */
router.get("/film", function(req, res, next) {
  model.Films.findAll({})
    .then(films =>
      res.json({
        error: false,
        data: films
      })
    )
    .catch(error =>
      res.json({
        error: true,
        data: [],
        error: error
      })
    );
});

/* GET home page. */
router.post("/film", function(req, res, next) {
  console.log("Je suis dans l'api", req.body);
  model.Films.create({
    title: req.body.title,
    description: req.body.description,
    vignette: req.body.vignette,
    url: req.body.url
  })
    .then(films =>
      res.status(201).json({
        error: false,
        data: films,
        message: "Un nouveau film a été créé"
      })
    )
    .catch(error =>
      res.status(401).json({
        error: true,
        data: [],
        error: error
      })
    );
});

/* GET home page. */
router.put("/film/:id", function(req, res, next) {
  console.log("2222222222**********22222222222222222", req.body);

  model.Films.update(
    {
      title: req.body.title,
      description: req.body.description,
      vignette: req.body.vignette,
      url: req.body.url
    },
    {
      where: {
        id: req.params.id
      }
    }
  )
    .then(films =>
      res.status(201).json({
        error: false,
        data: films,
        message: "Un nouveau film a été créé"
      })
    )
    .catch(error =>
      res.status(401).json({
        error: true,
        data: [],
        error: error
      })
    );
});

/* GET home page. */
router.delete("/film/:id", function(req, res, next) {
  model.Films.destroy({
    where: { id: req.params.id }
  }).then(result => res.json(result));
});

module.exports = router;
