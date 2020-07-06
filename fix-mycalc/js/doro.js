//<script language="JavaScript" src="doro.js"></script>
function soma(a,b){
  c = a + b;
  return c;
}

function multiplicacao(a,b){
  c = a * b;
  return c;
}

function subtracao(a,b){
  c = 0;
  return c;
}

function divisao(a,b){
  c = 0;
  return c;
}

function desafio(a,b){
  c = 0;
  return c;
}


function execute(operacao){
  var codigo = document.getElementById("code").value;
  eval(codigo);
  var a = parseInt(document.getElementById("a").value);
  var b = parseInt(document.getElementById("b").value);
  var c = 0;

  switch (operacao) {
    case 'soma':
      c = soma(a,b);
      break;
    case 'subtracao':
      c = subtracao(a,b);
      break;
    case 'multiplicacao':
      c = multiplicacao(a,b);
      break;
    case 'divisao':
      c = divisao(a,b);i
      break;
    case 'desafio':
      c = desafio(a,b);
      break;
  } 
 
  var resultado = document.getElementById("c");
  resultado.value = c; 
}

