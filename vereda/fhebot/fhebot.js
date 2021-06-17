var programa = [];
var fhelocal = [];
var fhelocalstart = [];
var gold = [];
var emloop = false;
var loopstartpoint = 0;
var looptimes = 0;
var mytimeout;
var stop = true;
var ngemas = 0;

$(document).ready(function(){
  var width = $(window).width();
  var height = $(window).height();

  $("table#mapa").css("width",10*30);
  $("table#mapa").css("height",10*30);

  for (var j=0; j<10; j++){
    var linha = document.createElement("tr");
    $("table#mapa").append(linha);
    for (var i=0; i<10; i++){
      var celula = document.createElement("td");
      celula.setAttribute("id",j+"-"+i);
      linha.append(celula);
    };
  };

  function exercitobrasileiro(element, index, array){
    document.getElementById(element).setAttribute("class","tree");
  }

  function goldgoblin(element, index, array){
    document.getElementById(element).setAttribute("class","gold");
  }

  function limpeza(){
    for (var j=0; j<10; j++){
      for (var i=0; i<10; i++){
        document.getElementById(j+"-"+i).setAttribute("class","empty");
      };
    };
  }

  function random(){
    gold = [];
    for (var j=0; j<10; j++){
      for (var i=0; i<10; i++){
        var aler = Math.random()*10;
        if (aler < 0.5){
          document.getElementById(j+"-"+i).setAttribute("class","gold");
          gold.push(j+"-"+i);
        }else if (aler < 2.5) {
          document.getElementById(j+"-"+i).setAttribute("class","tree");
        }else{
          document.getElementById(j+"-"+i).setAttribute("class","empty");
        }
      };
    };
    document.getElementById("1-1").setAttribute("class","fhebot");
  }

  document.getElementById('btn-scene1').onclick = function(){
    stop = true;
    limpeza();
    document.getElementById("1-1").setAttribute("class","fhebot");
    var trees = ["1-2","1-3","3-4","5-6","0-0","0-1","1-4","1-3","3-5","4-4",
"4-5","4-6","4-7","5-1","5-0","5-2","7-2","7-4","7-8","7-9","2-8","2-9","8-1",
"8-2","9-9","9-4"];
    trees.forEach(exercitobrasileiro);
    gold = ["0-7","7-0","9-7"];
    gold.forEach(goldgoblin);
    fhelocal = [1,1];
    fhelocalstart = [1,1];
    document.getElementById("labelmapa").innerHTML = "Mapa - Cenário 1";
  };

  document.getElementById('btn-scene2').onclick = function(){
    stop = true;
    limpeza();
    document.getElementById("1-9").setAttribute("class","fhebot");
    var trees = ["1-2","1-3","3-4","5-6","0-0","0-1","1-4","1-3","3-5","4-4",
"4-5","4-6","4-0","4-1","4-2","4-3","4-7","5-1","5-0","5-2","7-2","7-4","7-8",
"7-9","2-8","2-9","8-1","8-2","9-9","9-4"];
    trees.forEach(exercitobrasileiro);
    gold = ["1-0","7-0","9-7"];
    gold.forEach(goldgoblin);
    fhelocal = [1,9];
    fhelocalstart = [1,9];
    document.getElementById("labelmapa").innerHTML = "Mapa - Cenário 2";
  };

  document.getElementById('btn-scene3').onclick = function(){
    stop = true;
    limpeza();
    document.getElementById("0-5").setAttribute("class","fhebot");
    var trees = ["1-6","1-3","3-4","5-6","0-0","0-1","1-4","1-3","3-5","4-4",
"4-5","4-0","4-1","4-2","4-3","5-1","5-0","5-2","7-2","7-4","7-8",
"7-9","2-8","2-9","8-1","8-2","9-9","9-4"];
    trees.forEach(exercitobrasileiro);
    gold = ["2-6","4-7","6-8","7-6","8-4","9-2"];
    gold.forEach(goldgoblin);
    fhelocal = [0,5];
    fhelocalstart = [0,5];
    document.getElementById("labelmapa").innerHTML = "Mapa - Cenário 3";
  };

  document.getElementById('btn-scene4').onclick = function(){
    stop = true;
    limpeza();
    document.getElementById("1-1").setAttribute("class","fhebot");
    var trees = ["1-2","1-3","3-4","5-6","0-0","0-1","1-4","1-3","3-5",
    "4-5","4-6","4-7","5-1","5-0","5-2","7-2","7-4","7-8","7-9","2-8","2-9","8-1",
"8-2","9-9","9-4"];
    trees.forEach(exercitobrasileiro);
    gold = ["2-2","3-3","4-4","5-5","6-6","7-7"];
    gold.forEach(goldgoblin);
    fhelocal = [1,1];
    fhelocalstart = [1,1];
    document.getElementById("labelmapa").innerHTML = "Mapa - Cenário 4";
  };

  document.getElementById('btn-scene5').onclick = function(){
    stop = true;
    limpeza();
    document.getElementById("1-1").setAttribute("class","fhebot");
    var trees = ["1-2","1-3","3-4","5-6","0-0","0-1","1-4","1-3","3-5",
    "4-5","4-6","4-7","5-1","5-0","5-2","7-2","7-4","7-8","7-9","2-8","2-9","8-1",
"8-2","9-9","9-4"];
    trees.forEach(exercitobrasileiro);
    gold = ["3-3","5-5","7-7"];
    gold.forEach(goldgoblin);
    fhelocal = [1,1];
    fhelocalstart = [1,1];
    document.getElementById("labelmapa").innerHTML = "Mapa - Cenário 5";
  };

  document.getElementById('btn-scene6').onclick = function(){
    stop = true;
    limpeza();
    document.getElementById("1-1").setAttribute("class","fhebot");
    var trees = ["1-2","1-3","3-4","5-6","0-0","0-1","1-4","1-3","3-5",
    "4-5","4-6","4-7","5-1","5-0","5-2","7-2","7-4","7-8","7-9","2-8","2-9","8-1",
"8-2","9-9","9-4"];
    trees.forEach(exercitobrasileiro);
    gold = ["3-3","5-3","5-5","7-5","7-7"];
    gold.forEach(goldgoblin);
    fhelocal = [1,1];
    fhelocalstart = [1,1];
    document.getElementById("labelmapa").innerHTML = "Mapa - Cenário 6";
  };

  document.getElementById('btn-scene7').onclick = function(){
    stop = true;
    limpeza();
    document.getElementById("1-1").setAttribute("class","fhebot");
    var trees = ["1-2","1-3","3-2","3-4","5-4","5-6","0-0","0-1","1-4","1-3","3-5",
    "4-6","4-7","5-1","5-0","5-2","7-2","7-4","7-8","7-9","2-8","2-9","8-1",
    "8-2","9-9","9-4"];
    trees.forEach(exercitobrasileiro);
    gold = ["2-2","3-3","4-4","5-5","6-6","7-7"];
    gold.forEach(goldgoblin);
    fhelocal = [1,1];
    fhelocalstart = [1,1];
    document.getElementById("labelmapa").innerHTML = "Mapa - Cenário 7";
  };

  document.getElementById('btn-scene8').onclick = function(){
    stop = true;
    limpeza();
    document.getElementById("1-1").setAttribute("class","fhebot");
    var trees = ["1-2","1-3","3-2","3-4","5-4","5-6","0-0","0-1","1-4","1-3","3-5",
    "4-6","4-7","5-1","5-0","5-2","7-2","7-4","7-8","7-9","2-8","2-9","8-1",
    "8-2","9-9","9-4"];
    trees.forEach(exercitobrasileiro);
    gold = ["3-3","4-4","6-6","7-7"];
    gold.forEach(goldgoblin);
    fhelocal = [1,1];
    fhelocalstart = [1,1];
    document.getElementById("labelmapa").innerHTML = "Mapa - Cenário 8";
  };

  document.getElementById('btn-scene9').onclick = function(){
    stop = true;
    limpeza();
    document.getElementById("1-1").setAttribute("class","fhebot");
    var trees = ["1-2","1-3","3-2","5-4","0-0","0-1","1-4","1-3",
    "4-6","4-7","5-1","5-0","5-2","7-2","7-4","7-8","7-9","2-8","2-9","8-1",
    "8-2","9-9","9-4"];
    trees.forEach(exercitobrasileiro);
    gold = ["2-2","3-3","4-4","5-5","6-6","7-7"];
    gold.forEach(goldgoblin);
    fhelocal = [1,1];
    fhelocalstart = [1,1];
    document.getElementById("labelmapa").innerHTML = "Mapa - Cenário 9";
  };

  document.getElementById('btn-scene10').onclick = function(){
    stop = true;
    limpeza();
    document.getElementById("1-1").setAttribute("class","fhebot");
    var trees = ["1-2","1-3","3-2","5-4","0-0","0-1","1-4","1-3",
    "4-6","4-7","5-1","5-0","5-2","7-2","7-4","7-8","7-9","2-8","2-9","8-1",
    "8-2","9-9","9-4"];
    trees.forEach(exercitobrasileiro);
    gold = ["3-3","4-4","6-6","7-7"];
    gold.forEach(goldgoblin);
    fhelocal = [1,1];
    fhelocalstart = [1,1];
    document.getElementById("labelmapa").innerHTML = "Mapa - Cenário 10";
  };

  document.getElementById('btn-scene11').onclick = function(){
    stop = true;
    limpeza();
    document.getElementById("1-1").setAttribute("class","fhebot");
    var trees = ["1-2","1-3","3-2","5-4","0-1","1-4","1-3",
    "4-6","4-7","5-1","5-0","5-2","7-2","7-4","7-8","7-9","2-8","2-9","8-1",
    "8-2","9-4"];
    trees.forEach(exercitobrasileiro);
    gold = ["0-0","0-9","9-0","9-9","5-5","4-4"];
    gold.forEach(goldgoblin);
    fhelocal = [1,1];
    fhelocalstart = [1,1];
    document.getElementById("labelmapa").innerHTML = "Mapa - Cenário 11";
  };

  document.getElementById('btn-scene12').onclick = function(){
    stop = true;
    limpeza();
    document.getElementById("3-4").setAttribute("class","fhebot");
    var trees = ["1-0","0-4","1-3","1-4","1-5","1-6","2-0","2-1","2-6","3-1",
    "3-6","3-7","3-8","5-1","5-3","5-4","5-5","5-6","5-7","6-0","6-1","6-7",
    "7-5","7-6","7-7","8-1","8-2","8-5","9-2","9-3","9-4"];
    trees.forEach(exercitobrasileiro);
    gold = ["0-0","0-5","0-9","3-0","5-0","7-3"];
    gold.forEach(goldgoblin);
    fhelocal = [3,4];
    fhelocalstart = [3,4];
    document.getElementById("labelmapa").innerHTML = "Mapa - Cenário 12";
  };

  document.getElementById('btn-scenerandom').onclick = function(){
    stop = true;
    random();
    fhelocal = [1,1];
    fhelocalstart = [1,1];
    document.getElementById("labelmapa").innerHTML = "Mapa - Cenário aleatório";
  };

  document.getElementById('btn-left').onclick = function(){
    stop = true;
    var codigo = "";
    if (!(document.getElementById("story").value.includes('botões'))){
      codigo = document.getElementById("story").innerHTML;
    }
    if(emloop){
      document.getElementById("story").innerHTML = codigo + "  Mover para a esquerda"+'\r\n';
    }else{
      document.getElementById("story").innerHTML = codigo + "Mover para a esquerda"+'\r\n';
    }
    programa.push('left');
  };

  document.getElementById('btn-right').onclick = function(){
    stop = true;
    var codigo = "";
    if (!(document.getElementById("story").value.includes('botões'))){
      codigo = document.getElementById("story").innerHTML;
    }
    if(emloop){
      document.getElementById("story").innerHTML = codigo + "  Mover para a direita"+'\r\n';
    }else{
      document.getElementById("story").innerHTML = codigo + "Mover para a direita"+'\r\n';
    }
    programa.push('right');
  };

  document.getElementById('btn-up').onclick = function(){
    stop = true;
    var codigo = "";
    if (!(document.getElementById("story").value.includes('botões'))){
      codigo = document.getElementById("story").innerHTML;
    }
    if(emloop){
      document.getElementById("story").innerHTML = codigo + "  Mover para cima"+'\r\n';
    }else{
      document.getElementById("story").innerHTML = codigo + "Mover para cima"+'\r\n';
    }
    programa.push('up');
  };

  document.getElementById('btn-down').onclick = function(){
    stop = true;
    var codigo = "";
    if (!(document.getElementById("story").value.includes('botões'))){
      codigo = document.getElementById("story").innerHTML;
    }
    if(emloop){
      document.getElementById("story").innerHTML = codigo + "  Mover para baixo"+'\r\n';
    }else{
      document.getElementById("story").innerHTML = codigo + "Mover para baixo"+'\r\n';
    }
    programa.push('down');
  };

  document.getElementById('btn-loop').onclick = function(){
    stop = true;
    var codigo = "";
    if (!(document.getElementById("story").value.includes('botões'))){
      codigo = document.getElementById("story").innerHTML;
    }
    if (emloop){
      document.getElementById("story").innerHTML = codigo + "}"+'\r\n';
      document.getElementById('btn-loop').removeAttribute("style");
      programa.push('endloop');
      document.getElementById('btn-loop').innerHTML = "Repetir";
      emloop = false;
    }else{
      var x;
      var repeticoes=prompt("Repetir quantas vezes?");
      if (repeticoes!=null){
        repeticoes = parseInt(repeticoes, 10);
        if (!isNaN(repeticoes) && repeticoes > 0){
          document.getElementById("story").innerHTML = codigo + "REPETIR "+repeticoes+" {"+'\r\n';
          programa.push('startloop '+repeticoes);
          document.getElementById('btn-loop').setAttribute("style","background-color: Tomato;");
          document.getElementById('btn-loop').innerHTML = "Fim da repetição";
          emloop = true;
        }else{
          alert("O número de repetições precisa ser um número maior que 0");
        }
      }
    }
  };

  document.getElementById('btn-eraseall').onclick = function(){
    stop = true;
    document.getElementById(fhelocal[0]+"-"+fhelocal[1]).setAttribute("class","empty");
    document.getElementById(fhelocalstart[0]+"-"+fhelocalstart[1]).setAttribute("class","fhebot");
    fhelocal = fhelocalstart;
    gold.forEach(goldgoblin);
    ngemas = 0;
    document.getElementById('numgemas').innerHTML = ngemas;
    programa = [];
    document.getElementById("story").innerHTML = "Clique nos botões de programação para escrever seu programa";

    document.getElementById('btn-loop').removeAttribute("style");
    document.getElementById('btn-loop').innerHTML = "Repetir";
    emloop = false;
  };

  document.getElementById('btn-erase').onclick = function(){
    stop = true;
    if (!(document.getElementById("story").value.includes('botões'))){
      var codigo = document.getElementById("story").innerHTML;
      if(codigo.lastIndexOf("\n")>0) {
        codigo = codigo.substring(0, codigo.lastIndexOf("\n"));
        if(codigo.lastIndexOf("\n")>0) {
          codigo = codigo.substring(0, codigo.lastIndexOf("\n")) + '\r\n';
        }else if (codigo.lastIndexOf("\n")==-1) {
          codigo = "Clique nos botões de programação para escrever seu programa";
        }
      }
      document.getElementById("story").innerHTML = codigo;
      var removido = programa.pop();
      if(removido.includes("endloop")){
        document.getElementById('btn-loop').setAttribute("style","background-color: Tomato;");
        document.getElementById('btn-loop').innerHTML = "Fim da repetição";
        emloop = true;
      }else if (removido.includes("startloop")) {
        document.getElementById('btn-loop').removeAttribute("style");
        document.getElementById('btn-loop').innerHTML = "Repetir";
        emloop = false;
      }
    }
  };

  document.getElementById('btn-fromstart').onclick = function(){
    stop = true;
    document.getElementById(fhelocal[0]+"-"+fhelocal[1]).setAttribute("class","empty");
    document.getElementById(fhelocalstart[0]+"-"+fhelocalstart[1]).setAttribute("class","fhebot");
    fhelocal = fhelocalstart;
    gold.forEach(goldgoblin);
    ngemas = 0;
    document.getElementById('numgemas').innerHTML = ngemas;
  };

  function executeSteps(pedacoPrograma){
    var i = 0;
    mytimeout = setTimeout(frame, 300);
    function frame() {
      if (stop) {
        clearTimeout(mytimeout);
        document.getElementById('btn-run').removeAttribute("disabled");
      }else if (i < pedacoPrograma.length){
        var oldlocal = document.getElementById(fhelocal[0]+"-"+fhelocal[1]);
        var item = pedacoPrograma[i];
        i++;
        if(item == "left"){
          if (fhelocal[1]-1 >= 0) {
            var nextlocal = document.getElementById(fhelocal[0]+"-"+(parseInt(fhelocal[1],10)-1));
            if (!(nextlocal.getAttribute("class")=="tree")){
              if (nextlocal.getAttribute("class")=="gold"){
                ngemas++;
                document.getElementById('numgemas').innerHTML = ngemas;
              }
              nextlocal.setAttribute("class","fhebot");
              oldlocal.setAttribute("class","empty");
              fhelocal = [fhelocal[0],fhelocal[1]-1];
            }
          }
        }else if(item == "right"){
          if (fhelocal[1]+1 < 10) {
            var nextlocal = document.getElementById(fhelocal[0]+"-"+(parseInt(fhelocal[1],10)+1));
            if (!(nextlocal.getAttribute("class")=="tree")){
              if (nextlocal.getAttribute("class")=="gold"){
                ngemas++;
                document.getElementById('numgemas').innerHTML = ngemas;
              }
              nextlocal.setAttribute("class","fhebot");
              oldlocal.setAttribute("class","empty");
              fhelocal = [fhelocal[0],fhelocal[1]+1];
            }
          }
        }else if(item == "up"){
          if (fhelocal[0]-1 >= 0) {
            var nextlocal = document.getElementById((parseInt(fhelocal[0],10)-1)+"-"+fhelocal[1]);
            if (!(nextlocal.getAttribute("class")=="tree")){
              if (nextlocal.getAttribute("class")=="gold"){
                ngemas++;
                document.getElementById('numgemas').innerHTML = ngemas;
              }
              nextlocal.setAttribute("class","fhebot");
              oldlocal.setAttribute("class","empty");
              fhelocal = [fhelocal[0]-1,fhelocal[1]];
            }
          }
        }else if(item == "down"){
          if (fhelocal[0]+1 < 10) {
            var nextlocal = document.getElementById((parseInt(fhelocal[0],10)+1)+"-"+fhelocal[1]);
            if (!(nextlocal.getAttribute("class")=="tree")){
              if (nextlocal.getAttribute("class")=="gold"){
                ngemas++;
                document.getElementById('numgemas').innerHTML = ngemas;
              }
              nextlocal.setAttribute("class","fhebot");
              oldlocal.setAttribute("class","empty");
              fhelocal = [fhelocal[0]+1,fhelocal[1]];
            }
          }
        }else if(item.includes("startloop")){
          loopstartpoint = i-1;
          looptimes = parseInt(item.replace('startloop ',''),10);
        }else if (item.includes("endloop")) {
          looptimes = looptimes-1;
          if (looptimes > 0){
            i = loopstartpoint+1;
          }
        }
        setTimeout(frame, 300);
      }else if(i == pedacoPrograma.length){
        stop = true;
        document.getElementById('btn-run').removeAttribute("disabled");
      }
      clearTimeout(mytimeout);
    }
  }

  document.getElementById('btn-run').onclick = function(){
    document.getElementById(fhelocal[0]+"-"+fhelocal[1]).setAttribute("class","empty");
    document.getElementById(fhelocalstart[0]+"-"+fhelocalstart[1]).setAttribute("class","fhebot");
    fhelocal = fhelocalstart;
    gold.forEach(goldgoblin);
    ngemas = 0;
    document.getElementById('numgemas').innerHTML = ngemas;
    document.getElementById('btn-run').setAttribute("disabled", "true");
    stop = false;
    executeSteps(programa);
  };

  document.getElementById("btn-scene1").click();
});
