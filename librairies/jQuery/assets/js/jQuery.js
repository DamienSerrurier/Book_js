//Version JavasSript
/*
let links = document.querySelectorAll('.tabs a');

for (let i = 0; i < links.length; i++) {
    let link = links[i];
    link.style.color = "#FF0000";
}
*/

//Version jQuery
//Sélection de tous les liens avec application de la propriété color
// $('.tabs a').css('color', '#FF0000');

//Sélection du premier lien avec la valeur retournée de l'attribut href
// console.log($('.tabs a:first').attr('href'));

//Sélection du premier lien avec la valeur modifiée de l'attribut href
// console.log($('.tabs a:first').attr('href', 'jq'));

//Sélection de tous les éléments <li> avec ajout d'une classe
// console.log($('.tabs li').addClass('active'));

//Sélection de l'élément parent de mon premier lien 
// console.log($('.tabs a:first').parent())

//Sélection des l'éléments <li> de même niveau que celui defini 
// console.log($('.tabs li:first').siblings());

//Rajout d'un élément <li> avant tous les autres éléments de même nature ainsi que l'élément <a>
// let ul = $('ul:first');
// let li = $('<li class="active"></li>');
// let a = $('<a href="#">Salut</a>');

// li.append(a); //append Permet d'inserer l'élément défini dans l'élément parent
// ul.prepend(li); //prepend Permet d'insérer l'élément défini dans l'élément parent avant tous les autres éléments de même nature

//Rajout d'un élément <li> en deuxième position ainsi que l'élément <a>
// let first_li = $('li:first');
// let li = $('<li class="active"></li>');
// let a = $('<a href="#">Salut</a>');

// li.append(a);
// first_li.after(li); //after permet d'ajouter le nouveau élément après un élément
// first_li.before(li); //after permet d'ajouter le nouveau élément avant un élément

let a = $('a:first');
// a.text('Salut'); //text permet de modifier du contenue, si sans paramètre ça retourne le text
a = a.html('<strong>Accueil</strong>'); //html permet d'injecter du contenu html, si sans paramètre ça retourne le code html
console.log(a.text());
console.log(a.attr('href')); //attr permet de retourner la valeur de l'attribut
console.log(a.css('color')); //css permet de retourner la valeur de la propriété css

//Greffer un événement avec jQuery
$('.tabs a').on('click', function (e) {
    console.log(e); // retourne l'événement qui est clické
    console.log(this); //retourne un élément qui est clické
    console.log($(this)); //retourne un élément jQuery qui est clické
})

// Fonctionnement du système d'onglet version jQuery
jQuery(function ($) {
    
    let displayOnglet = function ($a, duration) {
        if (duration === undefined) {
            duration = 500;
        }

        let $li = $a.parent();
        if ($li.hasClass('active')) {
            return false;
        }

        let $target = $($a.attr('href')); //#home, #mention...

        $li.siblings('.active').removeClass('active');
        $li.addClass('active');
        console.log($li);
        $target.siblings(':visible').fadeOut(duration, //:visible est un sélecteur spécifique à jQuery qui permet d'indiquer de sélectioner tous les élément qui sont visible, donc qui ne sont pas en display none
            function () {
                $target.fadeIn(duration);
            });
    };

    $('.tabs a').click(function (e) { //événement click raccourci
        let $a = displayOnglet($(this));
    })

    let hash = window.location.hash;
    if (hash != '') {
        let $a = $('.tabs a[href="' + hash + '"]')
        if ($a.length > 0) {
            displayOnglet($a, 0);
        };
    }

    //Ajax avec jQuery
    let $ul = $('#users');
    let loader = $('<div>Chargement</div>').appendTo($('body'));

    $.get('https://jsonplaceholder.typicode.com/users')
        .done(function (data, textStatus, jqXHR) {
            data.forEach(function (user) {
                let $li = $('<li>').text(user.name);
                $li.appendTo($ul); //appendTo permet injecter l'élément li dans l'élément ul
            })

        })

        .fail(function (jqXHR, textStatus, errorThrown) {
            console.log('fail');
        })

        .always(function () {
            loader.remove();
            console.log('always');
        });
})