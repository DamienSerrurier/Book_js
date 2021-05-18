var a = 'demo'; //les variables déclarées avec var ou rien sont des méthodes dans l'objet window qui est global

console.log(window);

/*
(function (){
    window.alert('Salut les gens'); //méthode permettant de déclancher une petite alerte (bloc le reste du script)
    console.log('Salut');
})()
*/

/*
(function (){
    let demo = window.prompt('Salut les gens'); //méthode permettant de déclancher une petite boite de dialogue et avec un input (bloc le reste du script)
    console.log('Salut');
    console.log(demo);
})()
*/

// (function () {
//     let demo = window.confirm('Salut les gens'); //méthode permettant de déclancher une alert avec une confirmation qui renvoie un boolean (bloc le reste du script)
//     console.log('Salut');
//     console.log(demo);

//Méthode avec la boucle while
// let aDeviner = Math.round(Math.random() * 10);
// let essais = 3;
// let essai = window.prompt('Entrer un chiffre entre 1 et 10');
// essai = parseInt(essai, 10);

// while (essai != aDeviner && essais > 0) {
//     essais--
//     if (essai > aDeviner) {
//         window.alert('Le chiffre est trop grand');
//     } else {
//         window.alert('Le chiffre est trop petit');
//     }
//     if (essais > 0) {
//         essai = window.prompt('Retenter votre chance, un chiffre entre 1 et 10');
//     }
// }

// if (essai == aDeviner) {
//     window.alert('Bravo');

// } else {
//     window.alert('Echec');
// }

/*
ON choisit un chiffre RANDOM
DEMANDE à l'utilisateur de rentrer un chiffre
TANT QUE le chiffre n'est pas bon
    SI le chiffre est au dessus
        ALERT au dessus
    SINON
        ALERT en dessous
    DEMANDE à l'utilisateur de rentrer un chiffre
FIN TANT QUE
ALERT success
*/

//Méthode avec la boucle for

//     let aDeviner = Math.round(Math.random() * 10);
//     let essai

//     for (let i = 0; i < 3; i++) {

//         if (i == 0) {
//             essai = window.prompt('Entrer un chiffre entre 1 et 10');

//         } else {
//             essai = window.prompt('Retenter votre chance, un chiffre entre 1 et 10');
//         }

//         essai = parseInt(essai, 10);

//         if (essai == aDeviner) {
//             break;
//         } else if (essai > aDeviner) {
//             window.alert('Le chiffre est trop grand');
//         } else {
//             window.alert('Le chiffre est trop petit');
//         }
//     }

//     if (essai == aDeviner) {
//         window.alert('Bravo');
//     } else {
//         window.alert('Echec');
//     }

// })()


(function () {
    //     let demo = function () {
    //         console.log('demo');
    //     }

    //     window.setInterval(demo, 1000); //permet d'éxécuter du code toutes les intervalles de temps donnés
    //     console.log('Salut !');

    //     Fonction qui devient un paramètre de fonction, c'est ce qu'on appel un Callback

    let i = 0.
    let timer = window.setInterval(function () { //Callback
        i++
        console.log(i);
        if (i === 10) {
            window.clearInterval(timer) //Permet d'arrêter l'éxécution du code lancé par la méthode setInterval
        }
    }, 1000);
})()


// (function () {
//     let i = 0.
//     window.setTimeout(function () { //permet d'éxécuter du code au bout d'un temps donné
//         i++
//         console.log(i);
//     }, 1000);
//     console.log('Salut !');
// })()