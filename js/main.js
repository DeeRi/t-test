function emailIsValid (email) {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)
}


function validateForm() {
  var login = document.querySelector(".registration-form__input--login");
  var email = document.querySelector(".registration-form__input--email");


  if (email.value == "" && login.value == "") {
    window.alert("Please, enter your login and email");
    login.focus();
    return false;
  }

  if (login.value == "") {
    window.alert("Please, enter your login");
    login.focus();
    return false;
  }

  if (email.value == "") {
    window.alert("Please, enter your email");
    email.focus();
    return false;
  }
  if (!emailIsValid(email.value)) {
    window.alert("Please, enter valid email");
    return false;
  }

  window.alert("Registration successfully completed!");
  return true;
}
