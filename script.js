$(document).ready(function(){

  var magic8Ball = {};
  magic8Ball.listofanswers = ["It is certain.", "It is decidedly so.", "Without a doubt.", "Yes, definitely.", "You may rely on it.", "As I see it, yes.", "Most likely.", "Outlook good.", "Yes.", "Signs point to yes."];

  magic8Ball.getAnswer = function(question)
  {
    var randomNumber = Math.random();
    var randomAnswer = Math.floor(randomNumber * this.listofanswers.length);
    var answer = this.listofanswers[randomAnswer];

    $("#8ball").effect( "shake" );
    $("#answer").text( answer );
    $("#answer").fadeIn(3000);
    $("#8ball").attr("src", "answerside.png");

    console.log(question);
    console.log(answer);
  };

  $("#answer").hide();

  var onClick = function()
  {
    $("#answer").hide();
    $("#8ball").attr("src", "magic8ballQuestion.png");
    var question = "What do you want to know?"; // Removed the prompt and set the question directly
    magic8Ball.getAnswer(question);
  };

  $("#questionButton").click( onClick );
});
