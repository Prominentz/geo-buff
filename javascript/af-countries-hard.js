/*Map*/
var map = AmCharts.makeChart( "playdiv", {

				type: "map",
				theme: "light",
				
				dataProvider: {
					map: "worldHigh",
					zoomLevel: 3,
					zoomLongitude: 0,
					zoomLatitude: 2,
					areas: [ {
						title: "Algeria",
						id: "DZ",
						color: "#1c1c1c",
						customData: "Algiers"
					  }, {
						title: "Angola",
						id: "AO",
						color: "#1c1c1c",
						customData: "Luanda"
					  }, {
						title: "Benin",
						id: "BJ",
						color: "#1c1c1c",
						customData: "Porto-Novo"
					  }, {
						title: "Botswana",
						id: "BW",
						color: "#1c1c1c",
						customData: "Gaborone"
					  }, {
						title: "Burkina Faso",
						id: "BF",
						color: "#1c1c1c",
						customData: "Ouagadougou"
					  }, {
						title: "Burundi",
						id: "BI",
						color: "#1c1c1c",
						customData: "Bujumbura"
					  }, {
						title: "Cape Verde",
						id: "CV",
						color: "#1c1c1c",
						customData: "Praia",
						outlineColor: "#1c1c1c"
					  }, {
						title: "Cameroon",
						id: "CM",
						color: "#1c1c1c",
						customData: "Yaounde"
					  }, {
						title: "Central African Republic",
						id: "CF",
						color: "#1c1c1c",
						customData: "Bangui"
					  }, {
						title: "Democratic Republic of the Congo",
						id: "CD",
						color: "#1c1c1c",
						customData: "Kinshasa"
					  }, {
						title: "Chad",
						id: "TD",
						color: "#1c1c1c",
						customData: "N'Djamena"
					  }, {
						title: "Comoros",
						id: "KM",
						color: "#1c1c1c",
						customData: "Moroni",
						outlineColor: "#1c1c1c"
					  }, {
						title: "Republic of the Congo",
						id: "CG",
						color: "#1c1c1c",
						customData: "Brazzaville"
					  }, {
						title: "Ivory Coast",
						id: "CI",
						color: "#1c1c1c",
						customData: "Yamoussoukro"
					  }, {
						title: "Djibouti",
						id: "DJ",
						color: "#1c1c1c",
						customData: "Djibouti"
					  }, {
						title: "Egypt",
						id: "EG",
						color: "#1c1c1c",
						customData: "Cairo"
					  }, {
						title: "Equatorial Guinea",
						id: "GQ",
						color: "#1c1c1c",
						customData: "Malabo"
					  }, {
						title: "Eritrea",
						id: "ER",
						color: "#1c1c1c",
						customData: "Asmara"
					  }, {
						title: "Ethiopia",
						id: "ET",
						color: "#1c1c1c",
						customData: "Addis Ababa"
					  }, {
						title: "Gabon",
						id: "GA",
						color: "#1c1c1c",
						customData: "Libreville"
					  }, {
						title: "Gambia",
						id: "GM",
						color: "#1c1c1c",
						customData: "Banjul"
					  }, {
						title: "Ghana",
						id: "GH",
						color: "#1c1c1c",
						customData: "Accra"
					  }, {
						title: "Guinea",
						id: "GN",
						color: "#1c1c1c",
						customData: "Conakry"
					  }, {
						title: "Guinea-Bissau",
						id: "GW",
						color: "#1c1c1c",
						customData: "Bissau"
					  }, {
						title: "Kenya",
						id: "KE",
						color: "#1c1c1c",
						customData: "Nairobi"
					  }, {
						title: "Lesotho",
						id: "LS",
						color: "#1c1c1c",
						customData: "Maseru"
					  }, {
						title: "Liberia",
						id: "LR",
						color: "#1c1c1c",
						customData: "Monrovia"
					  }, {
						title: "Libya",
						id: "LY",
						color: "#1c1c1c",
						customData: "Tripoli"
					  }, {
						title: "Madagascar",
						id: "MG",
						color: "#1c1c1c",
						customData: "Antananarivo"
					  }, {
						title: "Malawi",
						id: "MW",
						color: "#1c1c1c",
						customData: "Lilongwe"
					  }, {
						title: "Mali",
						id: "ML",
						color: "#1c1c1c",
						customData: "Bamako"
					  }, {
						title: "Mauritania",
						id: "MR",
						color: "#1c1c1c",
						customData: "Nouakchott"
					  }, {
						title: "Mauritius",
						id: "MU",
						color: "#1c1c1c",
						customData: "Port Louis",
						outlineColor: "#1c1c1c"
					  }, {
						title: "Morocco",
						id: "MA",
						color: "#1c1c1c",
						customData: "Rabat"
					  }, {
						title: "Mozambique",
						id: "MZ",
						color: "#1c1c1c",
						customData: "Maputo"
					  }, {
						title: "Namibia",
						id: "NA",
						color: "#1c1c1c",
						customData: "Windhoek"
					  }, {
						title: "Niger",
						id: "NE",
						color: "#1c1c1c",
						customData: "Niamey"
					  }, {
						title: "Nigeria",
						id: "NG",
						color: "#1c1c1c",
						customData: "Abuja"
					  }, {
						title: "Rwanda",
						id: "RW",
						color: "#1c1c1c",
						customData: "Kigali"
					  }, {
						title: "Sao Tome and Principe",
						id: "ST",
						color: "#1c1c1c",
						customData: "Sao Tome",
						outlineColor: "#1c1c1c"
					  }, 
					  {
						title: "Senegal",
						id: "SN",
						color: "#1c1c1c",
						customData: "Dakar"
					  }, 
					  {
						title: "Seychelles",
						id: "SC",
						color: "#1c1c1c",
						customData: "Victoria",
						outlineColor: "#1c1c1c"
					  }, 
					  {
						title: "Sierra Leone",
						id: "SL",
						color: "#1c1c1c",
						customData: "Freetown"
					  }, 
					  {
						title: "Somalia",
						id: "SO",
						color: "#1c1c1c",
						customData: "Mogadishu"
					  }, 
					  {
						title: "South Africa",
						id: "ZA",
						color: "#1c1c1c",
						customData: "Cape Town"
					  }, {
						title: "South Sudan",
						id: "SS",
						color: "#1c1c1c",
						customData: "Juba"
					  }, {
						title: "Sudan",
						id: "SD",
						color: "#1c1c1c",
						customData: "Khartoum"
					  }, {
						title: "Swaziland",
						id: "SZ",
						color: "#1c1c1c",
						customData: "Mbabane"
					  }, {
						title: "Tanzania",
						id: "TZ",
						color: "#1c1c1c",
						customData: "Dodoma"
					  }, {
						title: "Togo",
						id: "TG",
						color: "#1c1c1c",
						customData: "Lome"
					  }, {
						title: "Tunisia",
						id: "TN",
						color: "#1c1c1c",
						customData: "Tunis"
					  }, {
						title: "Uganda",
						id: "UG",
						color: "#1c1c1c",
						customData: "Kampala"
					  }, {
						title: "Zambia",
						id: "ZM",
						color: "#1c1c1c",
						customData: "Lusaka"
					  }, {
						title: "Zimbabwe",
						id: "ZW",
						color: "#1c1c1c",
						customData: "Harare"
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
var countries = ["dz|Algeria|AF","ao|Angola|AF","bj|Benin|AF","bw|Botswana|AF","bf|Burkina Faso|AF","bi|Burundi|AF","cm|Cameroon|AF","cv|Cape Verde|AF","cf|Central African Republic|AF","td|Chad|AF","km|Comoros|AF","ci|Ivory Coast|AF","cd|Democratic Republic of the Congo|AF","dj|Djibouti|AF","eg|Egypt|AF","gq|Equatorial Guinea|AF","er|Eritrea|AF","et|Ethiopia|AF","ga|Gabon|AF","gm|Gambia|AF","gh|Ghana|AF","gn|Guinea|AF","gw|Guinea-Bissau|AF","ke|Kenya|AF","ls|Lesotho|AF","lr|Liberia|AF","ly|Libya|AF","mg|Madagascar|AF","mw|Malawi|AF","ml|Mali|AF","mr|Mauritania|AF","mu|Mauritius|AF","ma|Morocco|AF","mz|Mozambique|AF","na|Namibia|AF","ne|Niger|AF","ng|Nigeria|AF","cg|Republic of the Congo|AF","rw|Rwanda|AF","st|Sao Tome and Principe|AF","sn|Senegal|AF","sc|Seychelles|AF","sl|Sierra Leone|AF","so|Somalia|AF","za|South Africa|AF","ss|South Sudan|AF","sd|Sudan|AF","sz|Swaziland|AF","tz|Tanzania|AF","tg|Togo|AF","tn|Tunisia|AF","ug|Uganda|AF","zm|Zambia|AF","zw|Zimbabwe|AF"];
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
	if(code=='CF'){
		if(text.toUpperCase()===name.toUpperCase() || text.toUpperCase()==='CAR'){
			$('.hard_ans').css('border', '3px solid #118C4E');
			ctry.color = "#118C4E";
			totalRight++;
		}
		else{ //Incorrect case
			$('.hard_ans').css('border', '3px solid#8C1E11');
			ctry.color = "#8C1E11";	
		}
	}
	else if(code=='CI'){
		if(text.toUpperCase()===name.toUpperCase() || text.toUpperCase()==='IVORY COAST'){
			$('.hard_ans').css('border', '3px solid #118C4E');
			ctry.color = "#118C4E";
			totalRight++;
		}
		else{ //Incorrect case
			$('.hard_ans').css('border', '3px solid#8C1E11');
			ctry.color = "#8C1E11";	
		}
	}
	else if(code=='CV'){
		if(text.toUpperCase()===name.toUpperCase() || text.toUpperCase()==='CABO VERDE'){
			$('.hard_ans').css('border', '3px solid #118C4E');
			ctry.color = "#118C4E";
			totalRight++;
		}
		else{ //Incorrect case
		$('.hard_ans').css('border', '3px solid #8C1E11');
		}
	}
	else if(code=='GW'){
		if(text.toUpperCase()===name.toUpperCase() || text.toUpperCase()==='GUINEA BISSAU'){
			$('.hard_ans').css('border', '3px solid #118C4E');
			ctry.color = "#118C4E";
			totalRight++;
		}
		else{ //Incorrect case
			$('.hard_ans').css('border', '3px solid#8C1E11');
			ctry.color = "#8C1E11";
		}
	}
	else if(code=='CG'){
		if(text.toUpperCase()===name.toUpperCase() || text.toUpperCase()==='CONGO'){
			$('.hard_ans').css('border', '3px solid #118C4E');
			ctry.color = "#118C4E";
			totalRight++;
		}
		else{ //Incorrect case
			$('.hard_ans').css('border', '3px solid#8C1E11');
			ctry.color = "#8C1E11";	
		}
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
		code = currentCountry[0].toUpperCase();
		var name = currentCountry[1];
		
		$('#progress').html(counter+1 +'/' + countries.length);
		ctry = map.getObjectById(code);
		ctry.color = "#D8CD1E";
		ctry.outlineColor = "#D8CD1E";
		if(code=='CV')
			ctry.outlineThickness = 2;
		else if(code=='KM')
			ctry.outlineThickness = 2;
		else if(code=='GM')
			ctry.outlineThickness = 2;
		else if(code=='ST')
			ctry.outlineThickness = 2;
		else if(code=='SC')
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