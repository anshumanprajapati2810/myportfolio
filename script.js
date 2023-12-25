let menuVisible = false;
//Función que oculta o muestra el menu
function showHiddenMenu(){
    if(menuVisible){
        document.getElementById("nav").classList ="";
        menuVisible = false;
    }else{
        document.getElementById("nav").classList ="responsive";
        menuVisible = true;
    }
}

function validateForm() {
    clearErrorMessages();

    var name = document.getElementById('name').value;
    var phone = document.getElementById('phone').value;
    var address = document.getElementById('address').value;
    var subject = document.getElementById('subject').value;
    var message = document.getElementById('message').value;

    if (name === '') {
        displayErrorMessage('name', 'Please enter your name.');
    }
    if (phone === '') {
        displayErrorMessage('phone', 'Please enter your phone number.');
    }
    if (address === '') {
        displayErrorMessage('address', 'Please enter your email-id.');
    } else {
        // Email validation logic
        var emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailPattern.test(address)) {
            displayErrorMessage('address', 'Please enter a valid email address.');
        }
    }
    if (subject === '') {
        displayErrorMessage('subject', 'Please enter the subject.');
    }
    if (message === '') {
        displayErrorMessage('message', 'Please enter your message.');
    }
}

function displayErrorMessage(fieldId, message) {
    var errorDiv = document.getElementById(fieldId + '-error');
    errorDiv.textContent = message;
}

function clearErrorMessages() {
    var errorMessages = document.querySelectorAll('.error-message');
    errorMessages.forEach(function (errorMessage) {
        errorMessage.textContent = '';
    });
}


function displayErrorMessage(fieldId, message) {
    var errorElement = document.getElementById(fieldId + '-error');
    errorElement.textContent = message;
}


function clearErrorMessages() {
    var errorElements = document.querySelectorAll('.error-message');
    errorElements.forEach(function (element) {
        element.textContent = '';
    });
}

function seleccionar(){
    //oculto el menu una vez que selecciono una opcion
    document.getElementById("nav").classList = "";
    menuVisible = false;
}
//Funcion que aplica las animaciones de las newskill
function efectoHabilidades(){
    var skills = document.getElementById("skills");
    var distancia_skills = window.innerHeight - skills.getBoundingClientRect().top;
    if(distancia_skills >= 300){
        let newskill = document.getElementsByClassName("progress");
        newskill[0].classList.add("javascript");
        newskill[1].classList.add("htmlcss");
        newskill[2].classList.add("photoshop");
        newskill[3].classList.add("java");
        newskill[4].classList.add("communication");
        newskill[5].classList.add("teamwork");
        newskill[6].classList.add("creativity");
        newskill[7].classList.add("project");
    }
}


//detecto el scrolling para aplicar la animacion de la bar de newskill
window.onscroll = function(){
    efectoHabilidades();
} 