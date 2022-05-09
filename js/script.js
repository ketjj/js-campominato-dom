// L’utente indica un livello di difficoltà in base al quale viene generata una griglia di gioco quadrata, in cui ogni cella contiene un numero tra quelli compresi in un range:
// con difficoltà 1 => tra 1 e 100
// con difficoltà 2 => tra 1 e 81
// con difficoltà 3 => tra 1 e 49
// Quando l’utente clicca su ogni cella, la cella cliccata si colora di azzurro.

const bombNumbers = 15;
const listNumbers = [];

const playButton = document.getElementById('btn-output').addEventListener('click', play);


function play(){

  const container = document.querySelector('.main_container');

  // svuota container di tutte le celle
  while (container.firstChild) {
  container.removeChild(container.lastChild);
  }


  const select = document.getElementById('inputGroupSelect04');
  value = select.options[select.selectedIndex].value;

  create(container, parseInt(value))

  randomNumber = uniqueRandomNUmber(1, numLoops1);
}

function create(element, numLoops1){

  for(let i = 0; i < numLoops1; i++){
    createBox(element, numLoops1, i+1)
  }
}

function createBox(element1, numLoops1, number) {
  
  const box = document.createElement('div');
  
  box.addEventListener('click', function changeColor(){
    box.classList.add('box-clicked');
  })
  
  if( numLoops1 === 100) {
    box.className = 'box-easy';
    box.innerHTML = getRandomNumber(1, 100);
  } else if( numLoops1 === 81){
    box.className = 'box-hard';
    box.innerHTML = getRandomNumber(1, 81);
  } else if(numLoops1 === 49){
    box.className = 'box-veryhard'; 
    box.innerHTML = getRandomNumber(1, 49);
  }
  element1.append(box);
}


function uniqueRandomNUmber(min, max){
   let number, valid;

   while(!valid){
     number = getRandomNumber(min, max);
     while(!listNumbers.includes(number)){
       valid = true;
       listNumbers.push(number)
      }
    }
    return number;
  }
  
  function getRandomNumber(min, max){
   return Math.floor(Math.random() * (max - min +1) + min);
  }

