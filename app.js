// Define UI
const numberInput = document.querySelector("#number-input");
const buttonCheck = document.querySelector(".check-number-btn");
const alertWrong = document.querySelector(".alert-danger");
const alertSuccess = document.querySelector(".alert-success");
const alertInfo = document.querySelector(".alert-info");
const buttonAgain = document.querySelector(".try-again-btn");
const countText = document.querySelector(".count-text");

let count = 3;
let random = 0;

buttonCheck.addEventListener("click", checkNumber);
buttonAgain.addEventListener("click", tryAgain);

// Генерация случайного числа при загрузке страницы
document.addEventListener("DOMContentLoaded", function () {
  random = generateRandomNumber();
  // Убираем сообщение о генерации случайного числа через 1,5 сек
  setTimeout(function () {
    alertInfo.classList.remove("block");
    alertInfo.classList.add("none");
  }, 1500);
  buttonAgain.disabled = true;
  buttonAgain.classList.add("button-disabled");
  console.log(random);
});

// Проверка введенного числа
function checkNumber() {
  if (numberInput.value === null || numberInput.value === "") {
    alert("Пожалуйста введите число от 0 до 3");
  } else {
    if (random === parseInt(numberInput.value)) {
      showSuccess(random);
      showCount(count);
    } else {
      count--;
      showCount(count);
      if (count <= 0) {
        showWrong(random);
      }
    }
  }
}

// В случае успеха
function showSuccess(number) {
  buttonCheck.disabled = true;
  buttonCheck.classList.add("button-disabled");
  buttonAgain.disabled = false;
  buttonAgain.classList.remove("button-disabled");
  alertSuccess.classList.remove("none");
  alertSuccess.classList.add("block");
  alertSuccess.textContent = "Вы угадали! Загаданное число было " + random;
}

// В случае неудачи
function showWrong(number) {
  buttonCheck.disabled = true;
  buttonCheck.classList.add("button-disabled");
  buttonAgain.disabled = false;
  buttonAgain.classList.remove("button-disabled");
  alertWrong.classList.remove("none");
  alertWrong.classList.add("block");
  alertWrong.textContent =
    "Ваши попытки закончились. Правильное число было " + random;
}

function showInfo() {
  alertInfo.classList.remove("none");
  alertInfo.classList.add("block");
}

function showCount(number) {
  countText.textContent = "Попытки: " + number;
}

// Нажатие кнопки попробовать снова
function tryAgain() {
  buttonCheck.disabled = false;
  buttonCheck.classList.remove("button-disabled");
  buttonAgain.disabled = true;
  buttonAgain.classList.add("button-disabled");
  alertWrong.classList.remove("block");
  alertWrong.classList.add("none");
  alertSuccess.classList.remove("block");
  alertSuccess.classList.add("none");
  count = 3;
  showCount(count);
  random = generateRandomNumber();
  setTimeout(function () {
    alertInfo.classList.remove("block");
    alertInfo.classList.add("none");
  }, 1500);
  console.log(random);
}

// Генерация рандомного числа
function generateRandomNumber() {
  //Показываем сообшение о генерации случайного числа
  showInfo();
  return Math.floor(Math.random() * 4);
}
