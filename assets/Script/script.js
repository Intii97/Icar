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


const homeLink = document.querySelector('#homeLink');
const introDiv = document.querySelector('.intro');

homeLink.addEventListener('click', function(event) {
  event.preventDefault();
  introDiv.classList.remove('hidden');
  saleDiv.classList.add('hidden');
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


const saleLink = document.querySelector('#saleLink');
const saleDiv = document.querySelector('.Sale');

saleLink.addEventListener('click', function(event) {
  event.preventDefault();
  introDiv.classList.add('hidden');
  saleDiv.classList.remove('hidden');
});


const registerForm = document.querySelector('.register form');

registerForm.addEventListener('submit', (event) => {
  event.preventDefault(); // prevent the default form submission

  const email = registerForm.querySelector('input[name="email"]').value;
  const password = registerForm.querySelector('input[name="password"]').value;
  console.log('registration form: ', 'email: ' , email , 'password: ', password);
  
  fetch('/register', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({
      email: email,
      password: password
    })
  })
  .then(response => {
    if (response.ok) {
      console.log('Registration successful');
      
    
    } else if (response.status === 409) {
      console.log('Registration failed:', response.statusText);
     
    } else {
      console.log('Registration failed:', response.statusText);
      response.json().then(data => {
      });
    }
  })
  .catch(error => console.error(error));
});





const loginBtn = document.getElementById('login-btn');

loginBtn.addEventListener('click', (event) => {
  event.preventDefault(); // prevent the default form submission

  const email = document.querySelector('#login__email').value;
  const password = document.querySelector('#password').value;

  fetch('/', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/x-www-form-urlencoded'
    },
    body: new URLSearchParams({
      email: email,
      password: password
    })
  })
  .then(response => {
    if (response.ok) {
      response.json().then(data => {
        if (data.isLoggedIn) {
          console.log('login is success');
        } else {
          console.log('Invalid username or password');
        }
      });
    } else {
      console.log('Error:', response.status);
    }
  })
  .catch(error => console.error(error));
});
