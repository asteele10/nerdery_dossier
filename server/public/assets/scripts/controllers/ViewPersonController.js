//This is the name of our controller for changing the view when user clicks on a person and getting data for person
app.controller("ViewPersonController", ['$scope', '$http', '$location', function($scope, $http, $location){
    console.log("This is the View Person Controller Working");


    $scope.changeRoute = function (/*"name of routeChange parameter on html view"*/) {
        $location.path(/*"name of routeChange parameter on html view"*/);
    };

    //this gets the data from the person profile in database

    $scope.submit=function(){
        $http.get("/").then(function(response) {
            if (response.status !== 200) {
                throw new Error("Failed to load a person's info from DB");
            }
        });
    };


    //Add logic for viewing and editing the person object//
    //**************NEED CODE HERE********************************
    $scope.Person = {
    ///fakeperson start///////////////////////////////////////////
        bio: {
            photo: {url:"http://www.ew.com/sites/default/files/i/imgs/080425/Stoner-Movies/Big-Lebowski-Dude_nl.jpg"},
            interests: [{name:"Bowling"},
                        {name: "White Russians"}],
            summary: "Way out west there was this fella... fella I wanna tell ya about. Fella by the name of Jeff Lebowski. At least that was the handle his loving parents gave him, but he never had much use for it himself. Mr. Lebowski, he called himself The Dude. Now, Dude - that's a name no one would self-apply where I come from. But then there was a lot about the Dude that didn't make a whole lot of sense.",            demographics: "White/Caucasian",
            age: 42,
            birthday: "9-15-73",
            gender: "Male"
        },
        contact: {
            physicalAddresses: [{street:"123 Fake St.", city:"Los Angelas", state:"California", zipCode:90016, current:true}],
            socialMedia: {
                twitter: {handle: "@gleemobile", url: "https://twitter.com/gleemobile"},
                linkedIn: {id: "gleemob", url: "https://www.linkedin.com/in/gleemobile"},
                facebook: {id: "Gleemobile", url: "https://www.facebook.com/GleeMobile"},
                instagram: {id: "GMob", url: "https://instagram.com/explore/tags/awkward/"}
            },
            emailAddress: "newbelgium@gmail.com",
            givenName:    "Jeffrey",
            middleNames: ["The Dude"],
            familyName:   "Lebowski",
            fullName:     "Jeffrey 'The Dude' Lebowski",
            websites:    [{name:"New Belgium Brewery", url:"https://www.newbelgium.com/"}]
        },
        organizations: [{
            title:     "Director of Fun",
            name:      "New Belgium Brewery",
            startDate: "9-10-92",
            endDate:   "current",
            isPrimary: true,
            current:   true
        }],
        affiliation: {
            charity: {name: "Doctor's Without Borders, USA", title: "Doctor", summary: "In 1988 he did stuff, lots of stuff, charity like."},
            NFP: {name: "Financial Architects Empires", title: "Architect", summary: "Archetectual things, lots of them."},
            group: {name: "The National Speleological Society", title: "Spelunker-in-training", summary: "The national caving organization of the USA, with links to all affiliated regions, grottos (clubs), sections, and special interest groups."}
        },
        meeting: {
            date:  "9-22-15",
            time:  "1PM",
            notes: "Meet with feeble public access show, and exploit them."
        },
        education: {
            institution: "St. Olaf College",
            startDate: "9-2-91",
            endDate: "5-4-95",
            type: "Fine Arts",
            degree: "Bachelor of Fine Arts",
            diplomaReceived: true
        },
        relationships: [{
            name: "Bunny Lebowski",
            familyMember: false,
            grandParent: false,
            parent: false,
            spouse: true,
            child: false,
            summary: "Uli doesn't care about anything. He's a Nihilist."
        }],
        newsCoverage: {
            personal: {summary: "The Movie", url: "http://www.imdb.com/title/tt0118715/news"},
            company: {summary: "Not on the rug, man", url: "http://www.arthurbarrydesigns.com"}
        },
        medical: {
            summary: "Overall health: 80%",
            complications: "Oh, the usual. Bowls. Drives around. The occasional acid flashback.",
            physicalCharacteristics: "White, overweight, bathrobe."
        }
        ///fakeperson end/////////////////////////////////////////////


    };


    //call function
    $scope.submit


}]);
