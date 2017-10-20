var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/:users(\[aA-zZ]+)', function(req, res, next) {
  res.send('Hey my name is' + req.params.users);
});

router.put('/:users(\[aA-zZ]+)', function(req, res, next) {
  res.send('Hey my name is' + req.params.users);
});

/* GET user with ID. */
router.delete('/:id(\\d+)', function(req, res, next) {
  res.send('Hey ! It\'s a GET with ID ' + req.params.id);
});


module.exports = router;


/*var express = require('express');
var router = express.Router();

/* GET users listing. */
/*router.get('/', function(req, res, next) {
  res.send('respond with a resource');
});

/* GET user with ID. */
/*router.get('/:id(\\d+)', function(req, res, next) {
  res.send('Hey ! It\'s a GET with ID ' + req.params.id);
});

/* POST user creation. */
/*router.post('/', function(req, res, next) {
  res.send('Hey ! It\'s a POST');
});

module.exports = router;*/
