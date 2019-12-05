'use strict'
function Rectangle(width, height, units) {
  this.width = width;
  this.height = height;
  this.units = units;
  this.info = function() {
  return 'ширина: ' + this.width + this.units + '., высота: ' + this.height + this.units + '.';
  }
}

function getArea() {
  return 'площадь: ' + this.width*this.height;
}

function getPerimetr() {
return 'Периметр: ' + (this.width+this.height)*2;
}


let rectangle = new Rectangle(54,45,'см');

rectangle.info();
getArea.call(rectangle);
getPerimetr.call(rectangle);
