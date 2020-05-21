const express = require("express");
const exphb = require("express-handlebars");
const app = express();
const PORT = process.env.PORT || 8080;

// set handlebars as template engine
app.engine("handlebars", exphb({ defaultLayout: "main"}));
app.set("view engine", "handlebars");


const icecreams = [
  {name: 'vanilla', price: 10, awesomeness: 3},
  {name: 'chocolate', price: 4, awesomeness: 8},
  {name: 'banana', price: 1, awesomeness: 1},
  {name: 'greentea', price: 5, awesomeness: 7},
  {name: 'jawbreakers', price: 6, awesomeness: 2},
  { name: "pistachio", price: 11, awesomeness: 15 }
];

//Route that displays the name, price and awesomeness for that specific ice cream.
app.get("/icecream/:name", (req, res) => {
  let name = req.params.name;
  // cmd + k left/right to switch editors
  let thing = [];
  icecreams.forEach(flavor => {
    if (flavor.name === name) {
      console.log(flavor);
      thing.push(flavor);
    }
  });
  res.render("ice-cream", {
    specific: name,
    icecream: thing
  });
})

// /icecreams route loops over all the ice creams and displays them to the user.
app.get("/icecreams", (req, res) => {
  res.render("ice-cream", { flavor: icecreams } )
});

app.listen(PORT, () => console.log(`listening on http://localhost:${PORT}`));