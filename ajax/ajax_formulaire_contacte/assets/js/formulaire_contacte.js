let getHttpRequest = function () {

    let httpRequest = false;

    if (window.XMLHttpRequest) { //Mozilla, Safari,...
        httpRequest = new XMLHttpRequest();
    } else if (window.ActiveXObject) { //IE
        httpRequest = new ActiveXObject('Microsoft.XMLHTTP');
    }

    if (!httpRequest) {
        alert('Abandon : (Impossible de créer une instance XMLHTTP)');
        return false;
    }
    return httpRequest;
}

let form = document.getElementById('contact');
let button = form.querySelector('button[type=submit]');
let buttonText = button.textContent;


form.addEventListener('submit', function (event) {
    button.disabled = true;
    button.textContent = 'Chargement...';

    let errorElements = form.querySelectorAll('.has-error');

    for (let i = 0; i < errorElements.length; i++) {
        errorElements[i].classList.remove('has-error');
        let span = errorElements[i].querySelector('.help-block');

        if (span) {
            span.parentNode.removeChild(span);
        }
    }

    event.preventDefault();

    let data = new FormData(form);
    let xhr = getHttpRequest();

    xhr.onreadystatechange = function () {
        if (xhr.readyState === 4) {
            if (this.status != 200) {
                let errors = JSON.parse(xhr.responseText);
                let errorsKey = Object.keys(errors); //object.keys() permet de récupérer un tableau à partir d'un objet

                for (let i = 0; i < errorsKey.length; i++) {
                    let key = errorsKey[i];
                    let error = errors[key];
                    let input = document.querySelector('[name=' + key + ']');
                    let span = document.createElement('span');

                    span.className = 'help-block';
                    span.innerHTML = error;
                    input.parentNode.classList.add('has-error');
                    input.parentNode.appendChild(span);

                }
            } else {
                let results = JSON.parse(xhr.responseText);

                alert(results.success);

                let inputs = form.querySelectorAll('input, textarea');
                for (let i = 0; i < inputs.length; i++) {
                    inputs[i].value = '';
                }
            }

            button.disabled = false;
            button.textContent = buttonText;
        }
    }

    xhr.open('POST', form.getAttribute('action'), true);
    xhr.setRequestHeader('X-Requested-With', 'xmlhttprequest');
    xhr.send(data);

})