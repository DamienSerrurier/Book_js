//Intéraction dans le DOM
// document.getElementById('demo'); //permet de sélectionner un élément par rapport à son id
// document.getElementsByClassName('paragrph'); //permet de sélectionner tous les éléments par rapport à une classe en retournant une HTMLCollection
// document.getElementsByTagName('p'); //perment de sélectionner tous les éléments par rapport à une balise html
// document.getElementsByTagName('p')[0]; //permet de sélectionner un élément par rapport à son index dans son HTMLCollection
// document.querySelector('.paragraph'); //permet de séléctionner un élément grâce à un sélecteur css
// document.querySelector('#demo p'); //permet de séléctionner et cibler un élément grâce à un id et à un sélecteur css
// document.querySelectorAll('p'); //permet de sélectionner tous les éléments par rapport à un sélecteur css
// document.querySelector('.paragraph').className; //className permet de retourner les noms des classes lier à un sélecteur css
// document.querySelector('.paragraph').className = 'paragraph blue'; //permet de changer la propriété d'une classe
// document.querySelector('.paragraph').classList; //classList parmet de retourner un tableau de classes
// document.querySelector('.paragraph').classList.remove('blue'); //remove permet de supprimer une classe lier à un sélecteur css
// document.querySelector('.paragraph').classList.add('red'); //add permet d'ajouter une classe lier à un sélecteur css
// document.querySelector('.paragraph').classList.contains('red'); //contains permet de retourner un boolean si la classe existe ou pas lier à un sélecteur css
// document.querySelector('.paragraph').style.fontSize = "20px"; //style.fontSize permet de modifier la taille des caractères
// document.querySelector('.paragraph').innerHTML //innerHTML permet de retourner le contenu d'un élément
// document.querySelector('.paragraph').innerHTML = 'Salut les gens' //permet de remplacer le contenu d'un élément
// document.querySelector('.paragraph').innerText //permet de retourner le texte qui est à l'intérieur d'un élément
// document.querySelector('.paragraph').classList.toggle //permet de permuter une propriété css d'un élément
// document.querySelector('ul').children //permet de retourner tous les noeuds éléments enfants d'un élément parent
// document.querySelector('ul').childNodes //permet de retourner tous les noeuds éléments avec les noeuds textes d'un élément parent
// document.querySelector('ul').childElementCount //permet de compter tous les noeuds éléments d'un élément parent
// document.querySelector('ul').firstChild //permet de retourner le premier noeud enfant d'un élément parent
// document.querySelector('ul').firstElementChild //permet de retourner le premier noeud élément enfant d'un élément parent
// document.querySelector('ul').lastChild //permet de retourner le dernier noeud enfant d'un élément parent
// document.querySelector('ul').lastElementChild //permet de retourner le dernier noeud élément enfant d'un élément parent
// document.querySelector('ul').getElementsByTagName('li') //permet de retourner les noeuds éléments enfants défini par getElementsByTagName d'un élément parent
// document.querySelector('ul').querySelector('li:nth-child(3)') //permet de retourner un noeuds élément enfant défini par un sélecteur css avancé d'un élément parent
// document.querySelector('ul').querySelector('li:nth-child(3)').previousSibling //previousSibling permet de retourner un noeuds enfant précèdant un autre noeud de même niveau défini par un sélecteur css avancé d'un élément parent
// document.querySelector('ul').querySelector('li:nth-child(3)').previousElementSibling //previousElementSibling permet de retourner un noeuds élément enfant précèdant un autre noeud de même niveau défini par un sélecteur css avancé d'un élément parent
// document.querySelector('ul').querySelector('li:nth-child(3)').nextSibling //nextSibling permet de retourner un noeuds enfant suivant un autre noeud de même niveau défini par un sélecteur css avancé d'un élément parent
// document.querySelector('ul').querySelector('li:nth-child(3)').nextElementSibling //nextElementSibling permet de retourner un noeuds élément enfant suivant un autre noeud de même niveau défini par un sélecteur css avancé d'un élément parent
// document.querySelector('ul').querySelector('li:nth-child(3)').parentNode //parentNode permet de retourner un noeuds parent suivant un noeud enfant
// document.querySelector('ul').querySelector('li:nth-child(3)').parentElement //parentElement permet de retourner un noeuds élément parent suivant un noeud enfant
// document.querySelector('li').parentElement.removeChild(li); //removeChild permet de supprimer un élément enfant par rapport à son parent


let ps = document.querySelectorAll('p');

for (let i = 0; i < ps.length; i++) {
    (function (p) {
        window.setInterval(function () {
            p.classList.toggle('red');
        }, 1000);
    })(ps[i]);

}

let li = document.querySelector('li');
// document.body.appendChild(li); //ici appendChild permet de déplacer un élément enfant vers l'élément parent défini
// li.parentElement.appendChild(li);
let li2 = li.cloneNode(true); //cloneNode permet de renvoyer une copie du noeud sur lequel il a été appelé et true permet de spécifier si le noeud renvoi ses enfants avec
// li.parentElement.appendChild(li2);
let li3 = document.createElement('li'); //createElement permet de créer un élément spécifié
li3.textContent = '7';
// li.parentElement.appendChild(li3);
// li.parentElement.replaceChild(li3, li); //replaceChild permet de remplacer un élément enfant par un autre élément enfant
let last = document.querySelector('ul').lastElementChild; //lastElementChild permet de retourner le dernier élément par rapport à son parent
li.parentElement.insertBefore(last, li); //insertBefore permet d'inserer un élément avant un autre élément
