//envolver tudo numa função pra tirar do escopo global
function timerClock (){

//1 - Configurar pra que o tempo comece a contar do 0
function getTimeSeconds (sec) {
  const date = new Date(sec * 1000);
  return date.toLocaleTimeString('pt-BR', {
    hour12: false,
    timeZone: 'UTC'
  });
}

//2 - selecionar o espaço no html
const relogio = document.querySelector('.relogio');


//3 - Start no tempo com setInterval para girar de 1 em 1 segundo
let timer;
let secs = 0;

function timerStart (){
  timer = setInterval(function (){    
    secs++;
    relogio.innerHTML= getTimeSeconds(secs);
  }, 1000);
}

//4 - comportamento on click (não precisa queryselector, vai no evento)
document.addEventListener('click', function(e){
  //seleciona onde clica
  el = e.target;

  //iniciar - starta, impede de "acelerar" e remove cor
  if (el.classList.contains('iniciar')){
  clearInterval(timer);
  timerStart();
  relogio.classList.remove('pausado');
  }

   //pausar - pause + muda cor
  if (el.classList.contains('pausar')){
  clearInterval(timer);
  relogio.classList.add('pausado');
  }

  //zerar - limpa html e zera segundos
  if (el.classList.contains('zerar')){
  clearInterval(timer);
  relogio.classList.remove('pausado');
  relogio.innerHTML = '00:00:00';
  secs = 0;
  }
})
}

timerClock();