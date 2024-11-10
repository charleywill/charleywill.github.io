const displayedImage = document.querySelector('.displayed-img');
const thumbBar = document.querySelector('.thumb-bar');

const btn = document.querySelector('button');
const overlay = document.querySelector('.overlay');

/* Declaring the array of image filenames */
const imgNames = ['pic6.jpg', 'pic7.jpg', 'pic8.jpg', 'pic9.jpg', 'pic10.jpg'];
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
let toggle = false;
btn.addEventListener('click', () => {
    if(!toggle){
        overlay.style.backgroundColor = "rgba(0, 0, 0, 0.5)";
        toggle = true;
    }
    else{
        overlay.style.backgroundColor = "rgba(0, 0, 0, 0.0)";
        toggle = false;
    }
    
});








/* Wiring up the Darken/Lighten button */
