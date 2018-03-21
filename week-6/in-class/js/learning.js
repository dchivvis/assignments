// "use strict" tells the browser to enforce some rules about what can be in our JavaScript.
"use strict";

let my_name = "Daniel";
let your_name = "Caligula";

if (your_name === "Daniel") {
  renderOutput("That's me!");
} else if (your_name === "Caligula") {
  renderOutput("That's Caligula!");
}
else {
  renderOutput("I must be someone else");
}

function helloWorld(){
  renderOutput("Hello World");
}

helloWorld();
helloWorld();
helloWorld();

function helloName(name) {
  renderOutput("Hello " + name);
}

helloName("Daniel");
helloName("Caligula");
helloName("Martha");

function todaysHours(one_days_hours) {
  renderOutput(one_days_hours);
}

//todaysHours("Tuesday 9a - 5p");

hours.forEach(todaysHours);






