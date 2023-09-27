
function setup() {
  createCanvas(windowWidth, windowHeight);
  fill(255)
  print(millis())


}

//function update(){}

function draw(){
  background('darkblue')
  print(frameCount)
  if(millis()>2000){
  background('darkred')
  }

  let secondsNow = second()
  let mydiameter = map(secondsNow, 0, 59, 100, height)
  ellipse(width/2, height/2, mydiameter, mydiameter)

}

