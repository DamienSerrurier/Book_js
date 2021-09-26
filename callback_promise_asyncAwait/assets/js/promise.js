//Je veux une fonction getPost qui:
//récupère le premier utilisateur depuis https://jsonplaceholder.typicode.com/users
//récupères les articles du premier utilisateur https://jsonplaceholder.typicode.com/comments?userId={ID}
//renvois les articlezs au format JSON

//Principe de promesse (promise)
let get = function (url) {
    return new Promise(function (resolve, reject) { //promesse
        let xhr = new XMLHttpRequest()

        xhr.onreadystatechange = function () {
            if (xhr.readyState === 4) {
                if (xhr.status === 200) {
                    resolve(xhr.responseText); //fonction callback
                } else {
                    reject(xhr);
                }
            }
        }
        
        xhr.open('GET', url, true);
        xhr.send();
    })
}

let getPosts = function () {
    return get('https://jsonplaceholder.typicode.com/users').then(function (response) {
        let users = JSON.parse(response);
        // throw 'AJAX'; //exeption capturé et renvoyé au paramètre du catch
        return get('https://jsonplaceholder.typicode.com/comments?userId=' + users[0].id)
    }).then(function (response) {
        let posts = JSON.parse(response);
        return posts;
    })
};

getPosts().then(function (posts) {
    console.log(posts[0]);
}).catch(function (error) {
    console.log(error);
}).then(function () {
    console.log('Fin des requêtes AJAX');
})

/**
 * Promesse
 * let p = new Promise(function(resolve, reject){
 * ......
 * ......
 * resolve(...)
 * })
 * 
 * 
 * p.then(function(response) {...})
 * .then(function(...) {})
 * .then(function(...) {})
 * 
 * .catch(function(error) {...})
 */