//form / essa e a função principal
const form = document.getElementById('form');
form.addEventListener('submit', handleSubmit);

let status = document.getElementById('status');
let tentativa = document.getElementById('tentativa');
let result = document.getElementById('result-box');

const Guess = {
    max: 10,
    tentativaNumber: 0,
    numberDraw: function randonValue(){
        return Math.round(Math.random() * this.max);
    }
}

let numberDraw = Guess.numberDraw();

function updatetentativa(tentativa, value){
    tentativa.innerHTML = 'Tentativa: ' + value
};

function handleSubmit(e){
    e.preventDefault();
    
    let kick = document.getElementById('kick').value;

    if(!kick) {
        alert('Digite algum Valor')
        return;
    } 

    updatetentativa(tentativa, ++Guess.tentativaNumber);

    if(numberDraw == kick) {
        playAgain();
        status.innerHTML = "Parabéns, você acertou!";
        result.style.transition = '0.3s';
        result.style.backgroundColor = '#37c978';
        result.style.color = '#fff';
        status.style.color = '#fff';
        clear()
    } else if(numberDraw > kick){
        status.innerHTML = 'O número é maior';
        status.style.color = '#de4251';
        clear();
    } else if(numberDraw < kick){
        status.innerHTML = 'O número é menor';
        status.style.color = '#de4251';
        clear();
    }
};

function playAgain(){
    document.getElementById('btn-start').style.display = 'flex';
};

function restart(){
    document.location.reload(true);
};

function clear(){
    document.getElementById('kick').value = '';
};