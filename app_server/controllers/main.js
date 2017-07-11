/* GET home page */
module.exports.index = function(req,res) {
	res.render('index', {title: 'Sharon Stratsianis'});
};

module.exports.projects = function(req,res) {
	res.render('projects', {title: 'Projects'});
};

module.exports.education = function(req,res) {
	res.render('education', {title: 'Education'});
};

module.exports.status = function(req,res) {
  res.render('status', {title: 'Status'});
};
module.exports.skills = function(req,res) {

	res.render('skills', {title: 'Skills'});
		// Setup
}