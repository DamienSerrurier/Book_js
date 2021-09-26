//Je veux une fonction getPost qui:
//récupère le premier utilisateur depuis https://jsonplaceholder.typicode.com/users
//récupères les articles du premier utilisateur https://jsonplaceholder.typicode.com/comments?userId={ID}
//renvois les articlezs au format JSON

//Async et Await
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

let getPosts = async function () {
    try {
        let response = await get('https://jsonplaceholder.typicode.com/users')
        let users = JSON.parse(response);
        response = await get('https://jsonplaceholder.typicode.com/comments?userId=' + users[0].id)
        let posts = JSON.parse(response);
        return posts;
    } catch (error) {
        console.log('Il y a eu une erreur ajax', error)
    }
};

let firstGetPost = async function () {
    let posts = await getPosts();
    if (posts === undefined) {
        return '';
    }
    return console.log(posts[0]);
};

let result = async function () {
    let array = await Promise.all([getPosts(), firstGetPost()])
    console.log(array);
}

result().then(function () {
    console.log('Fin des requêtes AJAX');
})

