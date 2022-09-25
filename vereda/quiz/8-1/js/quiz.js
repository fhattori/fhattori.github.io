var firstQuestion = true;
var questionNumber = 0;
const shuffledArray = quest.sort((a, b) => 0.5 - Math.random());
var mistakes=0;
var nome="";
var countingTime=false;

function timer(){
    var sec = 60;
    var timer = setInterval(function(){
        $("#safeTimerDisplay").html('Aguarde <b>'+sec+'s</b> antes de testar outra alternativa...');
        sec--;
        if (sec < 0) {
          countingTime=false;
          clearInterval(timer);
          $("#safeTimer").css("display","none");
        }
    }, 1000);
}

function forceScrollDown() {
  $(document).scrollTop($(document).height());
}

function nextQuestion() {
  if(questionNumber==0){
    nome=$("#name").val()
    loadNextQuestion();
  }else{
    if(!countingTime){
      if(isAnswerRight(questionNumber)){
        loadNextQuestion();
      }else{
        mistakes+=1;
        countingTime=true;
        timer();
        showMistakes();
        forceScrollDown();
      }
    }else{
      $("#safeTimerDisplay").effect("bounce");
    }
  }
}

function showMistakes(){
  $("#erros").html(mistakes);
  $("#safeTimer").css("display","block");
  $("#pos-content").css("display","block");
  $("#erros").effect("bounce");
}

function randomizeAlternatives(){
  var alter = $("#alternatives");
  var unsortedElems = alter.children();
  var elems = unsortedElems.clone();
  elems.sort(function() {
    return (Math.round(Math.random()) - 0.5);
  });
  for (var i = 0; i < elems.length; i++){
    unsortedElems.eq(i).replaceWith(elems[i]);
  }
}

function loadNextQuestion(){
  if(questionNumber < quest.length){
    questionNumber+=1;
    console.log("getting the question ", questionNumber);
    $( "#enunciado" ).html(getQuestion(questionNumber));
    $("#lb-alt1").html(quest[questionNumber-1].alternative1);
    $("#lb-alt2").html(quest[questionNumber-1].alternative2);
    $("#lb-alt3").html(quest[questionNumber-1].alternative3);
    $("#lb-alt4").html(quest[questionNumber-1].alternative4);
    randomizeAlternatives();
    $("#alternatives").css("display","block");
  }else{
    $( "#enunciado" ).html("<p>"+nome+", você conseguiu finalizar todas as perguntas e errou "+mistakes+" vezes!</p><p>Agora vá mostrar para seu professor.</p>");
    $("#alternatives").css("display","none");
    $("#proximo").css("display","none");
    $("#pos-content").css("display","none");
  }
}

function isAnswerRight(questionNumber){
  var numberAlt = 0;
  var idnumber = parseInt(quest[questionNumber-1].number);
  var expected = quest[questionNumber-1].correctAlternative;
  if($("#alternative1").is(':checked')){
    numberAlt = (((1+42)*42)+(idnumber+33)).toString(16);
  }
  else if($("#alternative2").is(':checked')){
    numberAlt = (((2+42)*42)+(idnumber+33)).toString(16);
  }
  else if($("#alternative3").is(':checked')){
    numberAlt = (((3+42)*42)+(idnumber+33)).toString(16);
  }
  else if($("#alternative4").is(':checked')){
    numberAlt = (((4+42)*42)+(idnumber+33)).toString(16);
  }
  //console.log("expected", expected);
  //console.log("idnumber", idnumber);
  return (expected == numberAlt);
}

function getQuestion(number){
  return "<b>"+number+".</b>"+quest[number-1].question
}

$(function() {
  $("#alternatives").css("display","none");
  $("#pos-content").css("display","none");
  $( "#proximo" ).attr("onclick","nextQuestion()");
});
