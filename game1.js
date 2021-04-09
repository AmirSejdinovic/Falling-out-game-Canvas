const canvas = document.createElement('canvas');
const tile = 25;
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

draw();

function draw(){
  ctx.fillStyle = player.color;
  ctx.fillRect(player.x, player.y,player.width,player.height);
}