//jshint esversion: 6

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
