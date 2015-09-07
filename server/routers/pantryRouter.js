var express = require('express');
var Q = require('q');
var pantryHelpers = require('../pantry-helpers.js');
var router = express.Router();

/**
 *  GET /pantry/household/:id
 *  Returns the pantry for the household
 *  Includes two lists: tracked and untracked
 */
router.get('/household/:id', function(req, res) {
  var household = req.params.id;

  pantryHelpers.getPantry(household)
  .then(function(pantry) {
    console.log('PANTRY', pantry);
    res.send(pantry);
  })
  .catch(function(err) {
    res.status(404).send('Cannot retrieve household pantry');
  });
});

/**
 *  GET /pantry/general
 *  Returns the general pantry (all items)
 */
router.get('/general', function(req, res) {
  pantryHelpers.getAppPantry()
  .then(function(appPantry) {
    res.send(appPantry);
  })
  .catch(function() {
    res.status(404).send('Cannot retrieve general pantry');
  });
});


/**
 *  POST /pantry
 *  Add item to pantry from pantry builder
 *  Note: For items bought, use /buy
 */
router.post('/', function(req, res) {
  var item = req.body.item;
  var household = req.body.household;

  pantryHelpers.addToPantry(item, household)
  .then(function(pantry) {
    console.log('PANTRY',pantry);
    res.status(201).send(pantry);
  })
  .catch(function() {
    res.status(404).send('Cannot add item to pantry');
  });
});

/**
 *  DELETE /pantry
 *  Remove item from pantry
 *  Note: This will not add the item to shopping list
 */
router.delete('/', function(req, res) {
  var item = req.body.item;
  var household = req.body.household;

  pantryHelpers.removeFromPantry(item, household)
  .then(function(pantry) {
    res.send(pantry);
  })
  .catch(function() {
    res.status(404).send('Cannot add item to pantry');
  });
});

module.exports = router;