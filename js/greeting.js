const loginForm = document.querySelector("#login-form");
const loginInput = document.querySelector("#login-form input");
const mainItems = document.querySelector(".mainItems");
const todoInput = document.querySelector("#todo-form input");
const greeting = document.querySelector("h1");
const CLASS_HIDDEN = "hidden";
const USERNAME_KEY = "username";
function onLoginButtonClick(event) {
  event.preventDefault(); // 시스템 자동 이벤트 막음
  const userName =
    loginInput.value[0].toUpperCase() +
    loginInput.value.slice(1, loginInput.value.length);
  localStorage.setItem(USERNAME_KEY, userName);
  loginForm.classList.add(CLASS_HIDDEN);
  /* loginForm.submit(); */
  const result = paintGreeting(userName);
}

function paintGreeting(username) {
  greeting.innerText = `Hello ${username}`;
  greeting.classList.remove(CLASS_HIDDEN);
  mainItems.classList.remove(CLASS_HIDDEN);
  todoInput.focus();
}

loginForm.onsubmit = onLoginButtonClick;

const savedUserName = localStorage.getItem(USERNAME_KEY);

if (savedUserName === null) {
  loginForm.classList.remove(CLASS_HIDDEN);
  loginForm.onsubmit = onLoginButtonClick;
} else {
  paintGreeting(savedUserName);
}
