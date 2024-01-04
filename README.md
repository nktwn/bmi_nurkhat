# BMI Calculator by Nurkhat

## How to install
1. Download the project from Github
2. Install dependencies using `npm install`.
3. Start a local server using `node root.js`.
4. Open your browser and go to [http://localhost:3000/]

```console
Important note: The server runs on port 3000 and to avoid conflicts 
due to usage over the same port 3000, you should remove other 
projects that use port 3000 or use a different port in them.
```

## Description of my project
This project implements a simple BMI calculator with a convenient user interface. Based on weight, height, age and gender, BMI is calculated, as well as one of four results: `Underweight`, `Normal weight`, `Overweight`, `Obesity`. All parameters are taken into account in the calculations and, for example, depending on age or gender, different coefficients are used in the formula.

## Structure of project
```console
/bmi_nurkhat
  ├── /public
  │   ├── /css
  │   │   └── style.css
  │   ├── /js
  │   │   └── script.js
  ├── /routes
  │   └── bmiRoutes.js
  ├── /views
  │   └── calculator.html
  ├── package.json
  ├── package-lock.json
  ├── README.md
  └── root.js
```

## Dependencies and npm packets 
1. express: Web application framework for Node.js
2. body-parser: Middleware to parse incoming request bodies
3. Bootstrap: Front-end framework for styling
4. jQuery: JavaScript library for DOM manipulation
5. Popper.js: Dependency for Bootstrap's dropdowns