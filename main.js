$(document).ready(function(){

var commonWords = [
  "the","of","and","a","to","in","is","you","that","it","he",
  "was","for","on","are","as","with","his","they","I","at","be",
  "this","have","from","or","one","had","by","word","but","not",
  "what","all","were","we","when","your","can","said","there",
  "use","an","each","which","she","do","how","their","if","will",
  "up","other","about","out","many","then","them","these","so",
  "some","her","would","make","like","him","into","time","has",
  "look","two","more","write","go","see","number","no","way",
  "could","people","my","than","first","water","been","call",
  "who","oil","its","now","find","long","down","day","did","get",
  "come","made","may","part"
];
var words = commonWords.filter((item)=> item.length >= 3)
 var randomword = words[Math.floor(Math.random()* words.length)] 
 	console.log(randomword)
 	var answer = ''
 for(let i =0; i < randomword.length; i++){
 	answer += '_'
 }

$("#hint").html(answer)
 
 var guesses = 8

$("#guesses").html(guesses)
$("button").on('click', function(){
 	var char = $('input').val()
 	
 	guesses -- 
 	
 	$("#guesses").html(guesses)
	
	for( let i = 0; i < answer.length; i++){
		if (randomword.charAt(i) === char){
			 arr = answer.split('')
			 arr[i]= char
			 answer= arr.join('')	
		}
}

$("#hint").html(answer)

if(answer == randomword){
	alert("YOU WON!")
}else if ( guesses == 0){
	alert("YOU LOST! :(")
}


	
})


})

