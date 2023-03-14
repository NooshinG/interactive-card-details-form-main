const inputText = document.querySelectorAll("form input[type='text']");
const form = document.querySelector("form");
const formContainer = document.querySelector(".form-container");
const success = document.querySelector(".success-container");
const continueBtn = document.querySelector(".success .btn");

const inputName = document.querySelector("#name");
const errorName = document.querySelector("#name-error");

const inputCNumber = document.querySelector("#cNumber");
const errorCNumber = document.querySelector("#card-error");
const cNumberRegex = /[1-9]{16,16}/;
// /^\d+$/;

const inputMonth = document.querySelector("#month");
const monthRegex = /^(?:0[1-9]|1[0-2])$/;
const inputYear = document.querySelector("#year");
const yearRegex = /^[0-9][0-9]$/;
const errorDate = document.querySelector("#date-error");

const inputCVC = document.querySelector("#cvc");
const errorCVC = document.querySelector("#cvc-error");
const cvcRegex = /[1-9]{3,4}/;

const inputCard = {
  cvc: "cvc",
  name: "cardHolder-name",
  cNumber: "card-number",
  month: "month",
  year: "year",
};

const enteredInputHandler = (e) => {
  const targetEl = inputCard[e.target.id];
  const cardEl = document.querySelector(`.${targetEl}`);
  cardEl.innerHTML = e.target.value;
};

const validateInputName = () => {
  if (inputName.value.trim().length == 0) {
    errorName.innerHTML = "Please enter a valid name.";
    inputName.classList.add("invalid");
    return false;
  }
  errorName.innerHTML = "";
  inputName.classList.remove("invalid");
  return true;
};

const validateInputCNumber = () => {
  // let number = +inputCNumber.value.replaceAll(" ", "");
  if (!cNumberRegex.test(inputCNumber.value.replaceAll(" ", ""))) {
    errorCNumber.innerHTML = "Please enter a valid card number.";
    inputCNumber.classList.add("invalid");
    return false;
  }
  errorCNumber.innerHTML = "";
  inputCNumber.classList.remove("invalid");
  return true;
};

const validateInputMonth = () => {
  if (!monthRegex.test(inputMonth.value)) {
    errorDate.innerHTML = "Please enter a valid date.";
    inputMonth.classList.add("invalid");
    return false;
  }
  errorDate.innerHTML = "";
  inputMonth.classList.remove("invalid");
  return true;
};

const validateInputYear = () => {
  if (!yearRegex.test(inputYear.value)) {
    errorDate.innerHTML = "Please enter a valid date.";
    inputYear.classList.add("invalid");
    return false;
  }
  errorDate.innerHTML = "";
  inputYear.classList.remove("invalid");
  return true;
};

const validateInputCVC = () => {
  if (!cvcRegex.test(inputCVC.value)) {
    errorCVC.innerHTML = "Please enter a valid CVC.";
    inputCVC.classList.add("invalid");
    return false;
  }
  errorCVC.innerHTML = "";
  inputCVC.classList.remove("invalid");
  return true;
};

const validationFormHandler = () => {
  const inputNameValidation = validateInputName();
  const inputCNameValidation = validateInputCNumber();
  const inputMonthValidation = validateInputMonth();
  const inputYearValidation = validateInputYear();
  const inputCVCValidation = validateInputCVC();

  const formValidation =
    inputNameValidation &&
    inputCNameValidation &&
    inputMonthValidation &&
    inputYearValidation &&
    inputCVCValidation;

  if (formValidation) {
    success.classList.remove("hidden");
    formContainer.classList.add("hidden");
  }
};

const submitFormHandler = (e) => {
  e.preventDefault();
  validationFormHandler();
};

const continueHandler = () => {
  form.reset();
  formContainer.classList.remove("hidden");
  success.classList.add("hidden");
};

inputText.forEach((element) => {
  element.addEventListener("input", (e) => {
    enteredInputHandler(e);
  });
});

form.addEventListener("submit", submitFormHandler);
continueBtn.addEventListener("click", continueHandler);
inputName.addEventListener("focusout",validateInputName);
inputCNumber.addEventListener("focusout",validateInputCNumber);
inputMonth.addEventListener("focusout",validateInputMonth);
inputYear.addEventListener("focusout",validateInputYear);
inputCVC.addEventListener("focusout",validateInputCVC);

