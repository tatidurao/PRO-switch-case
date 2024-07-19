var input,heading;


function setup() 
{
  createCanvas(400, 400);
  background(178,255,102);
  
  //criar caixa de texto
  input = createInput();
  //posicionar
  input.position(5,50);
  
  heading = createElement('h4', 'Insira qualquer letra do Alfabeto');
  heading.position(5,1);

 textAlign(CENTER);
 textSize(50);
 
}

function draw() {

  
}

