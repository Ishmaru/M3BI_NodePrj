const User = require('../models/user_model');
exports.user_index = function(req, res, next){
  User.find({}, function(err, users){
    if (err) {
      return next(err);
    }
    res.send(users);
  })
}
exports.user_create = function(req, res, next){
  let user = new User({
    username: req.body.username,
    name: {
      first: req.body.first,
      last: req.body.last
    },
    email: req.body.email
  });
  user.save(function (err){
    if(err){
      return next(err);
    }
    res.send(`user Added ${user.name.first} ${user.name.last}`);
    // res.send('user Added' + user.name.first + ' ' + user.name.last);
  })
}
exports.user_details = function(req, res) {
  User.findById(req.params.id, function(err, user, next){
    if (err) {
      return next(err);
    }
    res.send(user);
  })
};
exports.user_update = function(req, res, next) {
  User.findByIdAndUpdate(req.params.id, {$set: req.body}, function(err, user){
    if(err){
      return next(err);
    }
    res.send('user Updated');
  })
};
exports.user_delete = function(req, res, next) {
  User.findByIdAndRemove(req.params.id, function(err, user){
    if(err){
      return next(err);
    }
    res.send('user Deleted' + ' ' + req.params.id);
  })
}
