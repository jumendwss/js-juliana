let xBolinha = 300;
let yBolinha = 200;
let diametro = 13;
let raio = diametro /2;

let velocidadeXBolinha = 6;
let velocidadeYBolinha = 6;

//variaveis da raquete
let xRaquete = 5;
let yRaquete = 150;

let colidiu = false;

let raqueteComprimento = 10;
let raqueteAltura = 90;

//variaveis do oponente
let xRaqueteOponente = 585;
let yRaqueteOponente = 150;
let velocidadeYOponente;


//placar do jogo 
let meusPontos = 0;
let pontosDoOponente = 0;

let chanceDeErrar = 0;



function setup() {
  createCanvas(600, 400);
}

function draw() {
  background(0);
  mostraBolinha();
  //movimenteBolinha();
  movimentaBolinha(); 
  mostraRaquete(xRaquete, yRaquete);
  movimentaMinhaRaquete();
  mostraRaqueteOponente();
  verificaColisaoRaquete(xRaquete, yRaquete);
  movimentaRaqueteOponente();
  verificaColisaoRaquete(xRaqueteOponente, yRaqueteOponente);
  incluirPlacar();
  marcaPonto();
  calculaChanceDeErrar();
  
  
  if (xBolinha + raio> width ||
     xBolinha - raio< 0){
    velocidadeXBolinha *= -1;
  }
  if (yBolinha + raio> height ||
     yBolinha - raio< 0){
    velocidadeYBolinha *= -1;
  }
}

function mostraBolinha (){
  circle(xBolinha, yBolinha, diametro);
}

function movimentaBolinha(){
  xBolinha += velocidadeXBolinha;
 yBolinha += velocidadeYBolinha;
}

function verificaColisaoBorda(){}

function mostraRaquete(){
  rect(xRaquete, yRaquete, raqueteComprimento, raqueteAltura);
}

function movimentaMinhaRaquete(){
  if (keyIsDown(UP_ARROW)){
    yRaquete -= 10;
  }
  if (keyIsDown(DOWN_ARROW)){
    yRaquete += 10;
 }
}

function verificaColisaoRaquete(){
  if (xBolinha - raio < xRaquete + raqueteComprimento && yBolinha - raio < yRaquete + raqueteAltura && yBolinha + raio > yRaquete ){
    velocidadeXBolinha *= -1;
  }
}

function mostraRaqueteOponente (x,y){
  rect (xRaqueteOponente,yRaqueteOponente, raqueteComprimento, raqueteAltura);
}

function movimentaRaqueteOponente(){
  velocidadeYOponente = yBolinha - yRaqueteOponente - raqueteComprimento / 2 - 30; yRaqueteOponente += velocidadeYOponente
}

function verificaColisaoRaquete(xRaqueteOponente, yRaqueteOponente){

  if (colidiu){
    velocidadeXBolinha *= -1;
  }
}


function incluirPlacar(){
  fill(255);
  text(meusPontos, 278, 26);
  text(pontosDoOponente, 321, 26);
}


function marcaPonto(){
  if (xBolinha > 590){
    meusPontos += 1;
  }
  if (xBolinha < 10){
    pontosDoOponente +=1;
  }
}


function incluirPlacar (){
  stroke(255)
  textAlign(CENTER);
  textSize(16);
  fill(color(255, 140, 0));
  rect(150, 10, 40, 20);
  fill(255);
  text(meusPontos, 170, 26);
  fill(color(255, 140, 0));
  rect(450, 10, 40, 20);
  fill(255)
  text(pontosDoOponente, 470, 26);
}


function movimentaRaqueteOponente(){
  velocidadeYOponente = yBolinha - yRaqueteOponente - raqueteComprimento / 2 - 30;
  yRaqueteOponente += velocidadeYOponente + chanceDeErrar
  calculaChanceDeErrar()
}

function calculaChanceDeErrar(){
  if (pontosDoOponente >= meusPontos){
    chanceDeErrar += 1
    if (chanceDeErrar >= 39){
      chanceDeErrar = 40
    }
  } else {
    chanceDeErrar -= 1
    if(chanceDeErrar <= 35){
      chanceDeErrar = 35
    }
  }
}


function bolinhaNaoFicaPresa(){
  if (XBolinha - raio < 0){
    XBolinha = 23
  }
}



