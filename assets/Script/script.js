const wrapper = document.querySelector('.wrapper');
const loginLink = document.querySelector('.login__link');
const registerLink = document.querySelector('.registration__link');


registerLink.addEventListener('click', () =>{
    wrapper.classList.add('register');

});

loginLink.addEventListener('click', () =>{
    wrapper.classList.remove('register');
});



const loginButton = document.querySelector("#login");

loginButton.addEventListener("click", function() {
  const wrapperDiv = document.querySelector(".wrapper");
  wrapperDiv.classList.toggle("hidden");
});


const homeLink = document.querySelector('a[href="/index.html"]');
const introDiv = document.querySelector('.intro');

homeLink.addEventListener('click', function(event) {
  event.preventDefault();
  introDiv.classList.toggle('hidden');
});

const aboutLink = document.querySelector('#aboutLink');
const aboutDiv = document.querySelector('.About');

aboutLink.addEventListener('click', function(event) {
  event.preventDefault();
  aboutDiv.classList.toggle('hidden');
});

const contactLink = document.querySelector('#contactLink');
const contactDiv = document.querySelector('.Contact');

contactLink.addEventListener('click', function(event) {
  event.preventDefault();
  contactDiv.classList.toggle('hidden');
});