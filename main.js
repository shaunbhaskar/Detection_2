img="";
status="";

function setup()
{canvas=createCanvas(640,420);
canvas.center();
objectDetector=ml5.objectDetector('cocossd',modalLoaded);
document.getElementById("status").innerHTML="Status : Detecting Objects";}

function preload()
{img=loadImage("dog_cat.jpg");}

function draw()
{image(img,0,0,640,420);
fill("#0f07f7");
text("Dog",45,75);
noFill();
stroke("#0f07f7");
rect(30,60,450,350);

fill("#fa1505");
text("Cat",320,120);
noFill();
stroke("#fa1505");
rect(300,90,270,320);}

function modalLoaded()
{console.log("modalloaded");
status="true"
objectDetector.detect(img,gotResult);}

function gotResult(error,results)
{if(error)
{console.log(error);}
console.log(results);}