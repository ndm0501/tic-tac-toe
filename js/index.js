console.log("js works");
const boxes = document.getElementsByClassName('box');
let currentPlayer = 'X';
let winner;

//win decision
var winCombinations = [
    [0,1,2],
    [3,4,5],
    [6,7,8],
    [0,3,6],
    [1,4,7],
    [2,5,8],
    [0,4,8],
    [2,4,6],
];
function checkWin(){
    for(let combination of winCombinations){
        if((boxes[combination[0]].innerText === boxes[combination[1]].innerText)
         && (boxes[combination[1]].innerText === boxes[combination[2]].innerText) 
         && boxes[combination[0]].innerText
         ){
            winner = currentPlayer;
            announceWinner(winner);
            return; //no more comparisons once winner is decided
        }
    }
}
function announceWinner(){
    document.getElementById('winner').innerText = 'Player '+ winner+ ' won'
}

for(box of boxes){
    box.addEventListener('click', function(e){
        //1. add player text in the box, if not present
            //2. change player
        if(!e.target.innerText && !winner){
            e.target.innerText = currentPlayer;
            checkWin();
            currentPlayer = currentPlayer === 'X'? 'O' : 'X';
        }

    })
}
