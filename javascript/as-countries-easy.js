/*Map*/
var map = AmCharts.makeChart( "playdiv", {

				type: "map",
				theme: "light",
				
				dataProvider: {
					map: "worldHigh",
					zoomLevel: 2.3,
					zoomLongitude: 65,
					zoomLatitude: 38,
					areas: [ {
						title: "Afghanistan",
						id: "AF",
						color: "#1c1c1c",
						customData: "Kabul"
					  }, {
						title: "Armenia",
						id: "AM",
						color: "#1c1c1c",
						customData: "Yerevan"
					  }, {
						title: "Azerbaijan",
						id: "AZ",
						color: "#1c1c1c",
						customData: "Baku"
					  }, {
						title: "Bahrain",
						id: "BH",
						color: "#1c1c1c",
						customData: "Manama",
						outlineColor: "#1c1c1c"
					  }, {
						title: "Bangladesh",
						id: "BD",
						color: "#1c1c1c",
						customData: "Dhaka"
					  }, {
						title: "Bhutan",
						id: "BT",
						color: "#1c1c1c",
						customData: "Thimphu"
					  }, {
						title: "Brunei",
						id: "BN",
						color: "#1c1c1c",
						customData: "Bandar Seri Begawan",
						outlineColor: "#1c1c1c"
					  }, {
						title: "Cambodia",
						id: "KH",
						color: "#1c1c1c",
						customData: "Phnom Penh"
					  }, {
						title: "China",
						id: "CN",
						color: "#1c1c1c",
						customData: "Beijing"
					  }, {
						title: "India",
						id: "IN",
						color: "#1c1c1c",
						customData: "New Delhi"
					  }, {
						title: "Indonesia",
						id: "ID",
						color: "#1c1c1c",
						customData: "Jakarta"
					  }, {
						title: "Iran",
						id: "IR",
						color: "#1c1c1c",
						customData: "Tehran"
					  }, {
						title: "Iraq",
						id: "IQ",
						color: "#1c1c1c",
						customData: "Baghdad"
					  }, {
						title: "Israel",
						id: "IL",
						color: "#1c1c1c",
						customData: "Jerusalem"
					  }, {
						title: "Japan",
						id: "JP",
						color: "#1c1c1c",
						customData: "Tokyo"
					  }, {
						title: "Jordan",
						id: "JO",
						color: "#1c1c1c",
						customData: "Amman"
					  }, {
						title: "Kazakhstan",
						id: "KZ",
						color: "#1c1c1c",
						customData: "Astana"
					  }, {
						title: "Kuwait",
						id: "KW",
						color: "#1c1c1c",
						customData: "Kuwait City"
					  }, {
						title: "Kyrgyzstan",
						id: "KG",
						color: "#1c1c1c",
						customData: "Bishkek"
					  }, {
						title: "Laos",
						id: "LA",
						color: "#1c1c1c",
						customData: "Vientiane"
					  }, {
						title: "Lebanon",
						id: "LB",
						color: "#1c1c1c",
						customData: "Beirut"
					  }, {
						title: "Malaysia",
						id: "MY",
						color: "#1c1c1c",
						customData: "Kuala Lumpur"
					  }, {
						title: "Maldives",
						id: "MV",
						color: "#1c1c1c",
						customData: "Male",
						outlineColor: "#1c1c1c"
					  }, {
						title: "Mongolia",
						id: "MN",
						color: "#1c1c1c",
						customData: "Ulan Bator"
					  }, {
						title: "Myanmar",
						id: "MM",
						color: "#1c1c1c",
						customData: "Naypyidaw"
					  }, {
						title: "Nepal",
						id: "NP",
						color: "#1c1c1c",
						customData: "Kathmandu"
					  }, {
						title: "North Korea",
						id: "KP",
						color: "#1c1c1c",
						customData: "Pyongyang"
					  }, {
						title: "Oman",
						id: "OM",
						color: "#1c1c1c",
						customData: "Muscat"
					  }, {
						title: "Pakistan",
						id: "PK",
						color: "#1c1c1c",
						customData: "Islamabad"
					  }, {
						title: "Palestine",
						id: "PS",
						color: "#1c1c1c",
						customData: "Ramallah"
					  }, {
						title: "The Philippines",
						id: "PH",
						color: "#1c1c1c",
						customData: "Manila"
					  }, {
						title: "Qatar",
						id: "QA",
						color: "#1c1c1c",
						customData: "Doha",
						outlineColor: "#1c1c1c"
					  }, {
						title: "Russia",
						id: "RU",
						color: "#1c1c1c",
						customData: "Moscow"
					  }, {
						title: "Saudi Arabia",
						id: "SA",
						color: "#1c1c1c",
						customData: "Riyadh"
					  }, {
						title: "Singapore",
						id: "SG",
						color: "#1c1c1c",
						customData: "Singapore",
						outlineColor: "#1c1c1c"
					  }, {
						title: "South Korea",
						id: "KR",
						color: "#1c1c1c",
						customData: "Seoul"
					  }, {
						title: "Sri Lanka",
						id: "LK",
						color: "#1c1c1c",
						customData: "Colombo"
					  }, {
						title: "Syria",
						id: "SY",
						color: "#1c1c1c",
						customData: "Damascus"
					  }, {
						title: "Taiwan",
						id: "TW",
						color: "#1c1c1c",
						customData: "Taipei"
					  }, {
						title: "Tajikistan",
						id: "TJ",
						color: "#1c1c1c",
						customData: "Dushanbe"
					  }, {
						title: "Thailand",
						id: "TH",
						color: "#1c1c1c",
						customData: "Bangkok"
					  }, {
						title: "Timor-Leste",
						id: "TL",
						color: "#1c1c1c",
						customData: "Dili"
					  },
					  {
						title: "Turkey",
						id: "TR",
						color: "#1c1c1c",
						customData: "Ankara"
					  }, 
					  {
						title: "Turkmenistan",
						id: "TM",
						color: "#1c1c1c",
						customData: "Ashgabat"
					  }, 
					  {
						title: "United Arab Emirates",
						id: "AE",
						color: "#1c1c1c",
						customData: "Abu Dhabi"
					  }, 
					  {
						title: "Uzbekistan",
						id: "UZ",
						color: "#1c1c1c",
						customData: "Tashkent"
					  }, {
						title: "Vietnam",
						id: "VN",
						color: "#1c1c1c",
						customData: "Hanoi"
					  }, {
						title: "Yemen",
						id: "YE",
						color: "#1c1c1c",
						customData: "Sana'a"
					  }, {
						title: "Georgia",
						id: "GE",
						color: "#1c1c1c",
						customData: "Tbilisi"
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
var countries = ["af|Afghanistan|AS","bh|Bahrain|AS","bd|Bangladesh|AS","bt|Bhutan|AS","bn|Brunei|AS","kh|Cambodia|AS","tl|Timor-Leste|AS","in|India|AS","id|Indonesia|AS","ir|Iran|AS","iq|Iraq|AS","il|Israel|AS","jp|Japan|AS","jo|Jordan|AS","kz|Kazakhstan|AS","kw|Kuwait|AS","kg|Kyrgyzstan|AS","la|Laos|AS","lb|Lebanon|AS","my|Malaysia|AS","mv|Maldives|AS","mn|Mongolia|AS","mm|Myanmar|AS","np|Nepal|AS","kp|North Korea|AS","om|Oman|AS","pk|Pakistan|AS","ps|Palestine|AS","cn|China|AS","ph|Philippines|AS","qa|Qatar|AS","tw|Taiwan|AS","ru|Russia|AS","sa|Saudi Arabia|AS","sg|Singapore|AS","kr|South Korea|AS","lk|Sri Lanka|AS","sy|Syria|AS","tj|Tajikistan|AS","th|Thailand|AS","tr|Turkey|AS","tm|Turkmenistan|AS","ae|United Arab Emirates|AS","uz|Uzbekistan|AS","vn|Vietnam|AS","ye|Yemen|AS","am|Armenia|AS","ge|Georgia|AS","az|Azerbaijan|AS"];
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
		if(code=='BH')
			ctry.outlineThickness = 2;
		else if(code=='BN')
			ctry.outlineThickness = 2;
		else if(code=='QA')
			ctry.outlineThickness = 2;
		else if(code=='SG')
			ctry.outlineThickness = 2;
		else if(code=='MV')
			ctry.outlineThickness = 2;
		else if(code=='PS')
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