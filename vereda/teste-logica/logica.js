$(document).ready(function() {
  document.getElementById("cor1").value = "null";
  document.getElementById("cor2").value = "null";
  document.getElementById("cor3").value = "null";
  document.getElementById("cor4").value = "null";
  document.getElementById("cor5").value = "null";
  document.getElementById("nacionalidade1").value = "null";
  document.getElementById("nacionalidade2").value = "null";
  document.getElementById("nacionalidade3").value = "null";
  document.getElementById("nacionalidade4").value = "null";
  document.getElementById("nacionalidade5").value = "null";
  document.getElementById("bebida1").value = "null";
  document.getElementById("bebida2").value = "null";
  document.getElementById("bebida3").value = "null";
  document.getElementById("bebida4").value = "null";
  document.getElementById("bebida5").value = "null";
  document.getElementById("cigarro1").value = "null";
  document.getElementById("cigarro2").value = "null";
  document.getElementById("cigarro3").value = "null";
  document.getElementById("cigarro4").value = "null";
  document.getElementById("cigarro5").value = "null";
  document.getElementById("animal1").value = "null";
  document.getElementById("animal2").value = "null";
  document.getElementById("animal3").value = "null";
  document.getElementById("animal4").value = "null";
  document.getElementById("animal5").value = "null";
});

