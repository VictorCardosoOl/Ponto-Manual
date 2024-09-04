function updateTime(idTextoParaCopiar, idResultado) {
  const timeElement = document.getElementById(idTextoParaCopiar);
  const now = new Date();
  const hours = now.getHours().toString().padStart(2, '0');
  const minutes = now.getMinutes().toString().padStart(2, '0');
  const timeString = `${hours}h${minutes}`;
  timeElement.textContent = timeString;
  document.getElementById(idResultado).textContent = timeString;
}


setInterval(function () {
  updateTime('textoParaCopiarEntrada', 'resultadoEntrada');
  updateTime('textoParaCopiarAlmoco', 'resultadoAlmoco');
  updateTime('textoParaCopiarCafe', 'resultadoCafe');
  updateTime('textoParaCopiarRetorno', 'resultadoRetorno');
  updateTime('textoParaCopiarSaida', 'resultadoSaida');
}, 1000);


updateTime('textoParaCopiarEntrada', 'resultadoEntrada');
updateTime('textoParaCopiarAlmoco', 'resultadoAlmoco');
updateTime('textoParaCopiarCafe', 'resultadoCafe');
updateTime('textoParaCopiarRetorno', 'resultadoRetorno');
updateTime('textoParaCopiarSaida', 'resultadoSaida');


function copiarTexto(idResultado) {

  let textoCopiado = document.getElementById(idResultado).innerText;
  const tempInput = document.createElement('textarea');
  tempInput.value = textoCopiado;
  tempInput.style.fontFamily = 'monospace';
  tempInput.style.fontSize = '12px'; 
  tempInput.style.whiteSpace = 'pre'; 
  document.body.appendChild(tempInput);
  tempInput.select();
  tempInput.setSelectionRange(0, 99999); 
  document.execCommand('copy');
  document.body.removeChild(tempInput);
}



function atualizarData() {
  const dataAtual = new Date();
  const diaSemana = capitalizeFirstLetter(dataAtual.toLocaleDateString('pt-BR', { weekday: 'long' }));
  const dia = String(dataAtual.getDate()).padStart(2, '0');
  const mes = String(dataAtual.getMonth() + 1).padStart(2, '0');
  const ano = dataAtual.getFullYear();
  const dataFormatada = `${diaSemana}: ${dia} | ${mes} | ${ano}`;
  document.getElementById('currentDate').textContent = dataFormatada;
}

function capitalizeFirstLetter(string) {
  return string.charAt(0).toUpperCase() + string.slice(1);
}

atualizarData();
