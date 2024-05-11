//variaveis bolinha
let xBolinha = 315
let yBolinha = 200
let dBolinha = 20
let vBolinha = 6
let hBolinha = -3
let raioBolinha = dBolinha / 2

//variaveis raquete
let xRaquete = 5
let yRaquete = 150
let wRaquete = 10
let hRaquete = 90

//variaveis oponente
let xOpRaquete = 615
let yOpRaquete = 150
let wOpRaquete = 10
let hOpRaquete = 90
let vOpRaquete

//placar
let meusPontos = 0
let opPontos = 0

function setup() {
  createCanvas(630, 400);
}

function draw() {
  background(0);
  mostraBolinha();
  movimentaBolinha();
  colisaoBolinha();
  mostraRaquete();
  movimentaMinhaRaquete();
  colisaoRaquete();
  mostraRaquete();
  mostraOpRaquete();
  movimentaOpRaquete();
  colisaoOp();
  placar(); 
  marcarPontos();
}
  
function mostraBolinha(){
    circle(xBolinha, yBolinha, dBolinha)
}

function movimentaBolinha(){
  xBolinha += vBolinha
  yBolinha += hBolinha
}

function colisaoBolinha(){
  if (xBolinha + raioBolinha > width || xBolinha - raioBolinha < 0){
    vBolinha *= -1;
  }

  if (yBolinha + raioBolinha > height || yBolinha - raioBolinha <0){
    hBolinha*= -1;
                                                                    }
}
  
function mostraRaquete(){
  rect(xRaquete, yRaquete, wRaquete, hRaquete)
}

function movimentaMinhaRaquete() {
  if (keyIsDown(87) === true) {
    yRaquete -= 10;
  }
  if(keyIsDown(83) === true) {
    yRaquete += 10;
  }
}

function colisaoRaquete(){
  if(xBolinha - raioBolinha < xRaquete + wRaquete && yBolinha - raioBolinha < yRaquete + hRaquete && yBolinha + raioBolinha > yRaquete){
    vBolinha *= -1
  }
}

function mostraOpRaquete(){
  rect(xOpRaquete, yOpRaquete, wOpRaquete, hOpRaquete)
}

function movimentaOpRaquete(){
  vOpRaquete = yBolinha - yOpRaquete + wOpRaquete /2 -20
  yOpRaquete += vOpRaquete
}

function colisaoOp(){
  if(xBolinha + raioBolinha > xOpRaquete && yBolinha - raioBolinha < yOpRaquete + hOpRaquete && yBolinha + raioBolinha > yOpRaquete){
    vBolinha *= -1
  }
}

function placar(){
  textSize(15)
  fill(255)
  text(meusPontos, 220, 30)
  text(opPontos, 390, 30)
}

function marcarPontos(){
  if (xBolinha - raioBolinha < 0){
    meusPontos += 1
  }
    if(xBolinha + raioBolinha > 629){
      opPontos += 1
    }
  
}