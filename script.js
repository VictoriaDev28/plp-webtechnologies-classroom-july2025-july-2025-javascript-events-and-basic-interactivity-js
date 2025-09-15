// text color changed when hovered
const heading = document.getElementById("heading");
function changeColor(){
    heading.style.color = "purple";
}
heading.addEventListener("mouseover", changeColor)



// Dark Mode 
function darkFunction() {
    var element = document.body;
    element.classList.toggle("light-dark");
}




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
const name = document.getElementById('name');
const password = document.getElementById('password');
const form = document.getElementById('form');
const errorElement = document.getElementById('error')

form.addEventListener('submit', (e) =>{
    let messages = []
   
    if (name.value === "" || name.value === null){
        messages.push("Name is required")
    }

    if (password.value === "" || password.value === null){
        messages.push("Password is required!")
    }

    if (password.value.length >= 8 || password.value.length < 20){
        messages.push('Password must be 8 and less than 20 characters')
    }

    
    if (messages.length > 0){
        e.preventDefault()
        errorElement.innerText = messages.join(', ')

    }
    
});