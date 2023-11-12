class Shape {
    constructor() {
      this.color = "white"; 
    }
  
    setColor(color) {
      this.color = color;
    }
  }
  
  class Circle extends Shape {
    constructor(cx = 150, cy = 100, r = 80) {
      super();
      this.cx = cx;
      this.cy = cy;
      this.r = r;
    }
  
    render() {
      return `<circle cx="${this.cx}" cy="${this.cy}" r="${this.r}" fill="${this.color}" />`;
    }
  }
  
  class Triangle extends Shape {
    constructor() {
      super();
      this.points = "150, 18 244, 182 56, 182";
    }
  
    render() {
      return `<polygon points="${this.points}" fill="${this.color}" />`;
    }
  }
  
  class Square extends Shape {
    constructor(x = 90, y = 40, width = 120, height = 120) {
      super();
      this.x = x;
      this.y = y;
      this.width = width;
      this.height = height;
    }
  
    render() {
      return `<rect x="${this.x}" y="${this.y}" width="${this.width}" height="${this.height}" fill="${this.color}" />`;
    }
  }
  
  module.exports = {
    Square: Square,
    Triangle: Triangle,
    Circle: Circle
  };