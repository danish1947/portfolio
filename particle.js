const canvas = document.getElementById("particle");

const ctx = canvas.getContext("2d");

canvas.width = window.innerWidth;

canvas.height = window.innerHeight;

const particles=[];

const total=90;

const mouse={

x:null,
y:null

};

window.addEventListener("mousemove",(e)=>{

mouse.x=e.x;
mouse.y=e.y;

});

class Particle{

constructor(){

this.x=Math.random()*canvas.width;

this.y=Math.random()*canvas.height;

this.size=Math.random()*2+1;

this.speedX=(Math.random()-.5)*0.4;

this.speedY=(Math.random()-.5)*0.4;

}

draw(){

ctx.beginPath();

ctx.fillStyle="rgba(255,255,255,.25)";

ctx.arc(this.x,this.y,this.size,0,Math.PI*2);

ctx.fill();

}

update(){

this.x+=this.speedX;

this.y+=this.speedY;

if(this.x<0)this.x=canvas.width;

if(this.x>canvas.width)this.x=0;

if(this.y<0)this.y=canvas.height;

if(this.y>canvas.height)this.y=0;

let dx=mouse.x-this.x;

let dy=mouse.y-this.y;

let distance=Math.sqrt(dx*dx+dy*dy);

if(distance<120){

this.x-=dx/35;

this.y-=dy/35;

}

this.draw();

}

}

for(let i=0;i<total;i++){

particles.push(new Particle());

}

function connect(){

for(let a=0;a<particles.length;a++){

for(let b=a;b<particles.length;b++){

let dx=particles[a].x-particles[b].x;

let dy=particles[a].y-particles[b].y;

let distance=dx*dx+dy*dy;

if(distance<9000){

ctx.beginPath();

ctx.strokeStyle="rgba(255,107,53,.08)";

ctx.lineWidth=1;

ctx.moveTo(particles[a].x,particles[a].y);

ctx.lineTo(particles[b].x,particles[b].y);

ctx.stroke();

}

}

}

}

function animate(){

ctx.clearRect(0,0,canvas.width,canvas.height);

particles.forEach(p=>{

p.update();

});

connect();

requestAnimationFrame(animate);

}

animate();

window.addEventListener("resize",()=>{

canvas.width=window.innerWidth;

canvas.height=window.innerHeight;

});