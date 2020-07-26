class Note {

  constructor(name, x, y, reversed){
    this.sminima = loadImage("images/sminima.png");
    this.invSminima = loadImage("images/sminimaInvertida.png");
    this.name = name;
    this.x = x;
    this.y = y;
    this.reversed = reversed;

  }

  drawNote(){

    if (this.reversed){
      image(this.invSminima,this.x, this.y + 150, 50, 150);

    }
    else {
      image(this.sminima,this.x, this.y, 50, 150);
    }
  }
}
