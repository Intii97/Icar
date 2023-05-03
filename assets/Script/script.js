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
