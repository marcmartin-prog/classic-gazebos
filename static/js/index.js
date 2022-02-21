//jshint esversion: 6

//webp image code
// This is needed to use the "$" symbol and make the overall code less verbose
const $  = document.querySelector.bind(document);
const $$ = document.querySelectorAll.bind(document);


// Load this script after everything else (document is ready)
document.addEventListener("DOMContentLoaded", function(event) {

	// This is the actual script
	if (/^((?!chrome|android).)*safari/i.test(navigator.userAgent)) {
		$$('img').forEach(ele => {
			src = ele.src;
			if(src.includes('webp')) {
				src = src.replace('.webp', '.jpg');
				ele.src = src;
			}
		});
	}

});

//mobile menu code

const mobileMenu = document.querySelector('.mobile-menu');
const hamburger = document.querySelector('.hamburger');
const menuCloseButton = document.querySelector('.menu-close');
const menuItems = document.querySelector('.menu-item');

function menuOpen (){
  mobileMenu.style.height = "100vh";
  mobileMenu.style.width = "100vw";
  mobileMenu.style.opacity = "1";
}

function menuClose (){
  mobileMenu.style.height ="0";
  mobileMenu.style.width ="0";
  mobileMenu.style.opacity = "0";
}

hamburger.addEventListener('click', menuOpen);

menuCloseButton.addEventListener('click', menuClose);

menuItems.addEventListener('click', menuClose);

//gazebo pricing code
/*
let gazeboPrices;
const tryout = document.getElementById(trial);

fetch('/data/gazebos/price.json')
  .then(response => response.json())
  .then(function(data){
    gazeboPrices = data;

  })
  .catch(error => console.log(err));

tryout.innerText = gazeboPrices.classic.octagon.price;




const getPrice = () => {
  return fetch('/data/gazebos/price.json')
  .then(res => res.json())
  .then(prices => console.log(prices))
}

getPrice();

*/
