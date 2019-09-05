/*Variables*/
var countries = ["dz|Algeria|AF","ao|Angola|AF","bj|Benin|AF","bw|Botswana|AF","bf|Burkina Faso|AF","bi|Burundi|AF","cm|Cameroon|AF","cv|Cape Verde|AF","cf|Central African Republic|AF","td|Chad|AF","km|Comoros|AF","ci|Cote d'Ivoire|AF","cd|Democratic Republic of the Congo|AF","dj|Djibouti|AF","eg|Egypt|AF","gq|Equatorial Guinea|AF","er|Eritrea|AF","et|Ethiopia|AF","ga|Gabon|AF","gm|Gambia|AF","gh|Ghana|AF","gn|Guinea|AF","gw|Guinea-Bissau|AF","ke|Kenya|AF","ls|Lesotho|AF","lr|Liberia|AF","ly|Libya|AF","mg|Madagascar|AF","mw|Malawi|AF","ml|Mali|AF","mr|Mauritania|AF","mu|Mauritius|AF","ma|Morocco|AF","mz|Mozambique|AF","na|Namibia|AF","ne|Niger|AF","ng|Nigeria|AF","cg|Republic of the Congo|AF","rw|Rwanda|AF","st|Sao Tome and Principe|AF","sn|Senegal|AF","sc|Seychelles|AF","sl|Sierra Leone|AF","so|Somalia|AF","za|South Africa|AF","ss|South Sudan|AF","sd|Sudan|AF","sz|Swaziland|AF","tz|Tanzania|AF","tg|Togo|AF","tn|Tunisia|AF","ug|Uganda|AF","zm|Zambia|AF","zw|Zimbabwe|AF"];
var userAnswers = [], /*What the user chooses*/
	answerKey = [], /*Built as the randomly chosen flag is picked*/
	options = []; /*The four options show on the buttons*/
var counter = 0,
	totalRight = 0;
var corrAns;

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

function updatePBar(){
		document.getElementById("p-bar").value = totalRight/counter;
}

function getResults(){
	//Overall stats
	document.getElementById("overall-stats").value = totalRight/counter;
	$('#numCorrect').html(totalRight + '/' + countries.length);
}

function displayFlag(num){
	var str = countries[num];
	var currentCountry = str.split('|');
	var code = currentCountry[0];
	var name = currentCountry[1];
	
	$('#progress').html(counter+1 +'/' + countries.length);
	$('.flag-h1').html('<span class="flag-icon flag-icon-' + code + '"></span>')
}

function checkAnswer(text){
	var str = countries[counter];
	var currentCountry = str.split('|');
	var code = currentCountry[0];
	var name = currentCountry[1];
	
	//Special cases
	if(code=='cf'){
		if(text.toUpperCase()===name.toUpperCase() || text.toUpperCase()==='CAR'){
			$('.hard_ans').css('border', '3px solid #118C4E');
			totalRight++;
		}
		else{ //Incorrect case
		$('.hard_ans').css('border', '3px solid #8C1E11');
		}
	}
	else if(code=='ci'){
		if(text.toUpperCase()===name.toUpperCase() || text.toUpperCase()==='IVORY COAST'){
			$('.hard_ans').css('border', '3px solid #118C4E');
			totalRight++;
		}
		else{ //Incorrect case
		$('.hard_ans').css('border', '3px solid #8C1E11');
		}
	}
	else if(code=='cv'){
		if(text.toUpperCase()===name.toUpperCase() || text.toUpperCase()==='CABO VERDE'){
			$('.hard_ans').css('border', '3px solid #118C4E');
			totalRight++;
		}
		else{ //Incorrect case
		$('.hard_ans').css('border', '3px solid #8C1E11');
		}
	}
	else if(code=='gw'){
		if(text.toUpperCase()===name.toUpperCase() || text.toUpperCase()==='GUINEA BISSAU'){
			$('.hard_ans').css('border', '3px solid #118C4E');
			totalRight++;
		}
		else{ //Incorrect case
		$('.hard_ans').css('border', '3px solid #8C1E11');
		}
	}
	else if(code=='cg'){
		if(text.toUpperCase()===name.toUpperCase() || text.toUpperCase()==='CONGO'){
			$('.hard_ans').css('border', '3px solid #118C4E');
			totalRight++;
		}
		else{ //Incorrect case
		$('.hard_ans').css('border', '3px solid #8C1E11');
		}
	}
	else{
		//Correct case
		if(text.toUpperCase()===name.toUpperCase()){
			$('.hard_ans').css('border', '3px solid #118C4E');
			totalRight++;
		}
		else{ //Incorrect case
			$('.hard_ans').css('border', '3px solid #8C1E11');
		}
	}
	counter++;
	setTimeout(function(){
		$('.hard_ans').css('border', '2px solid #1c1c1c');
		$('.hard_ans').val('');
		updatePBar();
		displayFlag(counter);
	}, 750)
}

$(document).keypress(function(e) {
    if(e.which == 13) {
		checkAnswer($('.hard_ans').val());
		if(counter == countries.length){
			$('.game_div').fadeOut(500, function(){
				$(this).next().fadeIn(500);
				getResults();
			});
		}
    }
});

/*From opening page an on*/
/*Initial fade if start button is chosen*/
shuffle(countries);
$(function(){
	$('.start').click(function(){ 
		$(this).parents('.game_div').fadeOut(500, function(){ 
			$(this).next().fadeIn(500); 
		}); 
		displayFlag(counter);
	});
})