function checkRules() {
  document.getElementById('rule1').classList.remove('ativado');
  document.getElementById('rule2').classList.remove('ativado');
  document.getElementById('rule3').classList.remove('ativado');
  document.getElementById('rule4').classList.remove('ativado');
  document.getElementById('rule5').classList.remove('ativado');
  document.getElementById('rule6').classList.remove('ativado');
  document.getElementById('rule7').classList.remove('ativado');
  document.getElementById('rule8').classList.remove('ativado');
  document.getElementById('rule9').classList.remove('ativado');
  document.getElementById('rule10').classList.remove('ativado');
  document.getElementById('rule11').classList.remove('ativado');
  document.getElementById('rule12').classList.remove('ativado');
  document.getElementById('rule13').classList.remove('ativado');
  document.getElementById('rule14').classList.remove('ativado');
  document.getElementById('rule15').classList.remove('ativado');


  if(document.getElementById("cor1").value == "vermelho" && document.getElementById("nacionalidade1").value == "ingles"){
    document.getElementById('rule1').classList.add('ativado');
  }if(document.getElementById("cor2").value == "vermelho" && document.getElementById("nacionalidade2").value == "ingles"){
    document.getElementById('rule1').classList.add('ativado');
  }if(document.getElementById("cor3").value == "vermelho" && document.getElementById("nacionalidade3").value == "ingles"){
    document.getElementById('rule1').classList.add('ativado');
  }if(document.getElementById("cor4").value == "vermelho" && document.getElementById("nacionalidade4").value == "ingles"){
    document.getElementById('rule1').classList.add('ativado');
  }if(document.getElementById("cor5").value == "vermelho" && document.getElementById("nacionalidade5").value == "ingles"){
    document.getElementById('rule1').classList.add('ativado');
  }
  
  if(document.getElementById("nacionalidade1").value == "sueco" && document.getElementById("animal1").value == "cachorro"){
    document.getElementById('rule2').classList.add('ativado');
  }if(document.getElementById("nacionalidade2").value == "sueco" && document.getElementById("animal2").value == "cachorro"){
    document.getElementById('rule2').classList.add('ativado');
  }if(document.getElementById("nacionalidade3").value == "sueco" && document.getElementById("animal3").value == "cachorro"){
    document.getElementById('rule2').classList.add('ativado');
  }if(document.getElementById("nacionalidade4").value == "sueco" && document.getElementById("animal5").value == "cachorro"){
    document.getElementById('rule2').classList.add('ativado');
  }if(document.getElementById("nacionalidade5").value == "sueco" && document.getElementById("animal5").value == "cachorro"){
    document.getElementById('rule2').classList.add('ativado');
  }

  if(document.getElementById("nacionalidade1").value == "dinamarques" && document.getElementById("bebida1").value == "cha"){
    document.getElementById('rule3').classList.add('ativado');
  }if(document.getElementById("nacionalidade2").value == "dinamarques" && document.getElementById("bebida2").value == "cha"){
    document.getElementById('rule3').classList.add('ativado');
  }if(document.getElementById("nacionalidade3").value == "dinamarques" && document.getElementById("bebida3").value == "cha"){
    document.getElementById('rule3').classList.add('ativado');
  }if(document.getElementById("nacionalidade4").value == "dinamarques" && document.getElementById("bebida4").value == "cha"){
    document.getElementById('rule3').classList.add('ativado');
  }if(document.getElementById("nacionalidade5").value == "dinamarques" && document.getElementById("bebida5").value == "cha"){
    document.getElementById('rule3').classList.add('ativado');
  }

  if(document.getElementById("cor1").value == "verde" && document.getElementById("cor2").value == "branca"){
    document.getElementById('rule4').classList.add('ativado');
  }if(document.getElementById("cor2").value == "verde" && document.getElementById("cor3").value == "branca"){
    document.getElementById('rule4').classList.add('ativado');
  }if(document.getElementById("cor3").value == "verde" && document.getElementById("cor4").value == "branca"){
    document.getElementById('rule4').classList.add('ativado');
  }if(document.getElementById("cor4").value == "verde" && document.getElementById("cor5").value == "branca"){
    document.getElementById('rule4').classList.add('ativado');
  }

  if(document.getElementById("cor1").value == "verde" && document.getElementById("bebida1").value == "cafe"){
    document.getElementById('rule5').classList.add('ativado');
  }if(document.getElementById("cor2").value == "verde" && document.getElementById("bebida2").value == "cafe"){
    document.getElementById('rule5').classList.add('ativado');
  }if(document.getElementById("cor3").value == "verde" && document.getElementById("bebida3").value == "cafe"){
    document.getElementById('rule5').classList.add('ativado');
  }if(document.getElementById("cor4").value == "verde" && document.getElementById("bebida4").value == "cafe"){
    document.getElementById('rule5').classList.add('ativado');
  }if(document.getElementById("cor5").value == "verde" && document.getElementById("bebida5").value == "cafe"){
    document.getElementById('rule5').classList.add('ativado');
  }

  if(document.getElementById("cigarro1").value == "pallmall" && document.getElementById("animal1").value == "passaro"){
    document.getElementById('rule6').classList.add('ativado');
  }if(document.getElementById("cigarro2").value == "pallmall" && document.getElementById("animal2").value == "passaro"){
    document.getElementById('rule6').classList.add('ativado');
  }if(document.getElementById("cigarro3").value == "pallmall" && document.getElementById("animal3").value == "passaro"){
    document.getElementById('rule6').classList.add('ativado');
  }if(document.getElementById("cigarro4").value == "pallmall" && document.getElementById("animal4").value == "passaro"){
    document.getElementById('rule6').classList.add('ativado');
  }if(document.getElementById("cigarro5").value == "pallmall" && document.getElementById("animal5").value == "passaro"){
    document.getElementById('rule6').classList.add('ativado');
  }

  if(document.getElementById("cigarro1").value == "dunhill" && document.getElementById("cor1").value == "amarela"){
    document.getElementById('rule7').classList.add('ativado');
  }if(document.getElementById("cigarro2").value == "dunhill" && document.getElementById("cor2").value == "amarela"){
    document.getElementById('rule7').classList.add('ativado');
  }if(document.getElementById("cigarro3").value == "dunhill" && document.getElementById("cor3").value == "amarela"){
    document.getElementById('rule7').classList.add('ativado');
  }if(document.getElementById("cigarro4").value == "dunhill" && document.getElementById("cor4").value == "amarela"){
    document.getElementById('rule7').classList.add('ativado');
  }if(document.getElementById("cigarro5").value == "dunhill" && document.getElementById("cor5").value == "amarela"){
    document.getElementById('rule7').classList.add('ativado');
  }

  if(document.getElementById("bebida3").value == "leite"){
    document.getElementById('rule8').classList.add('ativado');
  }

  if(document.getElementById("nacionalidade1").value == "noruegues"){
    document.getElementById('rule9').classList.add('ativado');
  }

  if(document.getElementById("cigarro1").value == "blends" && document.getElementById("animal2").value == "gato"){
    document.getElementById('rule10').classList.add('ativado');
  }if(document.getElementById("cigarro2").value == "blends" && (document.getElementById("animal1").value == "gato" || document.getElementById("animal3").value == "gato")){
    document.getElementById('rule10').classList.add('ativado');
  }if(document.getElementById("cigarro3").value == "blends" && (document.getElementById("animal2").value == "gato" || document.getElementById("animal4").value == "gato")){
    document.getElementById('rule10').classList.add('ativado');
  }if(document.getElementById("cigarro4").value == "blends" && (document.getElementById("animal3").value == "gato" || document.getElementById("animal5").value == "gato")){
    document.getElementById('rule10').classList.add('ativado');
  }if(document.getElementById("cigarro5").value == "blends" && document.getElementById("animal4").value == "gato"){
    document.getElementById('rule10').classList.add('ativado');
  }

  if(document.getElementById("cigarro1").value == "dunhill" && document.getElementById("animal2").value == "cavalo"){
    document.getElementById('rule11').classList.add('ativado');
  }if(document.getElementById("cigarro2").value == "dunhill" && (document.getElementById("animal1").value == "cavalo" || document.getElementById("animal3").value == "cavalo")){
    document.getElementById('rule11').classList.add('ativado');
  }if(document.getElementById("cigarro3").value == "dunhill" && (document.getElementById("animal2").value == "cavalo" || document.getElementById("animal4").value == "cavalo")){
    document.getElementById('rule11').classList.add('ativado');
  }if(document.getElementById("cigarro4").value == "dunhill" && (document.getElementById("animal3").value == "cavalo" || document.getElementById("animal5").value == "cavalo")){
    document.getElementById('rule11').classList.add('ativado');
  }if(document.getElementById("cigarro5").value == "dunhill" && document.getElementById("animal4").value == "cavalo"){
    document.getElementById('rule11').classList.add('ativado');
  }

  if(document.getElementById("cigarro1").value == "bluemaster" && document.getElementById("bebida1").value == "cerveja"){
    document.getElementById('rule12').classList.add('ativado');
  }if(document.getElementById("cigarro2").value == "bluemaster" && document.getElementById("bebida2").value == "cerveja"){
    document.getElementById('rule12').classList.add('ativado');
  }if(document.getElementById("cigarro3").value == "bluemaster" && document.getElementById("bebida3").value == "cerveja"){
    document.getElementById('rule12').classList.add('ativado');
  }if(document.getElementById("cigarro4").value == "bluemaster" && document.getElementById("bebida4").value == "cerveja"){
    document.getElementById('rule12').classList.add('ativado');
  }if(document.getElementById("cigarro5").value == "bluemaster" && document.getElementById("bebida5").value == "cerveja"){
    document.getElementById('rule12').classList.add('ativado');
  }

  if(document.getElementById("cigarro1").value == "prince" && document.getElementById("nacionalidade1").value == "alemao"){
    document.getElementById('rule13').classList.add('ativado');
  }if(document.getElementById("cigarro2").value == "prince" && document.getElementById("nacionalidade2").value == "alemao"){
    document.getElementById('rule13').classList.add('ativado');
  }if(document.getElementById("cigarro3").value == "prince" && document.getElementById("nacionalidade3").value == "alemao"){
    document.getElementById('rule13').classList.add('ativado');
  }if(document.getElementById("cigarro4").value == "prince" && document.getElementById("nacionalidade4").value == "alemao"){
    document.getElementById('rule13').classList.add('ativado');
  }if(document.getElementById("cigarro5").value == "prince" && document.getElementById("nacionalidade5").value == "alemao"){
    document.getElementById('rule13').classList.add('ativado');
  }

  if(document.getElementById("cor1").value == "azul" && document.getElementById("nacionalidade2").value == "noruegues"){
    document.getElementById('rule14').classList.add('ativado');
  }if(document.getElementById("cor2").value == "azul" && (document.getElementById("nacionalidade1").value == "noruegues" || document.getElementById("nacionalidade3").value == "noruegues")){
    document.getElementById('rule14').classList.add('ativado');
  }if(document.getElementById("cor3").value == "azul" && (document.getElementById("nacionalidade2").value == "noruegues" || document.getElementById("nacionalidade4").value == "noruegues")){
    document.getElementById('rule14').classList.add('ativado');
  }if(document.getElementById("cor4").value == "azul" && (document.getElementById("nacionalidade3").value == "noruegues" || document.getElementById("nacionalidade5").value == "noruegues")){
    document.getElementById('rule14').classList.add('ativado');
  }if(document.getElementById("cor5").value == "azul" && document.getElementById("nacionalidade4").value == "noruegues"){
    document.getElementById('rule14').classList.add('ativado');
  }

  if(document.getElementById("cigarro1").value == "blends" && document.getElementById("bebida2").value == "agua"){
    document.getElementById('rule15').classList.add('ativado');
  }if(document.getElementById("cigarro2").value == "blends" && (document.getElementById("bebida1").value == "agua" || document.getElementById("bebida3").value == "agua")){
    document.getElementById('rule15').classList.add('ativado');
  }if(document.getElementById("cigarro3").value == "blends" && (document.getElementById("bebida2").value == "agua" || document.getElementById("bebida4").value == "agua")){
    document.getElementById('rule15').classList.add('ativado');
  }if(document.getElementById("cigarro4").value == "blends" && (document.getElementById("bebida3").value == "agua" || document.getElementById("bebida5").value == "agua")){
    document.getElementById('rule15').classList.add('ativado');
  }if(document.getElementById("cigarro5").value == "blends" && document.getElementById("bebida4").value == "agua"){
    document.getElementById('rule15').classList.add('ativado');
  }
}
