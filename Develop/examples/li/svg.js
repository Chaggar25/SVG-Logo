class SVG {
    constructor(width = 300, height = 200) {
      this.width = width;
      this.height = height;
      this.textElement = null;
      this.shapeElement = null;
    }
  
    setText(text, color) {
      if (text.length > 3) {
        throw new Error("Text must not exceed 3 characters.");
      }
  
      this.textElement = {
        content: text,
        color: color,
        x: this.width / 2,
        y: (this.height / 2) + (60 / 3) + 5,



 
        fontSize: 60,
        anchor: 'middle'
      };
    }
  
    setShape(shape) {
      this.shapeElement = shape;
    }
  
    render() {
      let svgContent = `<svg version="1.1" width="${this.width}" height="${this.height}" xmlns="http://www.w3.org/2000/svg">`;
  
      if (this.shapeElement) {
        svgContent += this.shapeElement.render();
      }
  
      if (this.textElement) {
        svgContent += `<text x="${this.textElement.x}" y="${this.textElement.y}" font-size="${this.textElement.fontSize}" text-anchor="${this.textElement.anchor}" fill="${this.textElement.color}">${this.textElement.content}</text>`;
      }
  
      svgContent += '</svg>';
  
      return svgContent;
    }
  }
  
  class Square {
    constructor(x = 90, y = 40, width = 120, height = 120) {
      this.x = x;
      this.y = y;
      this.width = width;
      this.height = height;
      this.color = 'white'; 
    }
  
    setColor(color) {
      this.color = color;
    }
  
    render() {
      return `<rect x="${this.x}" y="${this.y}" width="${this.width}" height="${this.height}" fill="${this.color}" />`;
    }
  }
  
  module.exports = 
    SVG;