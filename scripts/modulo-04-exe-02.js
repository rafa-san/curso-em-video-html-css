const botao = document.getElementById('botao');
const iFrame = document.getElementById('iFrame');

botao.addEventListener('click', exibirFrame);
function exibirFrame() {
  iFrame.style.display = 'block';
}