const prices = {
    "adirondack":{
        "standard": 222,
        "premium": 239,
        "woodgrain": 266
    },
    "folding-adirondack":{
        "with-cupholders":{
            "standard": 208,
            "premium":224,
            "woodgrain":249
        },
        "without-cupholders":{
            "standard":198,
            "premium": 213,
            "woodgrain": 237
        }
    },
    "folding-ottoman":{
        "standard": 65,
        "premium": 70,
        "woodgrain": 77
    },
    "swivel-mission-chair":{
        "18-inch-height": {
            "standard":269,
            "premium": 290,
            "woodgrain": 322
        },
        "24-inch-height":{
            "standard":294,
            "premium":317,
            "woodgrain":352
        }

    },
    "staitionary-mission-chair":{
        "18-inch-height": {
            "standard":184,
            "premium": 198,
            "woodgrain": 220
        },
        "24-inch-height":{
            "standard":214,
            "premium":231,
            "woodgrain":254
        }

    }
}

let numberItems = Object.keys(prices)
const priceStandard = document.getElementById('price-number-standard');
const pricePremium = document.getElementById('price-number-premium');
const priceWoodgrain = document.getElementById('price-number-woodgrain');
const furnitureName = document.getElementById('furniture-name');

console.log(numberItems)
const firstDropdown = document.getElementById('poly-price');
const secondDropdown = document.getElementById('poly-option')
let pricePath;

for(let i = 0; i < numberItems.length; i++){
  let opt = document.createElement('option')
  opt.innerHTML = numberItems[i]
  opt.value = numberItems[i]
  firstDropdown.appendChild(opt)
}


function polyPrice(type){
  pricePath = null;
  if(secondDropdown.style.display = 'block'){
    secondDropdown.style.display = "none"
  }
  secondDropdown.innerHTML = ' <option value="Not Selected"selected hidden disabled>Please Select Options</option>'
  furnitureName.value = type;
  pricePath = prices[type]
  if(prices[type].woodgrain){
    stanPrice = prices[type].standard*1.2
    priceStandard.innerText = stanPrice.toFixed(2)
    premPrice =prices[type].premium*1.2
    pricePremium.innerText = premPrice.toFixed(2)
    woodPrice = prices[type].woodgrain*1.2;
    priceWoodgrain.innerText = woodPrice.toFixed(2);
  }else{
    let options = Object.keys(prices[type]);
    secondDropdown.style.display = "block"
    for(let i = 0; i < options.length; i++){
        let opt = document.createElement('option')
        opt.innerHTML = options[i]
        opt.value = options[i]
        secondDropdown.appendChild(opt)
      }
    
  }
}

function polyPriceOpt(option){
    stanPrice = pricePath[option].standard*1.2
    priceStandard.innerText = stanPrice.toFixed(2)
    premPrice =pricePath[option].premium*1.2
    pricePremium.innerText = premPrice.toFixed(2)
    woodPrice = pricePath[option].woodgrain*1.2;
    priceWoodgrain.innerText = woodPrice.toFixed(2);
}