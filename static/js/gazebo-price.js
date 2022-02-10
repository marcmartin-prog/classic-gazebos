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

        "oval": {"id":2,"company":"ACME"}
    },
    "economy": {
        "thing": [[1,42],[2,2]]
     }
}

const priceEl = document.getElementById("price-number");
const styleSelect = document.getElementById("style");
let query = prices;

const stylePrice = function () {
  query = prices.styleSelect.value;
  console.log(query)
}
