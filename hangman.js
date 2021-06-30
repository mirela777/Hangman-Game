var words = ['cat', 'dog', 'orange',' apple','power', 'internet', 'software'];
var answerArray = []; 
var totalGuesses;

function getRandomWord() {                                 
      var randomWord = words[Math.floor(Math.random()* words.length)];
      return randomWord;                      
}

function generateAlphabet(){
      var alphabet = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
      for (var i =0; i < alphabet.length; i++) {
          var btn = document.createElement("BUTTON");
          btn.setAttribute("class", "btn btn-primary");
          btn.style.margin = "10px";
          btn.innerHTML = alphabet[i];
          btn.id = alphabet[i];
          document.getElementById("letters").appendChild(btn);
          btn.addEventListener("click", function(){
          document.getElementById(this.id).disabled = true;
          checkLetter(this.id);
             });  
        }}
        
function generateAnswer(word){ 
      for (var i = 0; i < word.length; i++) {
          var letters = document.createElement("SPAN");
          letters.style.margin = "6px";
          letters.innerText = " _";
          answerArray[i] = word[i];
          document.getElementById("generateAnswer").appendChild(letters);
          letters.addEventListener("change",function(){
          checkLetter(this.id);
                })
            }}

function startGame(){
      generateAlphabet();
      var word = getRandomWord();
       generateAnswer(word); 
       totalGuesses = word.length + 1;
       document.getElementById("guesses").innerText = totalGuesses;  
}
var counter = 0;
function checkLetter(letter){
         var contains = 0; 
         for(var i = 0; i < answerArray.length; i++){
            if(letter == answerArray[i]){
            contains = 1;
            counter ++;
            document.getElementById("generateAnswer").children[i].innerText = letter;
      }
   }
         if(contains == 0){
             document.getElementById("guesses").innerText = totalGuesses - 1;
             totalGuesses -= 1;
            }
         if(totalGuesses == 0){
            document.getElementById("message").innerHTML = "You lose! " +" The word was " + answerArray.join("");
            setTimeout(function() {
               location.reload();
             }, 2000);    
   }
         if(counter == answerArray.length){
            document.getElementById("message").innerHTML = "You won!";
            setTimeout(function() {
               location.reload();
             }, 2000);  
   }
}
function restartGame() {
        location.reload();
  }