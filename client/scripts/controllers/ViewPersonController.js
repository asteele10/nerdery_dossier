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
            summary: "Way out west there was this fella... fella I wanna tell ya about. Fella by the name of Jeff Lebowski. At least that was the handle his loving parents gave him, but he never had much use for it himself. Mr. Lebowski, he called himself The Dude. Now, Dude - that's a name no one would self-apply where I come from. But then there was a lot about the Dude that didn't make a whole lot of sense.",
            demographics: "White/Caucasian",
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
            middleName: "The Dude",
            familyName:   "Lebowski",
            website: "www.google.com"
        },
        organizations: [{
            title:     "Director of Fun",
            name:      "New Belgium Brewery",
            startDate: "9-10-92",
            endDate:   "current",
            website:   "https://www.newbelgium.com/",
            isPrimary: true,
            current:   true
        },
            {
            title:     "Director of Anything But Fun",
            name:      "Sad Place, McSadsville",
            startDate: "12-4-88",
            endDate:   "9-10-92",
            website:   "https://myspace.com/sadville",
            isPrimary: false,
            current:   false
        }],
        affiliation: [
            {type: "Charity", name: "Doctor's Without Borders, USA", title: "Doctor", summary: "In 1988 he did stuff, lots of stuff, charity like."},
            {type: "NFP", name: "Financial Architects Empires", title: "Architect", summary: "Archetectual things, lots of them."},
            {type: "Group", name: "The National Speleological Society", title: "Spelunker-in-training", summary: "The national caving organization of the USA, with links to all affiliated regions, grottos (clubs), sections, and special interest groups."}
        ],
        meeting: [{
            date:  "9-22-15",
            time:  "1PM",
            note: "Meet with feeble public access show, and exploit them."
        }],
        education: [{
            institution: "St. Olaf College",
            startDate: "9-2-91",
            endDate: "5-4-95",
            type: "Fine Arts",
            degree: "Bachelor of Fine Arts",
            diplomaReceived: true
        }],
        relationships: [{
            name: "Bunny Lebowski",
            relationship: "Girlfriend",
            summary: "Uli doesn't care about anything. He's a Nihilist."
        }],
        newsCoverage: [{
            type: "Personal", summary: "The Movie", url: "http://www.imdb.com/title/tt0118715/news"},
            {type: "Company", summary: "Not on the rug, man", url: "http://www.arthurbarrydesigns.com"

        }],
        medical: {
            summary: "Overall health: 80%",
            complications: "Oh, the usual. Bowls. Drives around. The occasional acid flashback.",
            physicalCharacteristics: "White, overweight, bathrobe."
        }
        ///fakeperson end/////////////////////////////////////////////


    };

    //begin functions to allow xeditable functionality on current person object
    $scope.currentEmployer = {};
    $scope.addInterest = function() {
        var a = $scope.interestsForm;
        $scope.Person.bio.interests.push({ name: a, isNew: true })
    };
    $scope.addMeeting = function() {
        var b = $scope.meetDateForm;
        var c = $scope.meetTimeForm;
        var d = $scope.meetNoteForm;
        $scope.Person.meeting.push({ date: b, time: c, note: d, isNew: true })
    };
    $scope.addEducation = function() {
        var e = $scope.institutionForm;
        var f = $scope.startDateForm;
        var g = $scope.endDateForm;
        var h = $scope.typeForm;
        var i = $scope.degreeForm;
        $scope.Person.education.push({ institution: e, startDate: f, endDate: g, type: h, degree: i, isNew: true })
    };
    $scope.addRelationship = function() {
        var j = $scope.nameForm;
        var k = $scope.relationshipForm;
        var l = $scope.summaryForm;
        $scope.Person.relationships.push({ name: j, relationship: k, summary: l, isNew: true })
    };
    $scope.addArticle = function() {
        var m = $scope.articleTypeForm;
        var n = $scope.articleSummaryForm;
        var o = $scope.articleurlForm;
        $scope.Person.newsCoverage.push({ type: m, summary: n, url: o, isNew: true })
    };
    $scope.addAffiliation = function() {
        var p = $scope.affiliationTypeForm;
        var q = $scope.affiliationNameForm;
        var r = $scope.affiliationTitleForm;
        var s = $scope.affiliationSummaryForm;
        $scope.Person.affiliation.push({ type: p, name: q, title: r, summary: s, isNew: true })
    };
    $scope.addAddress = function() {
        var t = $scope.streetForm;
        var u = $scope.cityForm;
        var v = $scope.stateForm;
        var w = $scope.zipCodeForm;
        $scope.Person.contact.physicalAddresses.push({ street: t, city: u, state: v, zipCode: w, isNew: true })
    };
    $scope.addEmployer = function() {
        var x = $scope.empTitleForm;
        var y = $scope.empNameForm;
        var z = $scope.empStartDateForm;
        var aa = $scope.empEndDateForm;
        var bb = $scope.empWebsiteForm;
        $scope.Person.organizations.push({ title: x, name: y, startDate: z, endDate: aa, website: bb, isPrimary: false, current: false, isNew: true })
    };

    // start client side data manipulation

    var findCurrentEmployer = function(array){
        for (var i = 0; i < array.length; i++){
            if (array[i].current === true){
                $scope.currentEmployer = array[i];
            }
        }
    };
    findCurrentEmployer($scope.Person.organizations);

    ////start submit function, still needs to be routed, etc.
    $scope.submitProfileChanges = function(){
        //PUT server call, passing in the current/edited Person object
    };
}]);