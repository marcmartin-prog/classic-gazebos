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
      }
    ],

};


const furniturePriceDropdown = document.getElementById('furniture-price');

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
