let integer = 25; // nombre entier
let real = 2.5; // nombre réel positif ou négatif
let string = 'Salut les gens'; // chaine de caractère
// Les variables peuvent changer de type valeur au cours de l'exécution du script
// 3 + 4 = 7; '3' + 4 = '34'; '3' * 4 = 12; 'Salut les gens' * 4 = NaN Not a Number
let a = 'Salut';
let b = ' les gens';
a + b // donnera 'Salut les gens'
let c = true;
let d = false;
c && d // sont des boolean comme les résultats des comparaisons 
let eleves = ['Jean', 'John', 'Marion']; // tableau avec l'index commençant toujours par 0
eleve[0] // donnera la valeur Jean
eleve[1] // donnera la valeur John
eleve[2] // donnera la valeur Marion
let eleve = {nom: 'Marc', age: 12, moyenne: 15}; // objet avec des clés
eleve.nom // donnera la valeur Marc 
eleve.age // donnera la valeur 12
eleve.moyenne // donnera la valeur 15
eleve['nom'] // on peut l'écrir aussi sous cette forme eleve['nom']
eleve.taille = 140 // On peut définir une propriété taille par exemple qui sera rajoutée dans l'objet élève
eleves.length // donnera la longueur du tableau eleves qui est égal à 3
'Marion'.length // donnera la longueur de la chaine de caractère, ici c'est 6