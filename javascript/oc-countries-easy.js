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