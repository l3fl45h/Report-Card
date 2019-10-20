function logindetails(form){
    if(form.username.value == "Teacher" && form.password.value == "PassWord")
        window.open("reportcard.html");
    else
        alert("The username and/or password is incorrect.");
}