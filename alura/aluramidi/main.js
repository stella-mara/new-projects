//função que reproduz o som dos instrumentos musicais que estão armazenados dentro de um elemento áudio do HTML
function tocaSom(seletorAudio) {
  const elemento = document.querySelector(seletorAudio);

  if (elemento != null && elemento.localName === 'audio') {
    elemento.play();
  } else {
    console.log('Elemento não encontrado ou seletor inválido');
  }
}
const listaDeTeclas = document.querySelectorAll('.tecla');

for (let contador = 0; contador < listaDeTeclas.length; contador++) {
  const tecla = listaDeTeclas[contador];
  const instrumento = tecla.classList[1];
  const idAudio = `#som_${instrumento}`;

  //Para clicar com mouse
  tecla.onclick = function () {
    tocaSom(idAudio);
  };

  //Para utilizar o teclado
  tecla.onkeydown = function (evento) {
    if (evento.code === 'Sape' || evento.code === 'Enter') {
      tecla.classList.add('ativa');
    }
  };

  tecla.onkeyup = function () {
    tecla.classList.remove('ativa');
  };

  //console.log(contador);
}
