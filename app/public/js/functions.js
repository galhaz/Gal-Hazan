function validatePassword(){
  var email= document.getElementById("email_form")
  var pw1 = document.getElementById("p1")
  var pw2 = document.getElementById("p2")
  if(pw1.value != pw2.value) {
    window.alert("Passwords Don't Match")
  } 
  else if(pw1.value = pw2.value){
    window.open("/find-your-match","_self")
    window.alert("registration completed")
  }
}

