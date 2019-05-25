var friends = require("../data/friend.js");

module.exports = function(app) {
  app.get("/api/friends", function(req, res) {
    res.json(friends);
  });

  app.post("/api/friends", function(req, res) {
    var user = req.body;
    console.log(req.body.scores);
    for(var i = 0; i < user.scores.length; i++) {
      user.scores[i] = parseInt(user.scores[i]);
    };

    var matchIndex = 0;
    var lowDiff = 40;

    for(var i = 0; i < friends.length; i++) {
      var totalOffset = 0;
      for(var x = 0; x < friends[i].scores.length; x++) {
        var offset = Math.abs(user.scores[x] - friends[i].scores[x]);
        totalOffset += offset;
      }

      if(totalOffset < lowDiff) {
        matchIndex = i;
        lowDiff = totalOffset;
      }
    }
    // adds user to friend array
    friends.push(user);

    // sends back to browser the best friend match
    res.json(friends[matchIndex]);
  });
};
