const loginForm = document.querySelector("form");

const loginUser = (event) => {
event.preventDefault();

const email = document.querySelector(`input[name="email"]`).value;
const password = document.querySelector(`input[name="password"]`).value;
const payload = JSON.stringify({
    email,
    password,
  });

  fetch("https://backend-curs.herokuapp.com/api/users/login", {
    method: "POST",
    header: {
        "Content-Type" : "application/json",
     },
     body: payload,

  }).then((res) => res.json())
  .then(res => console.log(res))
  .catch((err) => {});
};

loginForm.addEventListener("submit", loginUser);

