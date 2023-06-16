Player1name = localStorage.getItem("Player 1");
Player2name = localStorage.getItem("Player 2");

score_1 = 0 ;
score_2 = 0 ;


document.getElementById("name1").innerHTML = Player1name + " : " ;
document.getElementById("name2").innerHTML = Player2name + " : " ;

document.getElementById("score1").innerHTML =  score_1 ;
document.getElementById("score2").innerHTML =  score_2 ;

document.getElementById("qname").innerHTML = "Question turn : "+ Player1name ;
document.getElementById("aname").innerHTML = "Answer turn : "+ Player2name ;

function send() {
   get_number1 = document.getElementById("number1").value ;
   get_number2 = document.getElementById("number2").value ;
   real_answer = parseInt(get_number1) * parseFloat(get_number2);
   console.log(real_answer);
 
   question = "<h4>"+ get_number1 + "x" + get_number2 + "</h4>";
   input    = "<br> Answer : <input type = 'text' id = 'check'>";
   button   = "<br> <br> <button onclick='check()' class='btn btn-info' >Check</button> "
   row      = question + input + button ;
   document.getElementById("output").innerHTML = row ;

   document.getElementById("number1").value = "";
   document.getElementById("number2").value = "";

}

anst = "player1name" ;
qt   = "player2name" ;

function check() {
   annswersuii = document.getElementById("check").value ;
   if (real_answer == annswersuii) {
      if (anst == "player1name") {
         score_1 = score_1 + 1 ;
         document.getElementById("score1").innerHTML = score_1;
      } else {
         score_2 = score_2 + 1 ;
         document.getElementById("score2").innerHTML = score_2;
      }

      
   }

   if (qt == "player1name") {
      qt = "player2name";
      document.getElementById("qname").innerHTML = "Question turn : "+ Player2name ;
   } else {
      qt = "player1name";
      document.getElementById("qname").innerHTML = "Question turn : "+ Player1name ;
   }
    
   if (anst == "player1name") {
      anst = "player2name" ; 
      document.getElementById("aname").innerHTML = "Answer turn : "+ Player2name ; 
   } else {
      anst = "player1name";
      document.getElementById("aname").innerHTML =  "Answer turn : "+ Player1name ; 
   }
   document.getElementById("output").innerHTML = "" ;
   }
