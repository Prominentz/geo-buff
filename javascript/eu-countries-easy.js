/*Map*/
var map = AmCharts.makeChart( "playdiv", {

				type: "map",
				theme: "light",
				
				dataProvider: {
					map: "worldHigh",
					zoomLevel: 4.4,
					zoomLongitude: -5,
					zoomLatitude: 53,
					areas: [ {
						title: "Albania",
						id: "AL",
						color: "#1c1c1c",
						customData: "Tirana"
					  }, {
						title: "Andorra",
						id: "AD",
						color: "#1c1c1c",
						customData: "Andorra la Vella"
					  }, {
						title: "Austria",
						id: "AT",
						color: "#1c1c1c",
						customData: "Vienna"
					  }, {
						title: "Belarus",
						id: "BY",
						color: "#1c1c1c",
						customData: "Minsk"
					  }, {
						title: "Belgium",
						id: "BE",
						color: "#1c1c1c",
						customData: "Brussels"
					  }, {
						title: "Bosnia and Herzegovina",
						id: "BA",
						color: "#1c1c1c",
						customData: "Sarajevo"
					  }, {
						title: "Bulgaria",
						id: "BG",
						color: "#1c1c1c",
						customData: "Sofia"
					  }, {
						title: "Croatia",
						id: "HR",
						color: "#1c1c1c",
						customData: "Zagreb"
					  }, {
						title: "Cyprus",
						id: "CY",
						color: "#1c1c1c",
						customData: "Nicosia"
					  }, {
						title: "Czech Republic",
						id: "CZ",
						color: "#1c1c1c",
						customData: "Prague"
					  }, {
						title: "Denmark",
						id: "DK",
						color: "#1c1c1c",
						customData: "Copenhagen"
					  }, {
						title: "Estonia",
						id: "EE",
						color: "#1c1c1c",
						customData: "Tallinn"
					  }, {
						title: "Finland",
						id: "FI",
						color: "#1c1c1c",
						customData: "Helsinki"
					  }, {
						title: "France",
						id: "FR",
						color: "#1c1c1c",
						customData: "Paris"
					  }, {
						title: "Georgia",
						id: "GE",
						color: "#1c1c1c",
						customData: "Tbilisi"
					  }, {
						title: "Germany",
						id: "DE",
						color: "#1c1c1c",
						customData: "Berlin"
					  }, {
						title: "Greece",
						id: "GR",
						color: "#1c1c1c",
						customData: "Athens"
					  }, {
						title: "Hungary",
						id: "HU",
						color: "#1c1c1c",
						customData: "Budapest"
					  }, {
						title: "Iceland",
						id: "IS",
						color: "#1c1c1c",
						customData: "Reykjavik"
					  }, {
						title: "Ireland",
						id: "IE",
						color: "#1c1c1c",
						customData: "Dublin"
					  }, {
						title: "Italy",
						id: "IT",
						color: "#1c1c1c",
						customData: "Rome"
					  }, {
						title: "Latvia",
						id: "LV",
						color: "#1c1c1c",
						customData: "Riga"
					  }, {
						title: "Liechtenstein",
						id: "LI",
						color: "#1c1c1c",
						customData: "Vaduz"
					  }, {
						title: "Lithuania",
						id: "LT",
						color: "#1c1c1c",
						customData: "Vilnius"
					  }, {
						title: "Luxembourg",
						id: "LU",
						color: "#1c1c1c",
						customData: "Luxembourg City"
					  }, {
						title: "Macedonia",
						id: "MK",
						color: "#1c1c1c",
						customData: "Skopje"
					  }, {
						title: "Malta",
						id: "MT",
						color: "#1c1c1c",
						customData: "Valletta"
					  }, {
						title: "Moldova",
						id: "MD",
						color: "#1c1c1c",
						customData: "Chisinau"
					  }, {
						title: "Monaco",
						id: "MC",
						color: "#1c1c1c",
						customData: "Monaco"
					  }, {
						title: "Montenegro",
						id: "ME",
						color: "#1c1c1c",
						customData: "Podgorica"
					  }, {
						title: "The Netherlands",
						id: "NL",
						color: "#1c1c1c",
						customData: "Amsterdam"
					  }, {
						title: "Norway",
						id: "NO",
						color: "#1c1c1c",
						customData: "Oslo"
					  }, {
						title: "Poland",
						id: "PL",
						color: "#1c1c1c",
						customData: "Krakow"
					  }, {
						title: "Portugal",
						id: "PT",
						color: "#1c1c1c",
						customData: "Lisbon"
					  }, {
						title: "Romania",
						id: "RO",
						color: "#1c1c1c",
						customData: "Bucharest"
					  }, {
						title: "San Marino",
						id: "SM",
						color: "#1c1c1c",
						customData: "San Marino"
					  }, {
						title: "Serbia",
						id: "RS",
						color: "#1c1c1c",
						customData: "Belgrade"
					  }, {
						title: "Slovakia",
						id: "SK",
						color: "#1c1c1c",
						customData: "Bratislava"
					  }, {
						title: "Slovenia",
						id: "SI",
						color: "#1c1c1c",
						customData: "Ljubljana"
					  }, {
						title: "Spain",
						id: "ES",
						color: "#1c1c1c",
						customData: "Madrid"
					  }, 
					  {
						title: "Sweden",
						id: "SE",
						color: "#1c1c1c",
						customData: "Stockholm"
					  }, 
					  {
						title: "Switzerland",
						id: "CH",
						color: "#1c1c1c",
						customData: "Bern"
					  }, 
					  {
						title: "Ukraine",
						id: "UA",
						color: "#1c1c1c",
						customData: "Kiev"
					  }, 
					  {
						title: "United Kingdom",
						id: "GB",
						color: "#1c1c1c",
						customData: "London"
					  }, 
					  {
						title: "Vatican City",
						id: "VA",
						color: "#1c1c1c",
						customData: "Vatican City"
					  }, {
						title: "Kosovo",
						id: "XK",
						color: "#1c1c1c",
						customData: "Pristina"
					  }, {
						title: "Russia",
						id: "RU",
						color: "#1c1c1c",
						customData: "Moscow"
					  }, {
						title: "Turkey",
						id: "TR",
						color: "#1c1c1c",
						customData: "Ankara"
					  }, {
						title: "Azerbaijan",
						id: "AZ",
						color: "#1c1c1c",
						customData: "Baku"
					  }, {
						title: "Armenia",
						id: "AM",
						color: "#1c1c1c",
						customData: "Yerevan"
					  }
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
var countries = ["al|Albania|EU","ad|Andorra|EU","am|Armenia|EU","at|Austria|EU","az|Azerbaijan|EU","by|Belarus|EU","be|Belgium|EU","ba|Bosnia and Herzegovina|EU","bg|Bulgaria|EU","hr|Croatia|EU","cy|Cyprus|EU","cz|Czech Republic|EU","dk|Denmark|EU","ee|Estonia|EU","fi|Finland|EU","fr|France|EU","ge|Georgia|EU","de|Germany|EU","gr|Greece|EU","hu|Hungary|EU","is|Iceland|EU","ie|Ireland|EU","it|Italy|EU","lv|Latvia|EU","li|Liechtenstein|EU","lt|Lithuania|EU","lu|Luxembourg|EU","mk|Macedonia|EU","mt|Malta|EU","md|Moldova|EU","mc|Monaco|EU","me|Montenegro|EU","nl|Netherlands|EU","no|Norway|EU","pl|Poland|EU","pt|Portugal|EU","ro|Romania|EU","sm|San Marino|EU","rs|Serbia|EU","sk|Slovakia|EU","si|Slovenia|EU","es|Spain|EU","se|Sweden|EU","ch|Switzerland|EU","ua|Ukraine|EU","gb|United Kingdom|EU","va|Vatican City|EU","ru|Russia|EU","tr|Turkey|EU","xk|Kosovo|EU"];
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
		code = currentCountry[0].toUpperCase();
		var name = currentCountry[1];
		
		$('#progress').html(counter+1 +'/' + countries.length);
		ctry = map.getObjectById(code);
		ctry.color = "#D8CD1E";
		ctry.outlineColor = "#D8CD1E";
		if(code=='AD')
			ctry.outlineThickness = 2;
		else if(code=='LI')
			ctry.outlineThickness = 2;
		else if(code=='MT')
			ctry.outlineThickness = 2;
		else if(code=='MC')
			ctry.outlineThickness = 2;
		else if(code=='SM')
			ctry.outlineThickness = 2;
		else if(code=='VA')
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