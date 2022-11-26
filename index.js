// Importing Modules
const express = require('express');

// Creating The App object 
const app = express();

// Making Some useful Middlewares
app.set("view engine", "ejs");
app.use(express.json());
app.use(express.urlencoded({extended: true}));
app.use(express.static("public"));

// Deffining Routes
app.get("/", (req, res) => {
  res.render("index");
});

app.listen(3000, () => {
  console.log(`Server is running on http://localhost:3000`);
})
