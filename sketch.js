//namespacing
//criar uma variável de nome menor para referir a algo de nome maior
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint


//variaveis
var engine;
var world;
var corda, fundoImg, frutaImg;
function preload(){
    frutaImg = loadImage("fruta.png");
    fundoImg = loadImage("planodefundo.png");
}

function setup() {
    createCanvas(500, 700);
    //cria o motor
    engine = Engine.create();
    world = engine.world;

    solo = new Solo();
    //criar um objeto da classe 
    fruta = new Fruta(250,300);
    corda = new Corda({x:250, y:100}, fruta.body)

    rectMode(CENTER);
    imageMode(CENTER)
   
}


function draw() {
    background(0);    
    //atualiza o motor
    Engine.update(engine);
    image (fundoImg, width/2, height/2, width, height)
    //pinta o solo
    fill("green");
    
    solo.show();
    corda.criar();
    fruta.show();
}