/*Map*/
var map = AmCharts.makeChart( "playdiv", {

				type: "map",
				theme: "light",
				
				dataProvider: {
					map: "worldHigh",
					zoomLevel: 2.6,
					zoomLongitude: -100,
					zoomLatitude: 46,
					areas: [ {
						title: "United States of America",
						id: "US",
						color: "#1c1c1c",
						customData: "Washington D.C."
					  }, {
						title: "Canada",
						id: "CA",
						color: "#1c1c1c",
						customData: "Ottawa"
					  }, {
						title: "Mexico",
						id: "MX",
						color: "#1c1c1c",
						customData: "Mexico City"
					  }, {
						title: "Antigua and Barbuda",
						id: "AG",
						color: "#1c1c1c",
						customData: "St. John's",
						outlineColor: "#1c1c1c"
					  }, {
						title: "The Bahamas",
						id: "BS",
						color: "#1c1c1c",
						customData: "Nassau",
						outlineColor: "#1c1c1c"
					  }, {
						title: "Barbados",
						id: "BB",
						color: "#1c1c1c",
						customData: "Bridgetown",
						outlineColor: "#1c1c1c"
					  }, {
						title: "Belize",
						id: "BZ",
						color: "#1c1c1c",
						customData: "Belmopan"
					  }, {
						title: "Costa Rica",
						id: "CR",
						color: "#1c1c1c",
						customData: "San Jose"
					  }, {
						title: "Cuba",
						id: "CU",
						color: "#1c1c1c",
						customData: "Havana"
					  }, {
						title: "Dominica",
						id: "DM",
						color: "#1c1c1c",
						customData: "Roseau",
						outlineColor: "#1c1c1c"
					  }, {
						title: "Dominican Republic",
						id: "DO",
						color: "#1c1c1c",
						customData: "Santo Domingo"
					  }, {
						title: "El Salvador",
						id: "SV",
						color: "#1c1c1c",
						customData: "San Salvador"
					  }, {
						title: "Grenada",
						id: "GD",
						color: "#1c1c1c",
						customData: "St. George's",
						outlineColor: "#1c1c1c"
					  }, {
						title: "Guatemala",
						id: "GT",
						color: "#1c1c1c",
						customData: "Guatemala City"
					  }, {
						title: "Haiti",
						id: "HT",
						color: "#1c1c1c",
						customData: "Port-au-Prince"
					  }, {
						title: "Honduras",
						id: "HN",
						color: "#1c1c1c",
						customData: "Tegucigalpa"
					  }, {
						title: "Jamaica",
						id: "JM",
						color: "#1c1c1c",
						customData: "Kingston",
						outlineColor: "#1c1c1c"
					  }, {
						title: "Nicaragua",
						id: "NI",
						color: "#1c1c1c",
						customData: "Managua"
					  }, {
						title: "Panama",
						id: "PA",
						color: "#1c1c1c",
						customData: "Panama City"
					  }, {
						title: "Saint Kitts and Nevis",
						id: "KN",
						color: "#1c1c1c",
						customData: "Basseterre",
						outlineColor: "#1c1c1c"
					  }, {
						title: "Saint Lucia",
						id: "LC",
						color: "#1c1c1c",
						customData: "Castries",
						outlineColor: "#1c1c1c"
					  }, {
						title: "Saint Vincent and the Grenadines",
						id: "VC",
						color: "#1c1c1c",
						customData: "Kingstown",
						outlineColor: "#1c1c1c"
					  }, {
						title: "Trinidad and Tobago",
						id: "TT",
						color: "#1c1c1c",
						customData: "Port of Spain",
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
var countries = ["AG|Antigua and Barbuda|NA","BS|Bahamas|NA","BB|Barbados|NA","BZ|Belize|NA","CA|Canada|NA","CR|Costa Rica|NA","CU|Cuba|NA","DM|Dominica|NA","DO|Dominican Republic|NA","SV|El Salvador|NA","GD|Grenada|NA","GT|Guatemala|NA","HT|Haiti|NA","HN|Honduras|NA","JM|Jamaica|NA","MX|Mexico|NA","NI|Nicaragua|NA","PA|Panama|NA","KN|Saint Kitts and Nevis|NA","LC|Saint Lucia|NA","VC|Saint Vincent and the Grenadines|NA","TT|Trinidad and Tobago|NA","US|United States|NA"];
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
	var code = currentCountry[0];
	var name = currentCountry[1];
	
	//Special cases
	if(code=='US'){
		if(text.toUpperCase()===name.toUpperCase() || text.toUpperCase()==='USA' || text.toUpperCase()==='US'){
			$('.hard_ans').css('border', '3px solid #118C4E');
			ctry.color = "#118C4E";
			totalRight++;
		}
		else{ //Incorrect case
			$('.hard_ans').css('border', '3px solid#8C1E11');
			ctry.color = "#8C1E11";
		}
	}
	else if(code=='SV'){
		if(text.toUpperCase()===name.toUpperCase() || text.toUpperCase()==='SAINT VINCENT' || text.toUpperCase()==='ST VINCENT'){
			$('.hard_ans').css('border', '3px solid #118C4E');
			ctry.color = "#118C4E";
			totalRight++;
		}
		else{ //Incorrect case
			$('.hard_ans').css('border', '3px solid#8C1E11');
			ctry.color = "#8C1E11";		}
	}
	else if(code=='LC'){
		if(text.toUpperCase()===name.toUpperCase() || text.toUpperCase()==='ST LUCIA'){
			$('.hard_ans').css('border', '3px solid #118C4E');
			ctry.color = "#118C4E";
			totalRight++;
		}
		else{ //Incorrect case
			$('.hard_ans').css('border', '3px solid#8C1E11');
			ctry.color = "#8C1E11";		}
	}
	else if(code=='KN'){
		if(text.toUpperCase()===name.toUpperCase() || text.toUpperCase()==='ST KITTS AND NEVIS'){
			$('.hard_ans').css('border', '3px solid #118C4E');
			ctry.color = "#118C4E";
			totalRight++;
		}
		else{ //Incorrect case
			$('.hard_ans').css('border', '3px solid#8C1E11');
			ctry.color = "#8C1E11";		}
	}
	else{
		//Correct case
		if(text.toUpperCase()===name.toUpperCase()){
			$('.hard_ans').css('border', '3px solid #118C4E');
			ctry.color = "#118C4E";
			totalRight++;
		}
		else{ //Incorrect case
			$('.hard_ans').css('border', '3px solid#8C1E11');
			ctry.color = "#8C1E11";		
		}
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
		code = currentCountry[0];
		var name = currentCountry[1];
		
		$('#progress').html(counter+1 +'/' + countries.length);
		ctry = map.getObjectById(code);
		ctry.color = "#D8CD1E";
		ctry.outlineColor = "#D8CD1E";
		if(code=='AG')
			ctry.outlineThickness = 2;
		else if(code=='BS')
			ctry.outlineThickness = 2;
		else if(code=='BB')
			ctry.outlineThickness = 2;
		else if(code=='DM')
			ctry.outlineThickness = 2;
		else if(code=='GD')
			ctry.outlineThickness = 2;
		else if(code=='KN')
			ctry.outlineThickness = 2;
		else if(code=='LC')
			ctry.outlineThickness = 2;
		else if(code=='VC')
			ctry.outlineThickness = 2;
		else if(code=='TT')
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