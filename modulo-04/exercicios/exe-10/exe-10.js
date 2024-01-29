// color
const corInput = document.getElementById('cor');
const label = document.querySelector('.label');

corInput.addEventListener('input', alterarCor);

function alterarCor() {
  const corEscolhida = corInput.value;

  label.style.color = corEscolhida;
}