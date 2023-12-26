// Objetivo: identificar qual opção o usuário escolheu no input "formas de contato". Então, de acordo com a opção escolhida, deixar visível somente o input correspondente. Exe: se for escolhida a opção e-mail, deixar o input do telefone com display 'none'.


// Criar vínculos com os elementos
const formasContato = document.querySelector("input[list='formas-contato']");
const emailOpcional = document.querySelector('.email-opcional');
const celularOpcional = document.querySelector('.celular-opcional');

formasContato.addEventListener('change', teste);

function teste() {
  // Obter o valor do elemento input
  const valorInput = formasContato.value;

  if (valorInput === 'E-mail') {
    emailOpcional.style.display = 'block';
    celularOpcional.style.display = 'none';
  } else {
    celularOpcional.style.display = 'block';
    emailOpcional.style.display = 'none';
  }
}
