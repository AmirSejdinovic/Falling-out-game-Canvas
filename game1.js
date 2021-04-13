const canvas = document.createElement('canvas');
const tile = 25;
const enemyTotal = 20;

const enemies = {speed:5,arr:[],total:20};



canvas.setAttribute('height',tile*20);
canvas.setAttribute('width',tile*25);
canvas.style.backgroundColor='black';
const ctx = canvas.getContext('2d');
document.body.prepend(canvas);


const player = {
  x:canvas.width /2,
  y:canvas.height-(tile*3),
  speed:5,
  width:tile*4,
  height:tile*1,
  color: 'red'

};

const keyz = {
  ArrowLeft:false,
  ArrowRight:false,
  ArrowUp:false,
  ArrowDown:false


}

document.addEventListener('keydown',(e)=>{
    console.log(e.code);
    if(e.code in keyz){keyz[e.code]=true;}});

document.addEventListener('keyup',(e)=>{
  if(e.code in keyz){keyz[e.code]=false;}})

  requestAnimationFrame(draw);

function enemyMaker(){
  let xPos = Math.random()*(canvas.width-tile);
  enemies.arr.push({
    x:xPos,
    y:10,
    size:10

  })
}


function draw(){
  ctx.clearRect(0,0,canvas.width,canvas.height);

  if(enemies.arr.length < enemies.total){
    console.log(enemies);
    enemyMaker();

  }
  enemies.arr.forEach((enemy,index)=>{
    ctx.fillRect(enemy.x,enemy.y,enemy.size,enemy.size);
  })
    
 

  if(keyz.ArrowLeft && player.x>0){player.x-=player.speed};
  if(keyz.ArrowRight && player.x < canvas.width-player.width){player.x+=player.speed};
  if(keyz.ArrowUp && player.y > canvas.height-tile*8){player.y -= player.speed};
  if(keyz.ArrowDown && player.y < canvas.height-tile){player.y += player.speed};
  ctx.fillStyle = player.color;
  ctx.fillRect(player.x, player.y,player.width,player.height);
  requestAnimationFrame(draw);
}