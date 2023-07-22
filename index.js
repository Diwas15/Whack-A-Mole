let curMoleTile;
let PlantTile;
let score=0;
let gameover=false;
window.onload = ()=>{
    setGame();
}
const setGame = ()=>{
    for(i=0;i<9;i++){
        let tile = document.createElement('div');
        tile.id = i.toString();
        tile.addEventListener("click",selectTile);
        document.getElementById('board').appendChild(tile);
        
    }
    setInterval(setMole, 1000);
    setInterval(setPlant,2000);
}


const setMole = ()=>{
    if(gameover)    return;
    if(curMoleTile){
        curMoleTile.innerHTML="";
    }
    let mole = document.createElement("img");
    mole.src = "./png-image.png";
    let num = Math.floor(Math.random()*9).toString();
    curMoleTile = document.getElementById(num);
    
    if(!(PlantTile && PlantTile.id == num))
        curMoleTile.appendChild(mole);
}

const setPlant = ()=>{
    if(gameover)    return;
    if(PlantTile){
        PlantTile.innerHTML="";
    }
    let plant = document.createElement("img");
    plant.src = "./pirana.png";
    let num = Math.floor(Math.random()*9).toString();
    PlantTile = document.getElementById(num);
    if(!(curMoleTile && curMoleTile.id == num))
        PlantTile.appendChild(plant);
}

function selectTile() {
    if(gameover)    return;
    if(this == curMoleTile){
        score+=10;
        document.getElementById("score").innerText=score.toString();
    }
        
    else if(this == PlantTile){
        gameover = true;
        document.getElementById("score").innerText="game over:"+score;
        document.getElementById('board').innerHTML='';
    }
}

function restart(){
    if(!gameover){
        score=0;
        document.getElementById("score").innerText=score.toString();
    }
    else{
        gameover=false;
        setGame();
    }
}