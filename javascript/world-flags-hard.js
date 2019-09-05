/*Variables*/
var countries = ["af|Afghanistan|AS","al|Albania|EU","dz|Algeria|AF","ad|Andorra|EU","ao|Angola|AF","ag|Antigua and Barbuda|NA","ar|Argentina|SA","am|Armenia|EU","au|Australia|OC","at|Austria|EU","az|Azerbaijan|EU","bs|Bahamas|NA","bh|Bahrain|AS","bd|Bangladesh|AS","bb|Barbados|NA","by|Belarus|EU","be|Belgium|EU","bz|Belize|NA","bj|Benin|AF","bt|Bhutan|AS","bo|Bolivia|SA","ba|Bosnia and Herzegovina|EU","bw|Botswana|AF","br|Brazil|SA","bn|Brunei|AS","bg|Bulgaria|EU","bf|Burkina Faso|AF","bi|Burundi|AF","kh|Cambodia|AS","cm|Cameroon|AF","ca|Canada|NA","cv|Cape Verde|AF","cf|Central African Republic|AF","td|Chad|AF","cl|Chile|SA","co|Colombia|SA","km|Comoros|AF","cr|Costa Rica|NA","ci|Cote d'Ivoire|AF","hr|Croatia|EU","cu|Cuba|NA","cy|Cyprus|EU","cz|Czech Republic|EU","cd|Democratic Republic of the Congo|AF","dk|Denmark|EU","dj|Djibouti|AF","dm|Dominica|NA","do|Dominican Republic|NA","tl|Timor-Leste|AS","ec|Ecuador|SA","eg|Egypt|AF","sv|El Salvador|NA","gq|Equatorial Guinea|AF","er|Eritrea|AF","ee|Estonia|EU","et|Ethiopia|AF","fj|Fiji|OC","fi|Finland|EU","fr|France|EU","ga|Gabon|AF","gm|Gambia|AF","ge|Georgia|EU","de|Germany|EU","gh|Ghana|AF","gr|Greece|EU","gd|Grenada|NA","gt|Guatemala|NA","gn|Guinea|AF","gw|Guinea-Bissau|AF","gy|Guyana|SA","ht|Haiti|NA","hn|Honduras|NA","hu|Hungary|EU","is|Iceland|EU","in|India|AS","id|Indonesia|AS","ir|Iran|AS","iq|Iraq|AS","ie|Ireland|EU","il|Israel|AS","it|Italy|EU","jm|Jamaica|NA","jp|Japan|AS","jo|Jordan|AS","kz|Kazakhstan|AS","ke|Kenya|AF","ki|Kiribati|OC","kw|Kuwait|AS","kg|Kyrgyzstan|AS","la|Laos|AS","lv|Latvia|EU","lb|Lebanon|AS","ls|Lesotho|AF","lr|Liberia|AF","ly|Libya|AF","li|Liechtenstein|EU","lt|Lithuania|EU","lu|Luxembourg|EU","mk|Macedonia|EU","mg|Madagascar|AF","mw|Malawi|AF","my|Malaysia|AS","mv|Maldives|AS","ml|Mali|AF","mt|Malta|EU","mh|Marshall Islands|OC","mr|Mauritania|AF","mu|Mauritius|AF","mx|Mexico|NA","fm|Micronesia|OC","md|Moldova|EU","mc|Monaco|EU","mn|Mongolia|AS","me|Montenegro|EU","ma|Morocco|AF","mz|Mozambique|AF","mm|Myanmar|AS","na|Namibia|AF","nr|Nauru|OC","np|Nepal|AS","nl|Netherlands|EU","nz|New Zealand|OC","ni|Nicaragua|NA","ne|Niger|AF","ng|Nigeria|AF","kp|North Korea|AS","no|Norway|EU","om|Oman|AS","pk|Pakistan|AS","pw|Palau|OC","ps|Palestine|AS","pa|Panama|NA","pg|Papua New Guinea|OC","py|Paraguay|SA","cn|China|AS","pe|Peru|SA","ph|Philippines|AS","pl|Poland|EU","pt|Portugal|EU","qa|Qatar|AS","tw|Taiwan|AS","cg|Republic of the Congo|AF","ro|Romania|EU","ru|Russia|AS","rw|Rwanda|AF","kn|Saint Kitts and Nevis|NA","lc|Saint Lucia|NA","vc|Saint Vincent and the Grenadines|NA","ws|Samoa|OC","sm|San Marino|EU","st|Sao Tome and Principe|AF","sa|Saudi Arabia|AS","sn|Senegal|AF","rs|Serbia|EU","sc|Seychelles|AF","sl|Sierra Leone|AF","sg|Singapore|AS","sk|Slovakia|EU","si|Slovenia|EU","sb|Solomon Islands|OC","so|Somalia|AF","za|South Africa|AF","kr|South Korea|AS","ss|South Sudan|AF","es|Spain|EU","lk|Sri Lanka|AS","sd|Sudan|AF","sr|Suriname|SA","sz|Swaziland|AF","se|Sweden|EU","ch|Switzerland|EU","sy|Syria|AS","tj|Tajikistan|AS","tz|Tanzania|AF","th|Thailand|AS","tg|Togo|AF","to|Tonga|OC","tt|Trinidad and Tobago|NA","tn|Tunisia|AF","tr|Turkey|AS","tm|Turkmenistan|AS","tv|Tuvalu|OC","ug|Uganda|AF","ua|Ukraine|EU","ae|United Arab Emirates|AS","gb|United Kingdom|EU","us|United States|NA","uy|Uruguay|SA","uz|Uzbekistan|AS","vu|Vanuatu|OC","va|Vatican City|EU","ve|Venezuela|SA","vn|Vietnam|AS","ye|Yemen|AS","zm|Zambia|AF","zw|Zimbabwe|AF"];
var userAnswers = [], /*What the user chooses*/
	answerKey = [], /*Built as the randomly chosen flag is picked*/
	options = []; /*The four options show on the buttons*/
