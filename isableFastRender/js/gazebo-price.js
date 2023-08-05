//jshint esversion:6


let prices = {
    "classic": {
        "octagon": {
              "8x8":{
                "single":2690,
                "double": 3177,
                "sealed": 294,
                "screened": 884,
                "benches": 123,
                "spiral": 500
              },
              "10x10":{
                "single":3235,
                "double": 3754,
                "sealed": 324,
                "screened": 974,
                "benches":145,
                "spiral": 550
              },
              "12x12":{
                "single":3884,
                "double": 4532,
                "sealed": 359,
                "screened": 1078,
                "benches": 179,
                "spiral": 700
              },
              "14x14":{
                "single":4792,
                "double": 5608,
                "sealed": 448,
                "screened": 1273,
                "benches": 212,
                "spiral": 900
              }

            },

            "oval": {
                  "8x12":{
                    "single":3469,
                    "double": 3699,
                    "sealed": 324,
                    "screened": 974,
                    "benches": 22.5,
                    "spiral": 675
                  },
                  "10x12":{
                    "single":4142,
                    "double": 4791,
                    "sealed": 359,
                    "screened": 1149,
                    "benches":34,
                    "spiral": 750
                  },
                  "10x16":{
                    "single":4922,
                    "double": 5608,
                    "sealed": 448,
                    "screened": 1273,
                    "benches": 34,
                    "spiral": 800
                  },
                  "10x20":{
                    "single":5479,
                    "double": 6257,
                    "sealed": 532,
                    "screened": 1461,
                    "benches": 34,
                    "spiral": 925
                  },
                  "12x16":{
                    "single":5511,
                    "double": 6348,
                    "sealed": 532,
                    "screened": 1461,
                    "benches":40,
                    "spiral": 1000
                  },
                  "12x18":{
                    "single":5933,
                    "double": 6905,
                    "sealed": 560,
                    "screened": 1573,
                    "benches": 40,
                    "spiral": 1100
                  },
                  "12x20":{
                    "single":6478,
                    "double": 7456,
                    "sealed": 583,
                    "screened": 1680,
                    "benches": 40,
                    "spiral": 1300
                  }
                }
              },
    "economy": {
                    "octagon": {
                          "8x8":{
                            "single":2042,
                            "double": 2399,
                            "sealed": 294,
                            "screened": 884,
                            "benches": 112
                          },
                          "10x10":{
                            "single":2458,
                            "double": 2847,
                            "sealed": 324,
                            "screened": 974,
                            "benches":136
                          },
                          "12x12":{
                            "single":2951,
                            "double": 3436,
                            "sealed": 359,
                            "screened": 1078,
                            "benches": 171
                          },
                          "14x14":{
                            "single":3884,
                            "double": 4506,
                            "sealed": 448,
                            "screened": 1273,
                            "benches": 207
                          }

                        },

                        "oval": {
                              "8x12":{
                                "single":2587,
                                "double": 3144,
                                "sealed": 324,
                                "screened": 972,
                                "benches": 22.5
                              },
                              "10x12":{
                                "single":3365,
                                "double": 3884,
                                "sealed": 359,
                                "screened": 1149,
                                "benches":30
                              },
                              "10x16":{
                                "single":3567,
                                "double": 4157,
                                "sealed": 442,
                                "screened": 1273,
                                "benches": 30
                              },
                              "10x20":{
                                "single":4402,
                                "double": 5025,
                                "sealed": 53,
                                "screened": 1461,
                                "benches": 30
                              },
                              "12x16":{
                                "single":4442,
                                "double": 4992,
                                "sealed": 530,
                                "screened": 1461,
                                "benches": 35
                              },
                              "12x18":{
                                "single":4766,
                                "double": 5608,
                                "sealed": 560,
                                "screened": 1573,
                                "benches": 35
                              },
                              "12x20":{
                                "single":5252,
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
const screenedSelect = document.getElementById("screened");
const benchesSelect = document.getElementById("benches");
const floorSelect = document.getElementById('floor');


//allows for a customer to price multiple options correctly. resets pricing if a higher level parameter is changed
function resetPricing(i){
  sessionStorage.setItem("pricedFloor", false);
  var elements = document.getElementsByTagName('select');
  for ( i = i; i < elements.length; i++)
    {
    elements[i].selectedIndex = 0;
    }

  priceEl.innerText = 0;
}


//resets pricing if you change a parameter
const stylePrice = function(){
  resetPricing(1);
};
// modifies the query after a user selects a shape and fills the size dropdown
const shapePrice = function () {
  resetPricing(2);
  let option;
  let benches;
  if(shapeSelect.value == "octagon"){
    sizeSelect.length = 1;
    benchesSelect.length = 1;
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
    benches  = document.createElement('option');
    benches.text = "Benches";
    benches.value = "benches";
    benchesSelect.add(benches);
    benches  = document.createElement('option');
    benches.text = "No Benches";
    benches.value = "no-benches";
    benchesSelect.add(benches);

  } else if(shapeSelect.value == 'oval'){
    sizeSelect.length = 1;
    benchesSelect.length = 1;
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
    benches  = document.createElement('option');
    benches.text = "No Benches";
    benches.value = "0";
    benchesSelect.add(benches);
    benches  = document.createElement('option');
    benches.text = "1 Section";
    benches.value = "1";
    benchesSelect.add(benches);
    benches  = document.createElement('option');
    benches.text = "2 Sections";
    benches.value = "2";
    benchesSelect.add(benches);
    benches  = document.createElement('option');
    benches.text = "3 Sections";
    benches.value = "3";
    benchesSelect.add(benches);
    benches  = document.createElement('option');
    benches.text = "4 Sections";
    benches.value = "4";
    benchesSelect.add(benches);
  }
};

//calculates the base price from the sizePrice
const sizePrice = function(){
  resetPricing(3);
  let price = prices[styleSelect.value][shapeSelect.value][sizeSelect.value].single;
  priceEl.innerText = price;
};


const roofPrice = function(){
  resetPricing(4);
  if( roofSelect.value == "double"){
    let price = prices[styleSelect.value][shapeSelect.value][sizeSelect.value].double;
    priceEl.innerText = price;
  } else{
    let price = prices[styleSelect.value][shapeSelect.value][sizeSelect.value].single;
    priceEl.innerText = price;
  }
};

const sealedPrice = function(){
  resetPricing(5);
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

const screenPrice = function(){
  resetPricing(6);
  if (screenedSelect.value == "Yes"){
     let price = prices[styleSelect.value][shapeSelect.value][sizeSelect.value][roofSelect.value];
     let sealingPrice = prices[styleSelect.value][shapeSelect.value][sizeSelect.value].sealed;
     let screeningPrice = prices[styleSelect.value][shapeSelect.value][sizeSelect.value].screened;
     if (sealedSelect.value == "Yes"){
       let screenedPriceTotal = price + sealingPrice + screeningPrice;
       priceEl.innerText = screenedPriceTotal;
     } else{
       let screenedPriceTotal = price + screeningPrice;
       priceEl.innerText = screenedPriceTotal;
     }

   } else{
      let price = prices[styleSelect.value][shapeSelect.value][sizeSelect.value][roofSelect.value];
      if (sealedSelect.value == "Yes"){
        let sealingPrice = prices[styleSelect.value][shapeSelect.value][sizeSelect.value].sealed;
        let screenedPriceTotal = price + sealingPrice;
        priceEl.innerText = screenedPriceTotal;
      } else{
        let screenedPriceTotal = price;
        priceEl.innerText = screenedPriceTotal;
      }
   }
};

const benchPrice = function(){
  resetPricing(7);
  if(shapeSelect.value == "octagon"){
    if (screenedSelect.value == "Yes"){
      let price = prices[styleSelect.value][shapeSelect.value][sizeSelect.value][roofSelect.value];
      let sealingPrice = prices[styleSelect.value][shapeSelect.value][sizeSelect.value].sealed;
      let screeningPrice = prices[styleSelect.value][shapeSelect.value][sizeSelect.value].screened;
      let benchesPrice = prices[styleSelect.value][shapeSelect.value][sizeSelect.value].benches;
       if (sealedSelect.value == "Yes"){
         if(benchesSelect.value == "benches"){
           let screenedPriceTotal = price + sealingPrice + screeningPrice + benchesPrice;
           priceEl.innerText = screenedPriceTotal;
         }else{
           let screenedPriceTotal = price + sealingPrice + screeningPrice;
           priceEl.innerText = screenedPriceTotal;
         }
       } else{
         let screenedPriceTotal = price + screeningPrice;
         priceEl.innerText = screenedPriceTotal;
       }

     } else{
        let price = prices[styleSelect.value][shapeSelect.value][sizeSelect.value][roofSelect.value];
        if (sealedSelect.value == "Yes"){
          let price = prices[styleSelect.value][shapeSelect.value][sizeSelect.value][roofSelect.value];
          let sealingPrice = prices[styleSelect.value][shapeSelect.value][sizeSelect.value].sealed;
          let benchesPrice = prices[styleSelect.value][shapeSelect.value][sizeSelect.value].benches;
          if(benchesSelect.value == "benches"){
            let screenedPriceTotal = price + sealingPrice + benchesPrice;
            priceEl.innerText = screenedPriceTotal;
          }else{
            let screenedPriceTotal = price + sealingPrice;
            priceEl.innerText = screenedPriceTotal;
          }
          let screenedPriceTotal = price + sealingPrice;
          priceEl.innerText = screenedPriceTotal;
        } else{
          if(benchesSelect.value == "benches"){
            let price = prices[styleSelect.value][shapeSelect.value][sizeSelect.value][roofSelect.value];
            let benchesPrice = prices[styleSelect.value][shapeSelect.value][sizeSelect.value].benches;
            let screenedPriceTotal = price + benchesPrice;
            priceEl.innerText = screenedPriceTotal;
          }else{
            let screenedPriceTotal = price;
            priceEl.innerText = screenedPriceTotal;
          }
        }
     }
  }else{
    if (screenedSelect.value == "Yes"){
      let price = prices[styleSelect.value][shapeSelect.value][sizeSelect.value][roofSelect.value];
      let sealingPrice = prices[styleSelect.value][shapeSelect.value][sizeSelect.value].sealed;
      let screeningPrice = prices[styleSelect.value][shapeSelect.value][sizeSelect.value].screened;
      let benchesPrice = prices[styleSelect.value][shapeSelect.value][sizeSelect.value].benches;
       if (sealedSelect.value == "Yes"){
         if(benchesSelect.value >= 1){
           let price = prices[styleSelect.value][shapeSelect.value][sizeSelect.value][roofSelect.value];
           let sealingPrice = prices[styleSelect.value][shapeSelect.value][sizeSelect.value].sealed;
           let screeningPrice = prices[styleSelect.value][shapeSelect.value][sizeSelect.value].screened;
           let benchesPrice = prices[styleSelect.value][shapeSelect.value][sizeSelect.value].benches;
           let screenedPriceTotal = price + sealingPrice + screeningPrice + (benchesPrice * benchesSelect.value);
           priceEl.innerText = screenedPriceTotal;
         }else{
           let screenedPriceTotal = price + sealingPrice + screeningPrice;
           priceEl.innerText = screenedPriceTotal;
         }
       } else{
         let screenedPriceTotal = price + screeningPrice;
         priceEl.innerText = screenedPriceTotal;
       }

     } else{
        let price = prices[styleSelect.value][shapeSelect.value][sizeSelect.value][roofSelect.value];
        if (sealedSelect.value == "Yes"){
          let price = prices[styleSelect.value][shapeSelect.value][sizeSelect.value][roofSelect.value];
          let sealingPrice = prices[styleSelect.value][shapeSelect.value][sizeSelect.value].sealed;
          let benchesPrice = prices[styleSelect.value][shapeSelect.value][sizeSelect.value].benches;
          if(benchesSelect.value >= 1){
            let price = prices[styleSelect.value][shapeSelect.value][sizeSelect.value][roofSelect.value];
            let sealingPrice = prices[styleSelect.value][shapeSelect.value][sizeSelect.value].sealed;
            let screeningPrice = prices[styleSelect.value][shapeSelect.value][sizeSelect.value].screened;
            let benchesPrice = prices[styleSelect.value][shapeSelect.value][sizeSelect.value].benches;
            let screenedPriceTotal = price + sealingPrice + (benchesPrice * benchesSelect.value);
            console.log(screenedPriceTotal);
            priceEl.innerText = screenedPriceTotal;
            console.log(priceEl.innerText);
            console.log("done");
          }else{
            let screenedPriceTotal = price + sealingPrice;
            priceEl.innerText = screenedPriceTotal;
          }
        //  let screenedPriceTotal = price + sealingPrice;
        //  priceEl.innerText = screenedPriceTotal;
        } else{
          if(benchesSelect.value >= 1){
            let benchesPrice = prices[styleSelect.value][shapeSelect.value][sizeSelect.value].benches;
            let screenedPriceTotal = price + (benchesPrice * benchesSelect.value);
            priceEl.innerText = screenedPriceTotal;
          }else{
            let screenedPriceTotal = price;
            priceEl.innerText = screenedPriceTotal;
          }
        }
     }

  }
};

const floorPrice = function(){
  let pricedFloor = sessionStorage.getItem("pricedFloor")
  const floor = {
    "8x8": 500,
    "10x10": 550,
    "12x12": 700,
    "14x14": 900,
    "8x12": 675,
    "10x12": 750,
    "10x16": 800,
    "10x20": 925,
    "12x16": 1000,
    "12x18": 1100,
    "12x20": 1300
  }
  let currentPrice = Number(priceEl.innerHTML);
  spiralPrice = floor[sizeSelect.value];
  if(floorSelect.value === "Spiral"){ 
    let totalPrice = currentPrice + spiralPrice;
    priceEl.innerText = totalPrice;
    sessionStorage.setItem("pricedFloor", true)
  }else if(pricedFloor){
    let totalPrice = currentPrice - spiralPrice
    priceEl.innerText = totalPrice;
    sessionStorage.setItem("pricedFloor", false)
  }
}