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

function updatePBar(){
		document.getElementById("p-bar").value = totalRight/counter;
}

function getResults(){
	//Overall stats
	document.getElementById("overall-stats").value = totalRight/counter;
	$('#numCorrect').html(totalRight + '/' + countries.length);
}

function displayFlag(num){
	if(num==countries.length){
		$('.game_div').fadeOut(500, function(){
				$(this).next().fadeIn(500);
				getResults();
			});
	}
	else{
		var str = countries[num];
		var currentCountry = str.split('|');
		var code = currentCountry[0];
		var name = currentCountry[1];
		
		$('#progress').html(counter+1 +'/' + countries.length);
		$('.flag-h1').html('<span class="flag-icon flag-icon-' + code + '"></span>')
			
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
		totalRight++;
	}
	else
		$('#a').css('background-color', '#8C1E11');
	counter++;
	setTimeout(function(){
		$('#a').css('background-color', '#253B59');
		updatePBar();
		displayFlag(counter);
	}, 750)
}
function bClick(){
	userAnswers.push('b');
	if(corrAns == 'b'){
		$('#b').css('background-color', '#118C4E');
		totalRight++;
	}
	else
		$('#b').css('background-color', '#8C1E11');
	counter++;
	setTimeout(function(){
		$('#b').css('background-color', '#253B59');
		updatePBar();
		displayFlag(counter);
	}, 750)
}
function cClick(){
	userAnswers.push('c');
	if(corrAns == 'c'){
		$('#c').css('background-color', '#118C4E');
		totalRight++;
	}
	else
		$('#c').css('background-color', '#8C1E11');
	counter++;
	setTimeout(function(){
		$('#c').css('background-color', '#253B59');
		updatePBar();
		displayFlag(counter);
	}, 750)
}
function dClick(){
	userAnswers.push('d');
	if(corrAns == 'd'){
		$('#d').css('background-color', '#118C4E');
		totalRight++;
	}
	else
		$('#d').css('background-color', '#8C1E11');
	counter++;
	setTimeout(function(){
		$('#d').css('background-color', '#253B59');
		updatePBar();
		displayFlag(counter);
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
		displayFlag(counter);
	});
})