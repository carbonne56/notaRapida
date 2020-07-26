class Button {

  constructor(name, x, y){
    this.name = name;
    this.x = x;
    this.y = y;
    this.displayButton = true;
  }

  drawButton(){
    let fontSize = 20;
    textSize(fontSize);
    textAlign(CENTER);
    fill(255);
    stroke(0);
    rect(this.x, this.y, 50, 50);
    fill(0);
    text(this.name, this.x + 25, this.y + 25 + fontSize/3);

  }
  buttonClicked(){
    if (mouseX > this.x && mouseX < this.x + 50 &&
        mouseY > this.y && mouseY < this.y + 50 ){
      //console.log("Button " + this.name);
      return this.name;
    }
  }
}
