function validateForm() {
  var login = document.querySelector(".registration-form__input--login");

  if (login.value == "") {
    window.alert("Please enter your login");
    login.focus();
    return false;
  }
  
  if (login.value == "") {
    window.alert("Please enter your login");
    login.focus();
    return false;
  }
  return true; 
}
