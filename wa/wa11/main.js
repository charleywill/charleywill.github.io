const displayedImage = document.querySelector('.displayed-img');
const thumbBar = document.querySelector('.thumb-bar');

const btn = document.querySelector('button');
const overlay = document.querySelector('.overlay');

/* Declaring the array of image filenames */
const imgNames = ['pic1.jpg', 'pic2.jpg', 'pic3.jpg', 'pic4.jpg', 'pic5.jpg'];
/* Declaring the alternative text for each image file */
const imgAlts = ["close up eye", "sea foam or a rock", "flowers", "egyptians", "butterfly"];

/* Looping through images */
for(let i = 0; i < imgNames.length; i++){
    const newImage = document.createElement('img');
    newImage.setAttribute('src', imgNames[i]);
    newImage.setAttribute('alt', imgAlts[i]);
    thumbBar.appendChild(newImage);
    newImage.addEventListener('click', () => {
        displayedImage.setAttribute('src', imgNames[i]).setAttribute('alt', imgAlts[i]);
    });
}

/*btn darken*/
btn.addEventListener('click', () => {
    overlay.style.backgroundColor = "grey";
});








/* Wiring up the Darken/Lighten button */
