//<script language="JavaScript" src="doro.js"></script>
function execute(){
  var codigo = document.getElementById("code");
  console.log(codigo);
  var codigofonte = codigo.value;
  var resultado = document.getElementById("console");
  resultado.value = codigofonte;
}
