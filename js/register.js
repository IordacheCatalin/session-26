const registerForm = document.querySelector("form");

const registerUser = (event) => {
  event.preventDefault();

  const firstName = document.querySelector(`input[name="firstName"]`).value;
  const lastName = document.querySelector(`input[name="lastName"]`).value;
  const email = document.querySelector(`input[name="email"]`).value;
  const password = document.querySelector(`input[name="password"]`).value;

  const payload = JSON.stringify({
    firstName,
    lastName,
    email,
    password,
  });

  fetch("https://backend-curs.herokuapp.com/api/users/register", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: payload,
  })
    .then((res) => res.json())
    .then((res) => {
      // another fetch for login!
    })
    .catch((err) => console.error(err));

  //   const formInputs = document.querySelectorAll("input");
  //   console.log(formInputs);
};

registerForm.addEventListener("submit", registerUser);

// const formInputs = document.querySelectorAll("input");
// console.log(formInputs);

// Bulk process inputs & transform to structure
// const processedInputs = [];
// formInputs.forEach((el) => {
//   processedInputs.push({ [el.name]: el.value });
// });
// console.log(processedInputs);
