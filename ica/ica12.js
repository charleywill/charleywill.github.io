const apiUrl='https://catfact.ninja/fact';
const btn = document.querySelector ('button');
const catfacts = document.querySelector ('p');

function getJoke(){
    fetch(apiUrl)
    .then (response => {
        if (!response.ok) {
            throw new Error ("Network response was not ok");
        }
        return response. json();
    })

    .then(data => { 
        console.log(data.fact);
        thefact = data.fact;
        catfacts.innerText = thefact;
    })
    .catch (error => {
        console.error('Error:', error);
    });
}
getJoke();

btn.addEventListener ('click', () => {
    console.log('clicked')
    getJoke();
})
