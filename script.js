let emailInput = document.getElementById('email');
let passwordInput = document.getElementById('password');
let submitbtn = document.getElementById('btn');
let messegeDiv = document.getElementById('messege');
let emailWarn = document.getElementById('emailMsg');
let passwordWarn = document.getElementById('passwordMsg')


passwordInput.addEventListener('keypress', validate)

// emailInput.onchange = validate();
// passwordInput.onchange = validate();


function validate() {
    let email = emailInput.value;
    let password = passwordInput.value;
    if (email != "" && email.includes("@") && email.includes(".") && email.length >= 3) {
        if (password != "" && password.length >= 8) {
            submitbtn.removeAttribute("disabled")
            messegeDiv.innerText = "All good to go";
            // console.log("All good to go");
            emailWarn.remove();
            passwordWarn.remove();
            messegeDiv.value = "";
            messegeDiv.style.color = "green";


        }

    }
    else {
        emailWarn.innerText = "Make sure email is more than 3 characters and has @ and a."
        passwordWarn.innerText = "Make sure password is more than 8 characters"
        emailWarn.style.color = "red";
        passwordWarn.style.color = "red";
        // messegeDiv.remove();

    }
}





function myFunction() {
    let text = "Do you want to submit the form?"
    if (confirm(text) == true) {
        alert("Successful signup!")
    };
    
}



submitbtn.onclick = myFunction; 
