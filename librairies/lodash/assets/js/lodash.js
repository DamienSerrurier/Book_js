//Méthodes pour les chaîne de caractères
let trim = '  zer   ';

console.log(_.trim(trim)); //string permet de nettoyer une chaîne de caractère des espaces ou un caractère défini

let trimZero = '00005480000';

console.log(_.trim(trimZero, '0'));

let pad = 'zer';

console.log(_.pad(pad, 6)); //pad permet de rajouter un nombre de caractères définis

let padStart = '01';

console.log(_.padStart(padStart, 6, 0)); //padStart permet de rajouter un nombre de caractères en début de chaîne

let capitalize = 'john doe';

console.log(_.capitalize(capitalize)); //capitalize permet de convertir le premier caractère en majuscule et les suivants en minuscule

let snakeCase = 'john doe';

console.log(_.snakeCase(snakeCase)); //snakeCase permet de convertir des espaces ou des titets par des underscores

let kebabCase = 'john_doe';

console.log(_.kebabCase(kebabCase)); //kebabCase permet de convertir des espaces ou des underscore par des tirets

let kebabCaseURL = 'Je suis une URL intéréssante';

console.log(_.kebabCase(kebabCaseURL)); //Dans ce cas les accents disparaîtront, tous sera en minuscule et les espaces seront remplacés par un tiret

let upperCase = '__foo bar__';

console.log(_.upperCase(upperCase)); //upperCase permet de convertir une chaîne de caractère en majuscule en remplacant les underscore par des espaces

//Méthodes pour les tableaux
let tab = [1, 2, 3];
let tab2 = [4, 5];

console.log(_.concat(tab, tab2, 4, 6)); //concat permet de fusionner des tableaux très facilement et d'ajouter des données suplémentaire à celui-ci

let tabWithout = [1, 3, 2];

console.log(_.without(tabWithout, 3)); //without permet de supprimer une valeur dans un tableau

let comment = {
    username: 'John',
    contant: 'Salut les gens'
};
let tabObjectWithout = [1, comment, 3];

console.log(_.without(tabObjectWithout, comment, 3)); //Dans ce cas l'objet et une valeur est supprimés

let filterTab = [1, 2, 3];

console.log(_.filter(filterTab, function (element) { //filter permet de filtrer des éléments par rapport à une condition
    return element > 1;
}))

let users = [{
        'user': 'fred',
        'age': 40,
        'active': false
    },
    {
        'user': 'barney',
        'age': 36,
        'active': true
    },
    {
        'user': 'pebbles',
        'age': 1,
        'active': true
    }
];

console.log(_.filter(users, function (user) { //Dans ce cas je récupère les objets actifs
    return user.active;
}));

console.log(_.filter(users, { //Dans ce cas l'objet fait office de condition
    active: false
}));

console.log(_.find(users, { //find permet de retouner le premier objet correspondant au critère défini
    active: false
}));

console.log(_.orderBy(users, 'user', 'asc')); //orderBy permet de classer des données par ordre croissant (asc) ou (desc)

let users2 = [{
        'user': 'fred',
        'age': 40,
        'active': false
    },
    {
        'user': 'fred',
        'age': 18,
        'active': false
    },
    {
        'user': 'barney',
        'age': 36,
        'active': true
    },
    {
        'user': 'pebbles',
        'age': 1,
        'active': true
    },
    {
        'user': 'pebbles',
        'age': 25,
        'active': true
    }
];

console.log(_.orderBy(users2, ['user', 'age'], ['asc', 'desc'])); //dans ce cas le clasement s'organise par ordre alphabétique pour les utilisateurs et par ordre décroissant pour les utilisateurs ayant les mêmes peénoms

console.log(_.map(users, function (user) { //map permet de parcourir chaque élément, d'éffectuer des opérations sur ces éléments là et de retourner un résultat
    return user.age;
}));

console.log(_.map(users2, function (user) {
    user.age = user.age * 2;
    return user;
}));

_.forEach(users, function (user, key) { //forEach permet de parcourir chaque éléments de la collection
    console.log(key, '=>', user.user);
})

_.forEach(users[0], function (value, key) { //Dans ce cas ça parmet d'itérer sur les objets et de retourner l'objet défini
    console.log(key, '=>', value);
})

console.log(_.sample(users)); //sample permet de retourner aléatoirement un élément d'une collection

console.log(_.sampleSize(users, 2)); //sampleSize permet de retourner aléatoirement un nombre défini d'éléments d'une collection

console.log(_.groupBy(users, function (user) { //groupBy permet de créer un objet composé de clés générées à partir des résultats de l'exécution de chaque élément de la collection via l'itération
    return user.user.substr(0, 1);
}));

let user = users[0];
//Version Javascript
console.log(Object.keys(user).length);

//Version Lodash
console.log(_.size(user)); //size permet de retourner le nombre de clés dans un objet

let user2 = _.clone(user); //clone permet une donnée par rapport à une donnée existante
_.assign(user2, { //assign permet d'assigner des valeurs aux propriétés d'un objet
    active: true,
    age: 2
});

console.log(user2);

let user3 = _.assign({}, user, { //Ici assign permet de fusionner la méthode clone avec la méthode assign en créant un objet vide à partir d'un objet exitant et attribuant des valeurs aux propriétés défini à celui-ci
    active: true,
    age: 16
});

console.log(user3);

let user4 = _.assign({}, user, {
    active: true,
    age: 16
});

_.unset(user4, 'age'); //unset permet de supprimer une propriété dans un objet

console.log(user4);

let user5 = _.assign({}, user, {
    user: {
        firstname: 'John',
        lastname: 'Doe'
    },
    active: true,
    age: 16
});

_.unset(user5, 'user.firstname');

console.log(user5);

let user6 = {
    active: true,
    age: 16
};

_.set(user6, 'user.0.firstname', 'Jonathan'); //set permet de rajouter une propriété avec sa valeur dans un objet, même si l'objet user est vide ou que l'objet user n'est pas défini, il peut même créer un tableau sans qu'il soit défini grâce a son index

console.log(user6);

let user7 = {
    active: true,
    age: 36
};

if (_.has(user7, 'user.firstname') && user7.user.firstname === 'demo') { //has permet de vérifier si la propriété firstname existe dans l'objet user et que celle-ci est trictement égale à demo
    console.log('ok');
}

let user8 = {
    user: {
        firstname: 'demo'
    },
    active: true,
    age: 36
};

if (_.get(user8, 'user.firstname', false) === 'demo') { //get permet de rechercher si la propriété firstname existe dans l'objet user et que celle-ci est trictement égale à demo, si rien est trouvé une valeur par défaut si appliquera
    console.log('ok');
}

window.addEventListener('scroll', _.debounce(function () { //debounce permet retarder le déclanchement d'une fonction avec un temps en miliseconde défini
    console.log('Je scroll avec debounce');
}, 200))

window.addEventListener('scroll', _.throttle(function () { //throttle permet appeler une fois le déclanchement d'une fonction avec un temps en miliseconde défini, un troisième paramètre permet d'effectuer l'événement au début (leading) ou à la fin (trailing) de l'événement
    console.log('Je scroll avec throttle');
}, 200, {
    'trailing': true
}))