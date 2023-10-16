import {
  setTimer,
  triggerRegistration,
  sendRegistrationForm,
} from "./functions.js";

document.addEventListener("DOMContentLoaded", () => {
  setTimer();
  triggerRegistration();
  sendRegistrationForm();
});
