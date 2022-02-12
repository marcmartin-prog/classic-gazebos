//jshint esversion:6


let prices = {
    "classic": {
        "octagon": {
              "8x8":{
                "price":2690,
                "double": 3177,
                "sealed": 294,
                "screened": 884,
                "benches": 123
              },
              "10x10":{
                "price":3235,
                "double": 3754,
                "sealed": 324,
                "screened": 974,
                "benches":145
              },
              "12x12":{
                "price":3884,
                "double": 4532,
                "sealed": 359,
                "screened": 1078,
                "benches": 179
              },
              "14x14":{
                "price":4792,
                "double": 5608,
                "sealed": 448,
                "screened": 1273,
                "benches": 212
              }

            },

            "oval": {
                  "8x12":{
                    "price":3469,
                    "double": 3699,
                    "sealed": 324,
                    "screened": 974,
                    "benches": 22.5
                  },
                  "10x12":{
                    "price":4142,
                    "double": 4791,
                    "sealed": 359,
                    "screened": 1149,
                    "benches":34
                  },
                  "10x16":{
                    "price":4922,
                    "double": 5608,
                    "sealed": 448,
                    "screened": 1273,
                    "benches": 34
                  },
                  "10x20":{
                    "price":5479,
                    "double": 6257,
                    "sealed": 532,
                    "screened": 1461,
                    "benches": 34
                  },
                  "12x16":{
                    "price":5511,
                    "double": 6348,
                    "sealed": 532,
                    "screened": 1461,
                    "benches":40
                  },
                  "12x18":{
                    "price":5933,
                    "double": 6905,
                    "sealed": 560,
                    "screened": 1573,
                    "benches": 40
                  },
                  "12x20":{
                    "price":6478,
                    "double": 7456,
                    "sealed": 583,
                    "screened": 1680,
                    "benches": 40
                  }
                }
              },
    "economy": {
                    "octagon": {
                          "8x8":{
                            "price":2042,
                            "double": 2399,
                            "sealed": 294,
                            "screened": 884,
                            "benches": 112
                          },
                          "10x10":{
                            "price":2458,
                            "double": 2847,
                            "sealed": 324,
                            "screened": 974,
                            "benches":136
                          },
                          "12x12":{
                            "price":2951,
                            "double": 3436,
                            "sealed": 359,
                            "screened": 1078,
                            "benches": 171
                          },
                          "14x14":{
                            "price":3884,
                            "double": 4506,
                            "sealed": 448,
                            "screened": 1273,
                            "benches": 207
                          }

                        },

                        "oval": {
                              "8x12":{
                                "price":2587,
                                "double": 3144,
                                "sealed": 324,
                                "screened": 972,
                                "benches": 22.5
                              },
                              "10x12":{
                                "price":3365,
                                "double": 3884,
                                "sealed": 359,
                                "screened": 1149,
                                "benches":30
                              },
                              "10x16":{
                                "price":3567,
                                "double": 4157,
                                "sealed": 442,
                                "screened": 1273,
                                "benches": 30
                              },
                              "10x20":{
                                "price":4402,
                                "double": 5025,
                                "sealed": 53,
                                "screened": 1461,
                                "benches": 30
                              },
                              "12x16":{
                                "price":4442,
                                "double": 4992,
                                "sealed": 530,
                                "screened": 1461,
                                "benches": 35
                              },
                              "12x18":{
                                "price":4766,
                                "double": 5608,
                                "sealed": 560,
                                "screened": 1573,
                                "benches": 35
                              },
                              "12x20":{
                                "price":5252,
                                "double": 6031,
                                "sealed": 583,
                                "screened": 1680,
                                "benches": 35
                              }
                            },
                  }
};

const priceEl = document.getElementById("price-number");
const styleSelect = document.getElementById("style");
const shapeSelect = document.getElementById("shape");
const sizeSelect = document.getElementById("size");
const roofSelect = document.getElementById("roof");
const sealedSelect = document.getElementById("sealed");



// modifies the query after a user selects a shape and fills the size dropdown
const shapePrice = function () {
  let option;
  if(shapeSelect.value == "octagon"){
    sizeSelect.length = 1;
    sizeSelect.selectedindex = 1;
    option = document.createElement('option');
    option.text = '8x8';
    option.value = '8x8';
    sizeSelect.add(option);
    option = document.createElement('option');
    option.text = '10x10';
    option.value = '10x10';
    sizeSelect.add(option);
    option = document.createElement('option');
    option.text = '12x12';
    option.value = '12x12';
    sizeSelect.add(option);
    option = document.createElement('option');
    option.text = '14x14';
    option.value = '14x14';
    sizeSelect.add(option);
  } else if(shapeSelect.value == 'oval'){
    sizeSelect.length = 1;
    sizeSelect.selectedindex = 1;
    option = document.createElement('option');
    option.text = '8x12';
    option.value = '8x12';
    sizeSelect.add(option);
    option = document.createElement('option');
    option.text = '10x12';
    option.value = '10x12';
    sizeSelect.add(option);
    option = document.createElement('option');
    option.text = '10x16';
    option.value = '10x16';
    sizeSelect.add(option);
    option = document.createElement('option');
    option.text = '10x20';
    option.value = '10x20';
    sizeSelect.add(option);
    option = document.createElement('option');
    option.text = '12x16';
    option.value = '12x16';
    sizeSelect.add(option);
    option = document.createElement('option');
    option.text = '12x18';
    option.value = '12x18';
    sizeSelect.add(option);
    option = document.createElement('option');
    option.text = '12x20';
    option.value = '12x20';
    sizeSelect.add(option);
  }
};

//calculates the base price from the sizePrice
const sizePrice = function(){
  let price = prices[styleSelect.value][shapeSelect.value][sizeSelect.value].price;
  priceEl.innerText = price;
};


const roofPrice = function(){
  if( roofSelect.value == "double"){
    let price = prices[styleSelect.value][shapeSelect.value][sizeSelect.value].double;
    priceEl.innerText = price;
  } else{
    let price = prices[styleSelect.value][shapeSelect.value][sizeSelect.value].price;
    priceEl.innerText = price;
  }
};

const sealedPrice = function(){
  if (sealedSelect.value == "Yes"){
     let price = prices[styleSelect.value][shapeSelect.value][sizeSelect.value][roofSelect.value];
     let sealingPrice = prices[styleSelect.value][shapeSelect.value][sizeSelect.value].sealed;
     let sealedPriceTotal = price + sealingPrice;
     priceEl.innerText = sealedPriceTotal;
   } else{
      let price = prices[styleSelect.value][shapeSelect.value][sizeSelect.value][roofSelect.value];
      priceEl.innerText = price;
   }
};
