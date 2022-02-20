const loginForm = document.querySelector("#login-form");
const loginInput = document.querySelector("#login-form input");
const greeting = document.querySelector("#greeting"); 

const HIDDEN_CLASSNAME = "hidden"; //css .hidden class 참고
const USERNAME_KEY = "username"; 

function onLoginSubmit(event) {
  event.preventDefault(); // 브라우저의 새로고침 막기
  loginForm.classList.add(HIDDEN_CLASSNAME);
  const username = loginInput.value;

  localStorage.setItem(USERNAME_KEY,username); //(key, value)
  paintGreetings(username);

}

function paintGreetings(username) { //Hello `username`
  greeting.innerText = `Hello ${username}`;
  greeting.classList.remove(HIDDEN_CLASSNAME);
}

const savedUsername = localStorage.getItem(USERNAME_KEY);

if(savedUsername === null){
  loginForm.classList.remove(HIDDEN_CLASSNAME);
  loginForm.addEventListener("submit",onLoginSubmit);
}
else{
  paintGreetings(savedUsername);
}