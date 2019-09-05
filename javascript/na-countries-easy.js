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

function getBtnCountries(answer,x){
	var arr = [];
	for(i=0;i<countries.length;i++){
		arr.push(i);
	}
	shuffle(arr);
	for(i=0;i<arr.length;i++){
		if(arr[i]==x)
			arr.splice(i,1);
	}
	
	var a1 = countries[arr[0]];
	var b1 = a1.split('|');
	var c1 = b1[1];
	var a2 = countries[arr[1]];
	var b2 = a2.split('|');
	var c2 = b2[1];
	var a3 = countries[arr[2]];
	var b3 = a3.split('|');
	var c3 = b3[1];
	
	options[0] = answer;
	options[1] = c1;
	options[2] = c2;
	options[3] = c3;
}

function getCorrectAnswer(ans, opt){
	var correct = -1;
	for(i=0; i<opt.length;i++){
		if(opt[i] == ans)
			correct = i;
	}
	
	if(correct == -1)
		alert('something went wrong');
	else if(correct == 0 )
		return 'a';
	else if(correct == 1)
		return 'b';
	else if(correct == 2)
		return 'c';
	else if(correct == 3)
		return 'd';
}

function getResults(){
	//Overall stats
	document.getElementById("overall-stats").value = totalRight/counter;
	$('#numCorrect').html(totalRight + '/' + countries.length);
}

function displayCountry(num){
	if(num==countries.length){
		$('.game_div_2').fadeOut(500, function(){
				$(this).next().fadeIn(500);
				getResults();
			});
	}
	else{
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
			
		getBtnCountries(name,num);
		shuffle(options);
		corrAns = getCorrectAnswer(name,options);
		answerKey.push(corrAns);
		$('#a').html(options[0]);
		$('#b').html(options[1]);
		$('#c').html(options[2]);
		$('#d').html(options[3]);
	}
}

function aClick(){
	userAnswers.push('a');
	if(corrAns == 'a'){
		$('#a').css('background-color', '#118C4E');
		ctry.color = "#118C4E";
		ctry.outlineColor = "#118C4E";
		totalRight++;
	}
	else{
		$('#a').css('background-color', '#8C1E11');
		ctry.color = "#8C1E11";
		ctry.outlineColor = "#8C1E11";
	}
	counter++;
	setTimeout(function(){
		$('#a').css('background-color', '#253B59');
		ctry.balloonText= "[[title]] - [[customData]]";
		ctry.outlineThickness = .5;
		map.validateData();
		displayCountry(counter);
	}, 750)
}
function bClick(){
	userAnswers.push('b');
	if(corrAns == 'b'){
		$('#b').css('background-color', '#118C4E');
		ctry.color = "#118C4E";
		ctry.outlineColor = "#118C4E";
		totalRight++;
	}
	else{
		$('#b').css('background-color', '#8C1E11');
		ctry.color = "#8C1E11";
		ctry.outlineColor = "#8C1E11";
	}
	counter++;
	setTimeout(function(){
		$('#b').css('background-color', '#253B59');
		ctry.balloonText= "[[title]] - [[customData]]";
		ctry.outlineThickness = .5;
		map.validateData();
		displayCountry(counter);
	}, 750)
}
function cClick(){
	userAnswers.push('c');
	if(corrAns == 'c'){
		$('#c').css('background-color', '#118C4E');
		ctry.color = "#118C4E";
		ctry.outlineColor = "#118C4E";
		totalRight++;
	}
	else{
		$('#c').css('background-color', '#8C1E11');
		ctry.color = "#8C1E11";
		ctry.outlineColor = "#8C1E11";
	}
	counter++;
	setTimeout(function(){
		$('#c').css('background-color', '#253B59');
		ctry.balloonText= "[[title]] - [[customData]]";
		ctry.outlineThickness = .5;
		map.validateData();
		displayCountry(counter);
	}, 750)
}
function dClick(){
	userAnswers.push('d');
	if(corrAns == 'd'){
		$('#d').css('background-color', '#118C4E');
		ctry.color = "#118C4E";
		ctry.outlineColor = "#118C4E";
		totalRight++;
	}
	else{
		$('#d').css('background-color', '#8C1E11');
		ctry.color = "#8C1E11";
		ctry.outlineColor = "#8C1E11";
	}
	counter++;
	setTimeout(function(){
		$('#d').css('background-color', '#253B59');
		ctry.balloonText= "[[title]] - [[customData]]";
		ctry.outlineThickness = .5;
		map.validateData();
		displayCountry(counter);
	}, 750)
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