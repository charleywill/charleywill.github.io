
const customName = document.getElementById('customname');
const randomize = document.querySelector('.randomize');
const story = document.querySelector('.story');

function randomValueFromArray(array){
  const random = Math.floor(Math.random()*array.length);
  return array[random];
}

let storyText = "It was 90 fahrenheit outside, so :insertx: went down to the pool to cool off. They went to pick up :inserty:, but no store in town had any, then :insertz:. He watched my struggle and was offering help, unfortunately :insertx: weighs 1000 pounds, and couldn't fit us in the car.";
let insertX = ["Batman", "Alfred", "Cat Woman"];
let insertY = ["cool drinks", "pineapple", "sunscreen"];
let insertZ = ["HE arrived", "my friend called me", "a stranger appeared"];

randomize.addEventListener('click', result);

function result() {
    let newStory = storyText;
    let xItem = randomValueFromArray(insertX);
    let yItem = randomValueFromArray(insertY);
    let zItem = randomValueFromArray(insertZ);

    newStory = [
      newStory.replace(':insertx:',xItem).replace(':inserty:',yItem)
      .replace(':insertz:',zItem).replace(':insertx:',xItem)
      ];

  if(customName.value !== '') {
    const name = customName.value;
    storyText= storyText.replace('He',name);
  }

  if(document.getElementById("uk").checked) {
    const weight = Math.round(300*0.071429) + ' stones';
    const temperature =  Math.round(((94-32) * 5) /9) + ' centigrade';
    storyText = storyText.replace('90 fahrenheit', temperature).replace('300 pounds',weight); 
  }

  story.textContent = newStory;
  story.style.visibility = 'visible';
}








