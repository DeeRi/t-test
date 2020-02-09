//form validation

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

//Datepicker
$(function() {
  $( ".registration-form__input--date" ).datepicker({
  dateFormat : 'dd/mm/yy',
  changeMonth: true,
  changeYear: true,
  yearRange: "-100:+0"
  }); 
 });

 //Card filling with the information
 email.oninput = function() {
  emailUser.innerHTML = email.value;
};

surname.oninput = function() {
  surnameUser.innerHTML = surname.value;
};

user.oninput = function() {
  userName.innerHTML = user.value;
};

login.oninput = function() {
  loginUser.innerHTML = login.value;
};

