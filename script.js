// text color changed when hovered
const heading = document.getElementById("heading");
function changeColor(){
    heading.style.color = "purple";
}
heading.addEventListener("mouseover", changeColor)


// Dark Mode 

function toggleTheme(){
    document.body.classList.toggle("dark")
};



// text reveal when button clicked
const revealBtn = document.querySelector('.reveal-btn');
const hiddenContent = document.querySelector('.hidden-content')

function revealContent(){
    if(hiddenContent.classList.contains('reveal-btn')){
        hiddenContent.classList.remove('reveal-btn')
    } else {
        hiddenContent.classList.add('reveal-btn')
    }
}
revealBtn.addEventListener('click', revealContent)



// form validation
document.getElementById("myForm").onsubmit = function(event) {
    event.preventDefault(); 
    



    let username = document.getElementById("username").value.trim();
    let email = document.getElementById("email").value.trim();
    let password = document.getElementById("passwor").value.trim();


    document.getElementById("usernameError").innerText = "";
    document.getElementById("emailError").innerText = "";
    document.getElementById("passwordError").innerText = "";

    let isValid = true;

// Username Validation 
    if (username === "") {
        document.getElementById("usernameError").innerText = "Username is required."
;   isValid = false;
 } else if (username.length < 5)
 {
    document.getElementById("usernameError").innerText = "Username must be at least 5 characters.";
    isValid = false;
 }

// Email validation
 let emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (email === "") {
        document.getElementById("emailError").innerText = "Email is required.";
        isValid = false;
    } else if (!emailPattern.test(email)) {
        document.getElementById("emailError").innerText = "Invalid email format.";
        isValid = false;
    }

// password validation
 let passwordPattern = /^(?=.*[A-Za-z])(?=.*\d)[A=Za-z\d]{8,}$/;
 if (password === ""){
    document.getElementById("passwordError").innerText = "password is required.";
    isValid = false;
 } else if (!passwordPattern.test(password)){
    document.getElementById("passwordError").innerText = "Password must be at least 8 characters, including numbers and letters. ";
    isValid = false;
 }

 if (isValid){
    alert("Form submitted sucessfully!")
    document.getElementById("myForm").reset();
 }
}