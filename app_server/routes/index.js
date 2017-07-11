var express = require('express');
var router = express.Router();
ctrlMain = require('../controllers/main');

var homepageController = function(req,res) {
   res.render('/', {title: 'Sharon Stratsianis'});
};

/* GET home page. */
router.get('/', ctrlMain.index);

/* GET projects page. */
router.get('/projects', ctrlMain.projects);

/* GET education page. */
router.get('/education', ctrlMain.education);

/* GET skills page. */
router.get('/skills', ctrlMain.skills);
/* GET skills page. */
router.get('/status', ctrlMain.status);



module.exports = router;
