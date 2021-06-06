(function () {
    /*
    LORSQUE l'on clique sur un onglet
        ON RETIRE la classe active de l'onglet actif
        J'AJOUTE la classe active à l'onglet actuel

        ON RETIRE la classe active sur le contenu actif
        j'AJOUTE la classe active sur le contenu correspondant à mon clique
     */

    let afficherOnglet = function (a, animations) {

        if (animations === undefined) {
            animations = true;
        }

        let li = a.parentNode;
        let div = a.parentNode.parentNode.parentNode;
        let activeTab = div.querySelector('.tab-content.active'); //Contenu actif
        let display = div.querySelector(a.getAttribute('href')); //Contenu à afficher

        if (li.classList.contains('active')) {
            return false;
        }

        div.querySelector('.tabs .active').classList.remove('active');
        li.classList.add('active');

        if (animations) {
            activeTab.classList.add('fade');
            activeTab.classList.remove('in');
            let transitionend = function () {
                this.classList.remove('fade');
                this.classList.remove('active');
                display.classList.add('active');
                display.classList.add('fade');
                display.offsetWidth; //offsetWidth retourne la lageur d'un élément et offsetHeight retourne la taille d'un élément
                display.classList.add('in');
                activeTab.removeEventListener('transitionend', transitionend);
                activeTab.removeEventListener('webkitTransitionEnd', transitionend);
                activeTab.removeEventListener('oTransitionEnd', transitionend);
            };
            activeTab.addEventListener('transitionend', transitionend);
            activeTab.addEventListener('webkitTransitionEnd', transitionend);
            activeTab.addEventListener('oTransitionEnd', transitionend);

        } else {
            display.classList.add('active');
            activeTab.classList.remove('active');
        }
         //On ajoute la classe fade à l'élément actif
        //A la fin de l'animation
        //On retire la classe fade et active
        //On ajoute la classe active et fade à l'élément a afficher
        //On ajoute la classe in
    };

    let tabs = document.querySelectorAll('.tabs a');

    for (let i = 0; i < tabs.length; i++) {
        tabs[i].addEventListener('click', function (event) {
            afficherOnglet(this);
        })
    }

    /*
    Je RECUPERE le hash
    AJOUTER LA cLASSE active sur le lien href="hash"
    RETIRER LA CLASSE active sur les autres onglets
    AFFICHER / MASQUER les contenus
    */

    let hashChange = function (e) {
        let hash = window.location.hash; //window.location permet de retouber tout un tas d'information sur le lien
        let a = document.querySelector('a[href="' + hash + '"]');

        if (a !== null && !a.parentNode.classList.contains('active')) {
            afficherOnglet(a, e !== undefined);
        }
    }

    window.addEventListener('hashchange', hashChange);
    hashChange();
})()