var counter = 0,
	totalRight = 0,
	totalNA = 0, //Max is 23
	totalSA = 0, //Max is 12
	totalEU = 0, //Max is 47
	totalAF = 0, //Max is 54
	totalAS = 0, //Max is 44
	totalOC = 0; //Max is 14
var corrAns, currContinent;

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

function updateContCounter(cont){
		if(cont=='NA')
			totalNA++;
		else if(cont=='SA')
			totalSA++;
		else if(cont=='EU')
			totalEU++;
		else if(cont=='AF')
			totalAF++;
		else if(cont=='AS')
			totalAS++;
		else if(cont=='OC')
			totalOC++;
}

function updatePBar(){
		document.getElementById("p-bar").value = totalRight/counter;
}

function getResults(){
	//Overall stats
	document.getElementById("overall-stats").value = totalRight/counter;
	$('#numCorrect').html(totalRight + '/' + countries.length);
	
	//NA stats
	document.getElementById("NAstats").value = totalNA/23;
	$('#numCorrectNA').html(totalNA + '/23');
	
	//SA stats
	document.getElementById("SAstats").value = totalSA/12;
	$('#numCorrectSA').html(totalSA + '/12');
	
	//EU stats
	document.getElementById("EUstats").value = totalEU/47;
	$('#numCorrectEU').html(totalEU + '/47');
	
	//AF stats
	document.getElementById("AFstats").value = totalAF/54;
	$('#numCorrectAF').html(totalAF + '/54');
	
	//AS stats
	document.getElementById("ASstats").value = totalAS/44;
	$('#numCorrectAS').html(totalAS + '/44');
	
	//OC stats
	document.getElementById("OCstats").value = totalOC/14;
	$('#numCorrectOC').html(totalOC + '/14');
}

function displayFlag(num){
	var str = countries[num];
	var currentCountry = str.split('|');
	var code = currentCountry[0];
	var name = currentCountry[1];
	currContinent = currentCountry[2];
	
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
		updateContCounter(currContinent);
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