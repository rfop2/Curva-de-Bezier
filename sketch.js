//line(xB,yB,v4.x,v4.y);
let insideBtn;
let arrayPontosClicados = [];
let arrayPontos = [];
let arrayPontosX = [];
let arrayPontosY = [];
let arrayPontosCurva = [];
let weightx = [];
let weighty = [];
let v1;
let v2;
let t;
let cont = 0;

function setup() {
  createCanvas(400, 400);
}

function draw() {
  background(126);
  //translate(100,100);
  let a = point(110,150);
  let b = point(25, 190);
  let c = point(210,250);
  let d = point(210,30);
  strokeWeight(10);
  stroke('rgba(0%,0%,0%,0.3)');
  v1 = createVector(110,150);
  v2 = createVector(25,190);
  v3 = createVector(210,250);
  v4 = createVector(210,30);
  line(v1.x,v1.y,v2.x,v2.y);
  line(v2.x,v2.y,v3.x,v3.y);
  line(v3.x,v3.y,v4.x,v4.y);
  weightx = [110,25,210,210];
  weighty = [150,190,250,30];
  
  // os pontos da curva
  for(let z = 0; z <= 1; z = z + 0.1){
    let pX = Bezier3(z,weightx);
    let pY = Bezier3(z,weighty);
    append(arrayPontos, pX);
    append(arrayPontos, pY);
    
  }
  
  // ligando os pontos para a curva aparecer
  for(let i=0; i<=arrayPontos.length-4; i = i + 2){
    point(arrayPontos[i],arrayPontos[i+1]);
    line(arrayPontos[i],arrayPontos[i+1],arrayPontos[i+2],arrayPontos[i+3])
  }

  for(let i = 0; i<arrayPontosClicados.length; i = i + 2){
    let pX = arrayPontosClicados[i];
    append(arrayPontosX, pX);
  }

  for(let i = 1; i<arrayPontosClicados.length; i = i + 2){
    let pY = arrayPontosClicados[i];
    append(arrayPontosY, pY);
  }


  noLoop();
  
}

function mousePressed(){
  // condicao para desenhar apenas dentro do canvas
  if(mouseY >= 0 && mouseY <= 400 && mouseX >= 0 && mouseX <= 400){
    point(mouseX,mouseY);
    append(arrayPontosClicados, mouseX);
    append(arrayPontosClicados, mouseY);
    if(arrayPontosClicados.length >= 4){
      line(arrayPontosClicados[cont],arrayPontosClicados[cont+1],arrayPontosClicados[cont+2],arrayPontosClicados[cont+3]); 
      cont = cont + 2;
    }
  } else {
    
  }
  
}

function pontosCurva(){
    let z = 0.5;
    let pX = Bezier3(z,arrayPontosX);
    let pY = Bezier3(z,arrayPontosY);
    point(pX,pY);
    append(arrayPontosCurva, pX);
    append(arrayPontosCurva, pY);
  
}

function ligandoPontosCurva(){
  for(let i=0; i<=arrayPontosCurva.length-4; i = i + 2){
    point(arrayPontosCurva[i],arrayPontosCurva[i+1]);
    line(arrayPontosCurva[i],arrayPontosCurva[i+1],arrayPontosCurva[i+2],arrayPontosCurva[i+3])
  }
}

// bezier cubica
function Bezier3(t,w){
  t2 = t * t
  t3 = t2 * t
  mt = 1-t
  mt2 = mt * mt
  mt3 = mt2 * mt
  return w[0]*mt3 + 3*w[1]*mt2*t + 3*w[2]*mt*t2 + w[3]*t3
}

function Bezier(){
  //checar se o click fooi dentro do btn
  pontosCurva();

}

function dentroBtn(){
  
   
}
