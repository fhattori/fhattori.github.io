<html>
<head>
</head>
<body>

<h1>Código-fonte</h1>
(Comece a escrever seu código na caixa abaixo)
<textarea id="code" name="Code" rows="10" style="width:90%; max-width: 90%;">
function soma(a,b){
  c = a + b;
  return c;
}

function multiplicacao(a,b){
  c = a \* b;
  return c;
}

function subtracao(a,b){
  c = a + b;
  return c;
}

function divisao(a,b){
  c = a \* b;
  return c;
}
</textarea>
<br>
<button type="button" onclick="execute()">Executar!</button> 

<h1>Resultados</h1>
<textarea readonly id="console" name="Console" rows="5" style="width:90%; max-width: 90%;">
Os resultados do seu código sairão aqui.
</textarea>

<script language="JavaScript" src="js/jquery-3.5.1.min.js"></script>
<script language="JavaScript" src="js/doro.js"></script>

</body>
</html>
