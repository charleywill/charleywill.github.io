const btn = document.querySelector('button');
const comic = document.querySelector('p');
const comicTitle = document.querySelector('h1');
const comicImage = document.querySelector('img');

async function getComic(){
    //random number
    let rand = Math.floor(Math.random() * (3000)) + 1;
    let num = rand.toString();
    //API success or failure
    const apiUrl= `https://corsproxy.io/?https://xkcd.com/${num}/info.0.json`;
    const response = await fetch(apiUrl);
    if(!response.ok){
        throw Error(response.statusText);
    }
    const json = await response.json();
    console.log(json);

    //local variables
    const title = json.safe_title;
    const year = json.year;
    const img = json.img;
    const alt = json.alt;
    //rewrite text on html
    comicTitle.innerText = title;
    comicImage.setAttribute('src', img);
    comicImage.setAttribute('alt', alt);
    comic.innerText = year;
}
//function end
getComic();

btn.addEventListener ('click', () => {
    console.log('clicked')
    getComic();
})