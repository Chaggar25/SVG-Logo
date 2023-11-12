const inquirer = require("inquirer");
const fs = require("fs");
const { Triangle, Square, Circle } = require("./Develop/lib/shapes");

function writeToFile(fileName, answers) {
  let svgString = "";

  svgString =
    '<svg version="1.1" width="300" height="200" xmlns="http://www.w3.org/2000/svg">';

  svgString += "<g>";
  svgString += `${answers.shape}`;

  let shapeChoice;
  if (answers.shape === "Triangle") {
    shapeChoice = new Triangle();
    svgString += `<polygon points="150, 18 244, 182 56, 182" fill="${answers.shapeBackgroundColor}"/>`;
  } else if (answers.shape === "Square") {
    shapeChoice = new Square();
    svgString += `<rect x="73" y="40" width="160" height="160" fill="${answers.shapeBackgroundColor}"/>`;
  } else {
    shapeChoice = new Circle();
    svgString += `<circle cx="150" cy="125" r="80" fill="${answers.shapeBackgroundColor}"/>`;
  }

  svgString += `<text x="150" y="130" text-anchor="middle" font-size="40" fill="${answers.textColor}">${answers.text}</text>`;
  svgString += "</g>";
  svgString += "</svg>";

  
  fs.writeFile(fileName, svgString, (err) => {
    err ? console.log(err) : console.log("Generated logo.svg");
  });
}


function questions() {
    inquirer
      .prompt([
   
        {
          type: "input",
          message:
            "What is the text you would like to be displayed in your logo? (Enter up to three characters)",
          name: "text",
        },
     
        {
          type: "input",
          message:
            "What color should the text be?",
          name: "textColor",
        },
    
        {
          type: "list",
          message: "What shape would you like the logo to have?",
          choices: ["Triangle", "Square", "Circle"],
          name: "shape",
        },
        
        {
          type: "input",
          message:
            "What color should the selected shape have?",
          name: "shapeBackgroundColor",
        },
      ])
      .then((answers) => {
      
        if (answers.text.length > 3) {
          console.log("Must enter a value of no more than 3 characters");
          questions();
        } else {
         
          writeToFile("logo.svg", answers);
        }
      });
  }
  
 
  questions();