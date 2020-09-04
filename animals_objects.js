"use strict";

window.addEventListener("DOMContentLoaded", start);

const allAnimals = [];

const Animal = {
  name: "",
  type: "",
  desc: "",
  age: 0,
};

function start() {
  console.log("ready");

  loadJSON();
}

function loadJSON() {
  fetch("animals.json")
    .then((response) => response.json())
    .then((jsonData) => {
      // when loaded, prepare objects
      prepareObjects(jsonData);
    });
}

function prepareObjects(jsonData) {
  jsonData.forEach((jsonObject) => {
    // TODO: Create new object with cleaned data - and store that in the allAnimals array
    const animal = Object.create(Animal);

    const fullName = jsonObject.fullname;
    // console.log(fullName);
    const splitted = fullName.split(" ");
    // console.log(splitted);
    const name = splitted[0];
    // console.log(name);
    const type = splitted[3];
    // console.log(type);
    const desc = splitted[2];
    console.log("Desc", desc);

    const age = jsonObject.age;

    // TODO: MISSING CODE HERE !!!

    animal.name = name;
    console.log("Name: ", name);
    animal.type = type;
    console.log("Type", type);
    animal.desc = desc;
    console.log("Desc", desc);
    animal.age = age;
    console.log("Age", age);

    allAnimals.push(animal);
  });

  displayList();
}

function displayList() {
  // clear the list
  document.querySelector("#list tbody").innerHTML = "";

  // build a new list
  allAnimals.forEach(displayAnimal);
}

function displayAnimal(animal) {
  // create clone
  const clone = document
    .querySelector("template#animal")
    .content.cloneNode(true);

  // set clone data
  clone.querySelector("[data-field=name]").textContent = animal.name;
  clone.querySelector("[data-field=desc]").textContent = animal.desc;
  clone.querySelector("[data-field=type]").textContent = animal.type;
  clone.querySelector("[data-field=age]").textContent = animal.age;

  // append clone to list
  document.querySelector("#list tbody").appendChild(clone);
}
