var wordList = [ "Purple","Orange","Pink","Brown" ]
   
   var chosenWord = " ";
   var letterInChosenWord = [];
   var numBlanks = 0;
   var blanksAndSuccesses = [];
   var wrongGuesses = [];
   
   var winCounter = 0;
   var lossCounter = 1;
   var numGuesses = 10;
   
   function startGame(){
   
   wrongGuesses = [];
   console.log("this is wrong guesses in startGame", wrongGuesses);
   numGuesses = 10;
   blanksAndSuccesses = [];
   
   
   chosenWord = wordList[Math.floor(Math.random() * wordList.length)];
   lettersInChosenWord = chosenWord.split("");
   numBlanks = lettersInChosenWord.length;
   console.log(chosenWord);
   console.log(numBlanks)
   
   for(var i = 0; i < numBlanks; i++){
	   blanksAndSuccesses.push("_");
   }
   console.log(blanksAndSuccesses);
   document.getElementById('word-blank').innerHTML = blanksAndSuccesses.join(" ");
   document.getElementById('guesses-left').innerHTML = numGuesses;
   
   
   
   }
   
   
   function checkLetters(letter){
	  
	   var letterInWord = false;
   
	   for(var i = 0; i < numBlanks; i++){
		   if(chosenWord[i] === letter){
			   letterInWord = true;
   
		   }
	   }
   
	   if(letterInWord){
		   for(i = 0; i < numBlanks; i++){
			   if(chosenWord[i] === letter){
			   blanksAndSuccesses[i] = letter;
   
		   }
   
		   }
	   }else{
		   numGuesses --;
		   wrongGuesses.push(letter)
	   }
   
   }
   
   
   function roundComplete(){
	
   
	   document.getElementById('word-blank').innerHTML = blanksAndSuccesses.join(" ");
	   document.getElementById('guesses-left').innerHTML = numGuesses;
	   document.getElementById('wrong-guesses').innerHTML = wrongGuesses.join(" ");
   
   
	   
	   console.log(lettersInChosenWord);
	   console.log(blanksAndSuccesses);
	   if(lettersInChosenWord.join(" ") === blanksAndSuccesses.join(" ")){
		   winCounter++;
		   alert("WIN");
		   document.getElementById('win-counter').innerHTML = winCounter;
		   startGame();
	   }else if(numGuesses === 0){
		   document.getElementById('loss-counter').innerHTML  = lossCounter ++;
		   document.getElementById('wrong-guesses').innerHTML = "";
		   alert("LOSE");        
		   startGame();
	   }
   
   }
   startGame();
   document.onkeyup = function(event){
	 
	   var letterGuessed = String.fromCharCode(event.keyCode).toLowerCase();
	   console.log("this is the letter we typed", letterGuessed)
	   checkLetters(letterGuessed)
	   roundComplete();
   
   
   }