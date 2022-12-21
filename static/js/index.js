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
	mobileMenu.style.zIndex = "25";
}

function menuClose (){
  mobileMenu.style.height ="0";
  mobileMenu.style.width ="0";
  mobileMenu.style.opacity = "0";
	mobileMenu.style.zIndex = "10";
}

hamburger.addEventListener('click', menuOpen);

menuCloseButton.addEventListener('click', menuClose);

menuItems.addEventListener('click', menuClose);


let links = document.querySelectorAll("a[data-analytics]");
 for (var i = 0; i < links.length; i++) {
     links[i].addEventListener('click', handleLinkEvent);
     links[i].addEventListener('auxclick', handleLinkEvent);
 }

 function handleLinkEvent(event) {
     var link = event.target;
     var middle = event.type == "auxclick" && event.which == 2;
     var click = event.type == "click";
     while (link && (typeof link.tagName == 'undefined' || link.tagName.toLowerCase() != 'a' || !link.href)) {
         link = link.parentNode;
     }
     if (middle || click) {
         let attributes = link.getAttribute('data-analytics').split(/,(.+)/);
         let events = [JSON.parse(attributes[0]), JSON.parse(attributes[1] || '{}')];
         plausible(...events);
     }
     if (!link.target) {
         if (!(event.ctrlKey || event.metaKey || event.shiftKey) && click) {
             setTimeout(function () {
                 location.href = link.href;
             }, 150);
             event.preventDefault();
         }
     }
 }

/*
const processForm = form => {
  const data = new FormData(form);
  data.append('form-name', 'newsletter');
  fetch('/', {
    method: 'POST',
    body: data,
  })
  .then(() => {
    form.innerHTML = `<div class="form--success">Thanks so much for reaching out! We'll be in touch soon!</div>`;
  })
  .catch(error => {
    form.innerHTML = `<div class="form--error">Error: ${error}</div>`;
  });
};
const contactForm = document.querySelector('.contact-form');
if (contactForm) {
  contactForm.addEventListener('submit', e => {
    e.preventDefault();
    processForm(contactForm);
  });
}
*/
