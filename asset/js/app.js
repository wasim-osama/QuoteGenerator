import masculineQuotes from "./quote.js";
let quoteContainer = document.getElementById('Quote'),
    nameContainer = document.getElementById('name'),
    changeBtn = document.getElementById('changeBtn'),
    postTweet= document.querySelector('.postTweet'),
    copyBtn = document.getElementById('copyBtn'),
    input = document.getElementById('copyQuote')

changeBtn.addEventListener('click',() =>{
    showQuote();
})

function showQuote() {
    let Qhtml = "",
        Nhtml = ""
        Qhtml = masculineQuotes[Math.floor(Math.random()*(masculineQuotes.length))].quote;
        Nhtml = masculineQuotes[Math.floor(Math.random()*(masculineQuotes.length))].name;
        input.value = Qhtml+'  ~ '+Nhtml;
    quoteContainer.innerHTML = Qhtml;
    nameContainer.innerHTML = '~ '+Nhtml;
}
function shareQuote() {
   let sharequote = quoteContainer.textContent;
   let namequote = nameContainer.textContent;
   window.open('https://twitter.com/intent/tweet?url='+sharequote+'%0A'+namequote);
}

function copy() {
    input.select();
    document.execCommand('copy');
}


postTweet.addEventListener('click', () => {
    shareQuote();
})
copyBtn.addEventListener('click', () => {
    copy();
})


showQuote();