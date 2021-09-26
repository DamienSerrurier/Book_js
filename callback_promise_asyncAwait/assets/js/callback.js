//Je veux une fonction getPost qui:
//récupère le premier utilisateur depuis https://jsonplaceholder.typicode.com/users
//récupères les articles du premier utilisateur https://jsonplaceholder.typicode.com/comments?userId={ID}
//renvois les articlezs au format JSON

//Principe callback
let get = function (url, success, error) { //paramètre (success) fonction callback (fonction de rappel)
    let xhr = new XMLHttpRequest()

    xhr.onreadystatechange = function () {
        if (xhr.readyState === 4) {
            if (xhr.status === 200) {
                success(xhr.responseText); //fonction callback
            } else {
                error(xhr);
            }
        }
    }

    xhr.open('GET', url, true);
    xhr.send();
}

let getPosts = function (success, error) {
    get('https://jsonplaceholder.typicode.com/users', function (response) {
        let users = JSON.parse(response);
        get('https://jsonplaceholder.typicode.com/comments?userId=' + users[0].id, function (response) {
            let posts = JSON.parse(response);
            success(posts);
        }, function (e) {
            error('Erreur ajax', e);
        });
    }, function (e) {
        error('Erreur ajax', e);
    });

};

getPosts(function (posts) {
    console.log('Le premier article', posts[0]);
}, function (error) {
    console.error(error);
});