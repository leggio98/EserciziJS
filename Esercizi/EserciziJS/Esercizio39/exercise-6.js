class Square {
  constructor(side) {
    this.side = side;
  }
}

class Rectangle {
  constructor(width, height) {
    this.width = width;
    this.height = height;
  }
}

class Circle {
  constructor(radius) {
    this.radius = radius;
  }
}

class AreaCalculator {
  static calculate(object) {
     if (object.side) {
       return object.side ** 2
     } else if (object.radius) {
       return (object.radius ** 2) * Math.PI
     } else if (object.width && object.height) {
       return object.width * object.height
     }
     }
   }


const square = new Square(4);
const rectangle = new Rectangle(4, 2);
const circle = new Circle(5);

console.log(AreaCalculator.calculate(square));
console.log(AreaCalculator.calculate(rectangle));
console.log(AreaCalculator.calculate(circle));

const circle2 = new Circle(24900);

console.log(AreaCalculator.calculate(circle2));