(function () {

    let scrollY = function () {
        let supportPageOffset = window.pageXOffset !== undefined;
        let isCSS1Compat = ((document.compatMode || "") === "CSS1Compat");

        return supportPageOffset ? window.pageYOffset : isCSS1Compat ? document.documentElement.scrollTop : document.body.scrollTop;
    };

    window.makeSticky = function (element) {
        /*
            L'ORSQUE L'ON scroll
                SI le menu sors de l'écran
                ALORS il deviendra fixe
            */

        let rect = element.getBoundingClientRect();
        let offset = parseInt(element.getAttribute('data-offset') || 0, 10); //getAttribute permet de récupérer un attribut et s'il n'y a pas cet attribut dans un element ça sera 0
        if (element.getAttribute('data-constraint')) {
            var constraint = document.querySelector(element.getAttribute('data-constraint'));
        } else {
            var constraint = document.body;
        }

        let constraintRect = constraint.getBoundingClientRect();
        let constraintBottom = constraintRect.top + scrollY() + constraintRect.height - offset - rect.height;
        let top = rect.top + scrollY(); //getBoundingClientRect renvoie la taille d'un élément et sa position par rapport à la zone d'affichage(viewport)
        let fake = document.createElement('div');

        fake.style.width = rect.width + "px";
        fake.style.height = rect.height + "px";

        //fonctions
        let onScroll = function () {

            if (scrollY() > constraintBottom && element.style.position != 'absolute') {
                element.style.position = 'absolute';
                element.style.bottom = '0';
                element.style.top = 'auto';

            } else if (scrollY() > top - offset && scrollY() < constraintBottom && element.style.position != 'fixed') {
                element.classList.add('fixed');
                element.style.position = 'fixed';
                element.style.top = offset + "px";
                element.style.bottom = 'auto';
                element.style.width = rect.width + "px";
                element.parentNode.insertBefore(fake, element);

            } else if (scrollY() < top - offset && element.style.position != 'static') {
                element.classList.remove('fixed');
                element.style.position = 'static'
                if (element.parentNode.contains(fake)) {
                    element.parentNode.removeChild(fake);
                }
            }
        };

        let onresize = function () {
            element.style.width = "auto";
            element.classList.remove('fixed');
            element.style.position = 'static'
            fake.style.display = "none";
            rect = element.getBoundingClientRect();
            constraintRect = constraint.getBoundingClientRect();
            constraintBottom = constraintRect.top + scrollY() + constraintRect.height - offset - rect.height;
            top = rect.top + scrollY();
            top = rect.top + scrollY();
            fake.style.width = rect.width + "px";
            fake.style.height = rect.height + "px";
            fake.style.display = "block";
            onScroll();
        }

        //Ecouteurs
        window.addEventListener('scroll', onScroll);
        window.addEventListener('resize', onresize);
    }
    let elements = document.querySelectorAll('[data-sticky]');

    for (let i = 0; i < elements.length; i++) {
        makeSticky(elements[i]);
    }
})()