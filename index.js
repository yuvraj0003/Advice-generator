
const button = document.querySelector(".container button");
const id = document.querySelector('.container p');
const advice = document.querySelector(".container h1");





function main(data){
    advice.innerText = JSON.stringify(data['advice']);
    id.innerText = "ADVICE #" + JSON.stringify(data['id']);
}


button.addEventListener("mousedown" , function(){

    const url = "https://api.adviceslip.com/advice";

    fetch(url)
    .then(response => response.json())
    .then(data => main( data['slip'] )); 
})
