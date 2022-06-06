

let fetched = document.getElementById("fetch-post");

fetched.onclick = function() {
let prova = fetch('https://jsonplaceholder.typicode.com/posts/1')
console.log(prova);
}