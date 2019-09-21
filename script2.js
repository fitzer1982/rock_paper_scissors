let userScore = 0;
let compScore = 0;

function btncl(e) {
    console.log(e.target.dataset.key);
    
}

function computerPlay (){
    choiceNum = Math.floor(Math.random()* (3));
    console.log(choiceNum);
    switch (choiceNum){
        case 0 : return ('rock')
        case 1 : return ('paper')
        case 2 : return ('scissors')
    }
}

const btn = document.querySelectorAll('button');

console.log(btn);