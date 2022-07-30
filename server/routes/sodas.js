var express = require('express');
var router = express.Router();
var sodaData = require('../data/sodas.json');
var fs = require('fs');


//! CREATE new soda JSON
// TODO: Add edge case if array is empty
router.post('/v1/status/sodas/add', (req, res, next) => { 
  var getLastID = sodaData[sodaData.length - 1]
  
  var newSoda = {
    id: Number(getLastID.id) + 1,
    name: req.body.name,
    cost: req.body.cost,
    quantity: req.body.quantity,
    desc: req.body.desc
  };

  sodaData.push(newSoda);
  res.json(sodaData)
});

// //! READ all of soda JSON
router.get('/v1/status/sodas/', (req, res, next) => {
  res.send(sodaData);
});

// //! READ individual soda JSON
router.get('/v1/status/sodas/:id', (req, res, next) => {
  var getID = req.params.id;
  var soda = sodaData.find(x => x.id === parseInt(getID));
  if (!soda) res.status(404).send('Soda not yet added')
  res.send(soda);
});

//! UPDATE soda JSON
router.put('/v1/status/sodas/put/:id', (req, res, next) => {
  var getID = req.params.id; 
  
  var newSoda = {
    id: getID,
    name: req.body.name,
    cost: req.body.cost,
    quantity: req.body.quantity,
    desc: req.body.desc
  };

  for(var i = 0; i < sodaData.length; i++){
    if(sodaData[i].id === Number(getID)){
      sodaData[i] = newSoda;
    }
  }
  res.json(sodaData);
});

//! DELETE soda JSON
router.delete('/v1/status/sodas/delete/:id', (req, res, next) => {
  var getID = req.params.id; 
  for(var i = 0; i < sodaData.length; i++){
    if(sodaData[i].id === sodaData.length){
      sodaData.pop();
    }
    else if(sodaData[i].id === Number(getID)){
      sodaData.splice(i,1)
    }
  }
  res.send(sodaData)
});

module.exports = router;
