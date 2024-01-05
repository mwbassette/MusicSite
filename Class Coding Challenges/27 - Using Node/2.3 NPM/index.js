// var generateName = require("sillyname");

import generateName from "sillyname";
var sillyName = generateName();

import superheroes from "superheroes";
// superheroes.all;
// superheroes.random();

console.log(`Welcome to my wacky world! My name is ${superheroes.random()}, but you can call me ${sillyName}.`);