const nome = document.getElementById('nome');
const sobrenome = document.getElementById('sobrenome');
const btn = document.getElementById('botao');

nome.focus();

btn.addEventListener('click', apagarDados);
function apagarDados() {
  nome.value = '';
  sobrenome.value = '';
  nome.focus();
}