//Les événements
const ps = document.querySelectorAll('p');

// for (let i = 0; i < ps.length; i++) {

//     let p = ps[i];

//     let rougit = function () {
//         this.classList.toggle('red');
//     }

//     p.addEventListener('click', rougit); //addEventListener permet d'ajouter un écouteur d'énénements et click est un événement d'un clic de sourie
// }

for (let i = 0; i < ps.length; i++) {

    let p = ps[i];

    p.addEventListener('mouseover', function () { //mouseover est un évément survole du curceur de la sourie sur la zone défini
        this.classList.add('red');
    })

    p.addEventListener('mouseout', function () { //mouseout est un évément qui quitte le survole du curceur de la sourie de la zone défini
        this.classList.remove('red');
    })
}

const liens = document.querySelectorAll('a.external');

for (let i = 0; i < liens.length; i++) {

    let lien = liens[i];

    lien.addEventListener('click', function (event) {
        event.stopPropagation();

        console.log('J\'ai cliqué sur le lien', event);
        let reponse = window.confirm('Voulez-vous vraiment quitter le site ?');

        if (reponse === false) {
            event.preventDefault(); //preventDefault permet d'annuler certains événements
        }
    })
}

let p = document.querySelector('p');

let onclick = function (event) {
    this.classList.add('blue')
    console.log(this);
    event.preventDefault();
    p.removeEventListener('click', onclick); //removeEventListener permet de supprimer un événement défini
}

p.addEventListener('click', onclick);

document.getElementById('a').addEventListener('keydown', function (event) {
    let lettre = String.fromCharCode(event.keyCode); //fromCharCode permet de récupérer une lettre qui correspond à la touche qui est pressée
    if (lettre != 'A') {
        event.preventDefault();
    }
})

document.getElementById('form').addEventListener('submit', function (event) {
    let cp = document.getElementById('cp');
    if (cp.value.length != 5) { //value permet de récupérer la valeur d'un champ
        alert('Le code postal n\'est pas bon');
        event.preventDefault();
    }
})

document.getElementById('form2').addEventListener('submit', function (event) {
    let age = parseInt(document.getElementById('age').selectedOptions[0].value, 10);
    if (age < 18) {
        alert('Vous ne pouvez pas rentrer');
        event.preventDefault();
    }
})
//options permet de retourner toutes les valeurs d'un élément select
//selectedIndex permet de retourner la valeur sélectionnée
//selectedOptions permet de retourner les valeurs sélectionnées

document.getElementById('form3').addEventListener('submit', function (event) {
    let mentions = document.getElementById('mentions');
    if (!mentions.checked) { //checked permet de vérifier si la case est cochée
        alert('Vous n\'avez pas accepté les CGU');
        event.preventDefault();
    }
})

let demo = document.getElementById('demo');
console.log(demo.value);

demo.focus() //focus permet de se focaliser sur un champ
// demo.blur() //blur permet de se défocaliser d'un champ