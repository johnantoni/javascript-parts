// classes

class Rectangle {
  constructor(height, width) {
    this.height = height;
    this.width = width;
  }
}


const p = new Rectangle(2, 2)

console.log(p.height, p.width);

class SuperRectangle extends Rectangle {
  show() {
    console.log(this.height, this.width)
  }
}

const z = new SuperRectangle(3,3)

z.show()
