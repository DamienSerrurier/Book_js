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

let links = document.querySelectorAll('.meteo');
let result = document.getElementById('result');

for (let i = 0; i < links.length; i++) {
    let link = links[i]

    /*
    Methode GET avec l'objet JSON
    link.addEventListener('click', function (event) {
        event.preventDefault();
        result.innerHTML = 'Chargement...';

        let httpRequest = getHttpRequest();

        httpRequest.onreadystatechange = function () {

            if (httpRequest.readyState === 4) {
                    result.innerHTML = '';

                if (httpRequest.status === 200) {
                    let results = JSON.parse(httpRequest.responseText);
                    let ul = document.createElement('ul');
                    result.appendChild(ul);

                    for (let i = 0; i < results.length; i++) {

                        let li = document.createElement('li');
                        li.innerHTML = results[i].name;
                        ul.appendChild(li);
                    }
                } else {
                    alert('Impossible de contacter le serveur');
                }
            }
        }
        httpRequest.open('GET', 'http://jsonplaceholder.typicode.com/users', true); //open permet d'appeler une page avec la méthode GET
        httpRequest.send(); //send permet de lancer cette appel
    })
    */

    link.addEventListener('click', function (event) {
        event.preventDefault();
        result.innerHTML = 'Chargement...';

        let httpRequest = getHttpRequest();

        httpRequest.onreadystatechange = function () {

            if (httpRequest.readyState === 4) {
                result.innerHTML = '';

                if (httpRequest.status === 200) {
                    result.innerHTML = httpRequest.responseText;

                } else {
                    alert('Impossible de contacter le serveur');
                }
            }
        }
        httpRequest.open('POST', '/demo.php', true); //open permet d'appeler une page avec la méthode POST

        //A partir d'explorer 10
        let data = new FormData(); //FormData permet de manipuler plus facilement les données à envoyer
        data.append('city', 'agrhjhe&jrjr=krkkr'); //append permet d'ajouter des éléments à mon FormData
        data.append('name', 'Marie');
        httpRequest.send(data);

        /*
        Permet de suporter les vieux naviguateurs commme explorer 8 et 9
        httpRequest.setRequestHeader('Content-type', 'application/x-www-form-urlencoded'); //setRequestHeader permet de spécifier quel type d'information je veux envoyer, dans cette exemple ces informations sont de types url
        let a = 'agrhjhe&jrjr=krkkr';
        httpRequest.send('city=' + encodeURIComponent(a) + '&nom=Henry'); //send permet de lancer cette appel et de poster des informations et encodeURIComponent permet d'échapper les caractère spéciaux
        */
    })
}

let form = document.getElementById('form');

form.addEventListener('click', function (event) {
    event.preventDefault();
    result.innerHTML = 'Chargement...';

    let httpRequest = getHttpRequest();

    httpRequest.onreadystatechange = function () {

        if (httpRequest.readyState === 4) {
            result.innerHTML = '';

            if (httpRequest.status === 200) {
                result.innerHTML = httpRequest.responseText;

            } else {
                alert('Impossible de contacter le serveur');
            }
        }
    }
    httpRequest.open('POST', '/demo.php', true); 

    let data = new FormData(form); //paramètre de type Element HTML qui permettra d'injecter toutes les informations du formulaire
    
    httpRequest.send(data);
})