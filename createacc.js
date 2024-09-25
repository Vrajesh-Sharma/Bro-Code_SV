const form = document.getElementById('create-account-form');
const errorMessage = document.getElementById('error-message');
const no = document.getElementById("No");
const wrapper = document.querySelector(".wrapper");
const okBtn = document.getElementById("ok-btn");

form.addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent form submission to handle validation

    const name = document.getElementById('full-name').value;
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;

    if (!name || !email || !password) {
                errorMessage.style.display = 'block';  
    } else {
        errorMessage.style.display = 'none'; 
        no.style.display = "block";           
        wrapper.style.opacity = "0.4";        
    }
    });

    okBtn.addEventListener('click', function() {
        no.style.display = "none";   
        wrapper.style.opacity = "1"; 
    });