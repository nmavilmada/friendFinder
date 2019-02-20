// ===============================================================================
// LOAD DATA
// We are linking our routes to a series of "data" sources.
// These data sources hold arrays of information for "friends.js" 
// ===============================================================================

var friends = require("../data/friends");

// ===============================================================================
// ROUTING
// ===============================================================================

module.exports = function (app) {

    // API GET Requests
    // Below code handles when users "visit" a page.
    app.get("/api/friends", function (req, res) {
        res.json(friends);
    });


    // API POST - to handle the information sent by the user,and determine the best match
    app.post("/api/friends", function (req, res) {


        // Parsing the data sent by the user
        // userData will hold the javascript object accessible through req.body 
        var userData = req.body;
   
        // scoreDifference will hold the difference in scores between user and 
        // friends  in the data base. 
        var scoreDifference = 0;

        //loop through the friends data array of objects to get each friends scores
        for (var i = 0; i < friends.length; i++) {
            // console.log(friends[i].name);
            scoreDifference = 0;

            //loop through that friends score and the users score and calculate the absolute 
            //difference between the two and push that to the total difference variable set above
            var friendScore = 0;
            for (var j = 0; j < 10; j++) {
                // We calculate the difference between the scores and sum them into the scoreDifference
                friendScore = friends[i].scores[j];
                
                console.log("friendsScore",friendScore)
                scoreDifference = Math.abs(parseInt(userData.scores[j]) - parseInt(friendScore));
                // create an  object to store information of the best match.
                var bestMatch = {
                    name: "",
                    photo: "",
                    friendDifference: 100
                };
                // If the sum of differences is less then the differences of the current "best match"
                if (scoreDifference <= bestMatch.friendDifference) {

                    // Reset the bestMatch to be the new friend. 
                    bestMatch.name = friends[i].name;
                    bestMatch.photo = friends[i].photo;
                    bestMatch.friendDifference = scoreDifference;
                }
            }
        }

        // The push method use to save user's data to the database
        friends.push(userData);

        //The res.json method will return a JSON data with the user's match which was looped through frieds data array. 
        res.json(bestMatch);
    });
};





