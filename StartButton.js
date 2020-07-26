
class StartButton {

  constructor(showStartButton, buttonX, buttonY){
    this.showStartButton = showStartButton;
    this.buttonWidth = 100;
    this.buttonHeight = 40;

    this.buttonX = buttonX/2 - this.buttonWidth/2;
    this.buttonY = buttonY/2 - this.buttonHeight/2;
    //console.log(this.buttonWidth/2);
  }

  drawButton(fWidth, fHeight){

    if (showStartButton){

        var fontSize = 20;

      if (this.buttonHovered()){
        fill(137, 255, 64);

      } else {
        fill(60, 155, 64);

      }

      rect(this.buttonX, this.buttonY,
           this.buttonWidth, this.buttonHeight);
      fill(255,255,255);
      textSize(fontSize);
      textAlign(CENTER, CENTER);
      text("Start",width/2, height/2);
    }
  }

  /*buttonClicked(){
    if (buttonHovered()){
      return true;
    }
  }*/


  buttonHovered(){
    if (mouseX > this.buttonX &&
        mouseX < this.buttonX + this.buttonWidth &&
        mouseY > this.buttonY &&
        mouseY < this.buttonY + this.buttonHeight){
      return true;
    }
      return false;
  }

  toggleButton(){
    showStartButton = !showStartButton;
  }
}
