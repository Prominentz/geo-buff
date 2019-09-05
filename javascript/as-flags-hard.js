/*Variables*/
var countries = ["af|Afghanistan|AS","bh|Bahrain|AS","bd|Bangladesh|AS","bt|Bhutan|AS","bn|Brunei|AS","kh|Cambodia|AS","tl|Timor-Leste|AS","in|India|AS","id|Indonesia|AS","ir|Iran|AS","iq|Iraq|AS","il|Israel|AS","jp|Japan|AS","jo|Jordan|AS","kz|Kazakhstan|AS","kw|Kuwait|AS","kg|Kyrgyzstan|AS","la|Laos|AS","lb|Lebanon|AS","my|Malaysia|AS","mv|Maldives|AS","mn|Mongolia|AS","mm|Myanmar|AS","np|Nepal|AS","kp|North Korea|AS","om|Oman|AS","pk|Pakistan|AS","ps|Palestine|AS","cn|China|AS","ph|Philippines|AS","qa|Qatar|AS","tw|Taiwan|AS","ru|Russia|AS","sa|Saudi Arabia|AS","sg|Singapore|AS","kr|South Korea|AS","lk|Sri Lanka|AS","sy|Syria|AS","tj|Tajikistan|AS","th|Thailand|AS","tr|Turkey|AS","tm|Turkmenistan|AS","ae|United Arab Emirates|AS","uz|Uzbekistan|AS","vn|Vietnam|AS","ye|Yemen|AS"];
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
	
	//Correct case
	if(text.toUpperCase()===name.toUpperCase()){
		$('.hard_ans').css('border', '3px solid #118C4E');
		totalRight++;
	}
	else{ //Incorrect case
		$('.hard_ans').css('border', '3px solid #8C1E11');
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