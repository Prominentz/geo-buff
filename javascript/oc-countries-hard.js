/*Map*/
var map = AmCharts.makeChart( "playdiv", {

				type: "map",
				theme: "light",
				
				dataProvider: {
					map: "worldHigh",
					zoomLevel: 3.5,
					zoomLongitude: 130,
					zoomLatitude: -20,
					areas: [ {
						title: "Australia",
						id: "AU",
						color: "#1c1c1c",
						customData: "Canberra"
					  }, {
						title: "Fiji",
						id: "FJ",
						color: "#1c1c1c",
						customData: "Suva",
						outlineColor: "#1c1c1c"
					  }, {
						title: "Kiribati",
						id: "KI",
						color: "#1c1c1c",
						customData: "South Tarawa",
						outlineColor: "#1c1c1c"
					  }, {
						title: "Marshall Islands",
						id: "MH",
						color: "#1c1c1c",
						customData: "Majuro",
						outlineColor: "#1c1c1c"
					  }, {
						title: "Micronesia",
						id: "FM",
						color: "#1c1c1c",
						customData: "Palikir",
						outlineColor: "#1c1c1c"
					  }, {
						title: "Nauru",
						id: "NR",
						color: "#1c1c1c",
						customData: "Yaren",
						outlineColor: "#1c1c1c"
					  }, {
						title: "New Zealand",
						id: "NZ",
						color: "#1c1c1c",
						customData: "Wellington"
					  }, {
						title: "Palau",
						id: "PW",
						color: "#1c1c1c",
						customData: "Ngerulmud",
						outlineColor: "#1c1c1c"
					  }, {
						title: "Papua New Guinea",
						id: "PG",
						color: "#1c1c1c",
						customData: "Port Moresby"
					  }, {
						title: "Samoa",
						id: "WS",
						color: "#1c1c1c",
						customData: "Apia",
						outlineColor: "#1c1c1c"
					  }, {
						title: "Solomon Islands",
						id: "SB",
						color: "#1c1c1c",
						customData: "Honiara",
						outlineColor: "#1c1c1c"
					  }, {
						title: "Timor-Leste",
						id: "TL",
						color: "#1c1c1c",
						customData: "Dili",
						outlineColor: "#1c1c1c"
					  }, {
						title: "Tonga",
						id: "TO",
						color: "#1c1c1c",
						customData: "Nuku'alofa",
						outlineColor: "#1c1c1c"
					  }, {
						title: "Tuvalu",
						id: "TV",
						color: "#1c1c1c",
						customData: "Funafuti",
						outlineColor: "#1c1c1c"
					  }, {
						title: "Vanuatu",
						id: "VU",
						color: "#1c1c1c",
						customData: "Port Vila",
						outlineColor: "#1c1c1c"
					  }, 
					]
				  },

				  areasSettings: {
					outlineColor: "#1c1c1c",
					rollOverOutlineColor: "#1c1c1c",
					alpha: 0.8,
					unlistedAreasAlpha: 0.5,
					unlistedAreasColor: "#1c1c1c",
					balloonText: ""
				  }
				} );
				map.preventDragOut= true;
				map.mouseWheelZoomEnabled = true;
				
/*Variables*/
var countries = ["au|Australia|OC","fj|Fiji|OC","ki|Kiribati|OC","mh|Marshall Islands|OC","fm|Micronesia|OC","nr|Nauru|OC","nz|New Zealand|OC","pw|Palau|OC","pg|Papua New Guinea|OC","ws|Samoa|OC","sb|Solomon Islands|OC","to|Tonga|OC","tv|Tuvalu|OC","vu|Vanuatu|OC"];
var userAnswers = [], /*What the user chooses*/
	answerKey = [], /*Built as the randomly chosen flag is picked*/
	options = []; /*The four options show on the buttons*/
var counter = 0,
	totalRight = 0,
	code = "";
var corrAns;
var ctry;

/*Check to see if user is correct*/
function checkAnswers() { 
	var resultArr = [],  
		flag = false; 
	for (i=0; i<answers.length; i++) { 
		if (answers[i] == userAnswers[i]) { 
			flag = true; 
		} 
		else { 
			flag = false; 
		} 
		resultArr.push(flag); 
	} 
	return resultArr; 
}

/*Used to shuffle the country list*/
function shuffle(array) {
	var currentIndex = array.length, temporaryValue, randomIndex ;

	// While there remain elements to shuffle...
	while (0 !== currentIndex) {

	// Pick a remaining element...
	randomIndex = Math.floor(Math.random() * currentIndex);
	currentIndex -= 1;

	// And swap it with the current element.
	temporaryValue = array[currentIndex];
	array[currentIndex] = array[randomIndex];
	array[randomIndex] = temporaryValue;
  }

return array;
}

$(document).keypress(function(e) {
    if(e.which == 13) {
		checkAnswer($('.hard_ans').val());
		if(counter == countries.length){
			$('.game_div_2').fadeOut(500, function(){
				$(this).next().fadeIn(500);
				getResults();
			});
		}
    }
});

function checkAnswer(text){
	var str = countries[counter];
	var currentCountry = str.split('|');
	var code = currentCountry[0].toUpperCase();
	var name = currentCountry[1];
	
	//Correct case
	if(text.toUpperCase()===name.toUpperCase()){
		$('.hard_ans').css('border', '3px solid #118C4E');
		ctry.color = "#118C4E";
		totalRight++;
	}
	else{ //Incorrect case
		$('.hard_ans').css('border', '3px solid #8C1E11');
		ctry.color = "#8C1E11";		
	}
	counter++;
	setTimeout(function(){
		$('.hard_ans').css('border', '2px solid #1c1c1c');
		$('.hard_ans').val('');
		ctry.balloonText= "[[title]] - [[customData]]";
		ctry.outlineColor = "#1c1c1c";
		ctry.outlineThickness = .5;
		map.validateData();
		displayCountry(counter);
	}, 750)
}

function getResults(){
	//Overall stats
	document.getElementById("overall-stats").value = totalRight/counter;
	$('#numCorrect').html(totalRight + '/' + countries.length);
}

function displayCountry(num){
	var str = countries[num];
		var currentCountry = str.split('|');
		code = currentCountry[0].toUpperCase();
		var name = currentCountry[1];
		
		$('#progress').html(counter+1 +'/' + countries.length);
		ctry = map.getObjectById(code);
		ctry.color = "#D8CD1E";
		ctry.outlineColor = "#D8CD1E";
		if(code=='FJ')
			ctry.outlineThickness = 2;
		else if(code=='KI')
			ctry.outlineThickness = 2;
		else if(code=='MH')
			ctry.outlineThickness = 2;
		else if(code=='FM')
			ctry.outlineThickness = 2;
		else if(code=='NR')
			ctry.outlineThickness = 2;
		else if(code=='PW')
			ctry.outlineThickness = 2;
		else if(code=='WS')
			ctry.outlineThickness = 2;
		else if(code=='SB')
			ctry.outlineThickness = 2;
		else if(code=='TO')
			ctry.outlineThickness = 2;
		else if(code=='TV')
			ctry.outlineThickness = 2;
		else if(code=='VU')
			ctry.outlineThickness = 2;
		map.validateData();
}

/*From opening page an on*/
/*Initial fade if start button is chosen*/
shuffle(countries);
$(function(){
	$('.start').click(function(){ 
		$(this).parents('.game_div').fadeOut(500, function(){ 
			$(this).next().fadeIn(500); 
		}); 
		displayCountry(counter);
	});
})