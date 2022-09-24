const express = require('express');
const app = express();
const bodyParser = require("body-parser");
app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json());
// Perimeter of figures
// square
app.post('/perimeter/square', (req, res) => {
  let side = req.body.side;
  let result = null;
  if (side > 0 && typeof side === "number") {
    result = 4 * side;
    res.send({result});
  } else console.log("Verified the data")

})
//circle
app.post('/perimeter/circle', (req, res) => {
  let radius = req.body.radius;
  let result = null;
  if (radius > 0 && typeof radius === "number") {
    result = 2 * Math.PI * radius;
    res.send({result});
  } else console.log("Verified the data")

})

//retangle
app.post('/perimeter/rectangle', (req, res) => {
  let length = req.body.length;
  let width = req.body.width;
  let result = null;
  if ((length > 0 && typeof length === "number") && (width > 0 && typeof width === "number")) {
    result = (length + width) * 2;
    res.send({result});
  } else console.log("Verified the data")

})
//Trapezium
app.post('/perimeter/trapeze', (req, res) => {
  let side1 = req.body.side1;
  let side2 = req.body.side2;
  let side3 = req.body.side3;
  let side4 = req.body.side4;
  let result = null;
  if ((side1 > 0 && typeof side1 === "number") && (side2 > 0 && typeof side2 === "number")
    && (side3 > 0 && typeof side3 === "number")
    && (side4 > 0 && typeof side4 === "number")
  ) {
    result = side2 + side1 + side4 + side4;
    res.send({result});
  } else console.log("Verified the data")

})
//Area of figures
//Square
app.post('/area/square', (req, res) => {
  let side = req.body.side;
  let result = null;
  if (side > 0 && typeof side === "number") {
    result = side * side;
    res.send({result});
  } else console.log("Verified the data")
})
//circle
app.post('/area/circle', (req, res) => {
  let radius = req.body.radius;
  let result = null;
  if (radius > 0 && typeof radius === "number") {
    result = Math.PI * radius * radius;
    res.send({result});
  } else console.log("Verified the data")
})

//Rectangle
app.post('/area/rectangle', (req, res) => {
  let length = req.body.length;
  let width = req.body.width;
  let result = null;
  if ((length > 0 && typeof length === "number") && (width > 0 && typeof width === "number")) {
    result = (length * width);
    res.send({result});
  } else console.log("Verified the data")
})
//Trapezium
app.post('/area/trapeze', (req, res) => {
  let height = req.body.height;
  let smallBase = req.body.smallBase;
  let bigBase = req.body.bigBase;
  let result = null;
  if ((height > 0 && typeof height === "number") && (smallBase > 0 && typeof smallBase === "number")
    && (bigBase > 0 && typeof bigBase === "number")
  ) {
    result = ((bigBase + smallBase) * height) / 2
    res.send({result});
  } else console.log("Verified the data")

})

//Conversion

//Perimeter and area conversion
app.post('/convert', (req, res) => {
  let result1 = req.body.perimeterValue;
  let conversionType = req.body.selectedUnit;
  let currentUnit = req.body.currentUnit;
  let result = 0;
  if (typeof conversionType == "string" && (result1 > 0 && typeof result1 === "number")) {
    if (conversionType === "centimeter") {
      if (currentUnit === "meter")
        result = result1 * 100;
      else if (currentUnit === "centimeter")
        result = result1;
      else if (currentUnit === "kilometer")
        result = result1 * 100000;
      else if (currentUnit === "decimeter")
        result = result1 * 10;
      else console.log("Choose your current unit") ;
      currentUnit = "centimeter"
      res.status(200).json({result,currentUnit});
    } else if (conversionType === "meter") {
      if (currentUnit === "centimeter")
        result = result1 / 100;
      else if (currentUnit === "meter")
        result = result1;
      else if (currentUnit === "kilometer")
        result = result1 / 100000;
      else if (currentUnit === "decimeter")
        result = result1 * 0.1
      else console.log("Choose your current unit") ;
      currentUnit = "meter"
      res.status(200).json({result,currentUnit});
    } else if (conversionType === "kilometer") {
      if (currentUnit === "centimeter")
        result = result1 / 100000;
      else if (currentUnit === "kilometer")
        result = result1;
      else if (currentUnit === "meter")
        result = result1 / 1000;
      else if (currentUnit === "decimeter")
        result = result1 / 10000;
      else console.log("Choose your current unit") ;
      currentUnit = "kilometer"
      res.status(200).json({result,currentUnit});
    } else if (conversionType === "decimeter") {
      if (currentUnit === "centimeter")
        result = result1 * 0.1;
      else if (currentUnit === "kilometer")
        result = result1 * 10000;
      else if (currentUnit === "meter")
        result = result1 * 10;
      else if (currentUnit === "decimeter")
        result = result1
      else console.log("Choose your current unit") ;
      currentUnit = "decimeter"
      res.status(200).json({result,currentUnit});
    }
    res.send({result});
  } else console.log("Verified the data");
})
app.listen(3000, (req, res) => {
  console.log('Express api is running at port 3000');
})
