/*Map*/
var map = AmCharts.makeChart( "playdiv", {

				type: "map",
				theme: "light",
				
				dataProvider: {
					map: "worldHigh",
					zoomLevel: 3,
					zoomLongitude: -65,
					zoomLatitude: -26,
					areas: [ {
						title: "Argentina",
						id: "AR",
						color: "#1c1c1c",
						customData: "Buenos Aires"
					  }, {
						title: "Bolivia",
						id: "BO",
						color: "#1c1c1c",
						customData: "Sucre"
					  }, {
						title: "Brazil",
						id: "BR",
						color: "#1c1c1c",
						customData: "Brasilia"
					  }, {
						title: "Chile",
						id: "CL",
						color: "#1c1c1c",
						customData: "Santiago"
					  }, {
						title: "Colombia",
						id: "CO",
						color: "#1c1c1c",
						customData: "Bogota"
					  }, {
						title: "Ecuador",
						id: "EC",
						color: "#1c1c1c",
						customData: "Quito"
					  }, {
						title: "Guyana",
						id: "GY",
						color: "#1c1c1c",
						customData: "Georgetown"
					  }, {
						title: "Paraguay",
						id: "PY",
						color: "#1c1c1c",
						customData: "Asuncion"
					  }, {
						title: "Peru",
						id: "PE",
						color: "#1c1c1c",
						customData: "Lima"
					  }, {
						title: "Suriname",
						id: "SR",
						color: "#1c1c1c",
						customData: "Paramaribo"
					  }, {
						title: "Uruguay",
						id: "UY",
						color: "#1c1c1c",
						customData: "Montevideo"
					  }, {
						title: "Venezuela",
						id: "VE",
						color: "#1c1c1c",
						customData: "Caracas"
					  }, 
					]
				  },

				  areasSettings: {
					outlineColor: "#1c1c1c",
					rollOverOutlineColor: "#1c1c1c",
					alpha: 0.8,
					unlistedAreasAlpha: 0.5,
					unlistedAreasColor: "#1c1c1c",
					balloonText: "",
					
				  }
				} );
map.dragMap = false;
				
/*Variables*/
var countries = ["AR|Argentina|SA","BO|Bolivia|SA","BR|Brazil|SA","CL|Chile|SA","CO|Colombia|SA","EC|Ecuador|SA","GY|Guyana|SA","PY|Paraguay|SA","PE|Peru|SA","SR|Suriname|SA","UY|Uruguay|SA","VE|Venezuela|SA"];
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
	counter++;
	setTimeout(function(){
		$('.hard_ans').css('border', '2px solid #1c1c1c');
		$('.hard_ans').val('');
		ctry.balloonText= "[[title]] - [[customData]]";
		ctry.outlineColor = "#1c1c1c";
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