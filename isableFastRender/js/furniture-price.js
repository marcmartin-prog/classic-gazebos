//jshint esversion: 6

let prices = {
    "furniture":[
      {
        "id": "4swing",
        "name": "4 ft Swing or Bench",
        "price": 214
      },
      {
        "id": "5swing",
        "name": "5ft Swing or Bench",
        "price": 242
      },
      {
        "id": "6swing",
        "name": "6ft Swing or Bench",
        "price": 277
      },
      {
        "id": "2chair",
        "name": "2ft Chair",
        "price": 127
      },
      {
        "id": "2glider",
        "name": "2ft Glider",
        "price": 214
      },
      {
        "id": "4glider",
        "name": "4ft Glider",
        "price": 323
      },
      {
        "id": "5glider",
        "name": "5ft Glider",
        "price": 387
      },
      {
        "id": "6glider",
        "name": "6ft glider",
        "price": 438
      },
      {
        "id": "snackglider",
        "name": "Snack Glider",
        "price": 468
      },
      {
        "id": "minitable",
        "name": "Mini Table",
        "price": 104
      },
      {
        "id": "childtable",
        "name": "Child's Table",
        "price": 150
      },
      {
        "id": "5table",
        "name": "5ft Picnic Table",
        "price": 184
      },
      {
        "id": "6table",
        "name": "6ft Picnic Table",
        "price": 196
      },
      {
        "id": "7table",
        "name": "7ft Picnic Table",
        "price": 224
      },
      {
        "id": "4arbor",
        "name": "4ft Arbor",
        "price": 219
      },
      {
        "id": "5arbor",
        "name": "5ft Arbor",
        "price": 276
      },
      {
        "id": "6arbor",
        "name": "6ft Arbor",
        "price": 323
      },
      {
        "id": "7arbor",
        "name": "7ft Arbor",
        "price": 386
      },
      {
        "id": "8arbor",
        "name": "8ft Arbor",
        "price": 438
      },
      {
        "id": "wishingwell",
        "name": "Wishing Well",
        "price": 334
      },
      {
        "id": "6bridge",
        "name": "6ft Lawn Bridge",
        "price": 311
      },
      {
        "id": "8bridge",
        "name": "8ft Lawn Bridge",
        "price": 415
      },
      {
        "id": "10bridge",
        "name": "10ft Lawn Bridge",
        "price": 496
      },
      {
        "id": "12bridge",
        "name": "12ft Lawn Bridge",
        "price": 600
      }

    ],

};


const furniturePriceDropdown = document.getElementById('furniture-price');
const priceEl = document.getElementById('price-number');
const furnitureName = document.getElementById('furniture-name');

let defaultOption = document.createElement('option');
defaultOption.text = 'Choose Furniture';

furniturePriceDropdown.add(defaultOption);
furniturePriceDropdown.selectedIndex = 0;

function populateDropdown(){
  let option;
  for(let i = 0; i < prices.furniture.length; i ++){
    option = document.createElement('option');
    option.text = prices.furniture[i].name;
    option.value = [i];
    furniturePriceDropdown.add(option);
  }
}

populateDropdown();

const furniturePrice = function(){
  priceEl.innerText = prices.furniture[furniturePriceDropdown.value].price;
  furnitureName.value = prices.furniture[furniturePriceDropdown.value].name;
};
