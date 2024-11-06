function tellFortune(numKids, partner, location, jobTitle){
    let fortune = 'You will be a ' + jobTitle + ' in ' + location + ' and married to ' + partner + ' with ' + numKids + ' kids.';
    console.log(fortune);
}
tellFortune(3, 'Mary', 'Germany', 'Engineer');
tellFortune(5, 'George', 'Spain', 'Architect');
tellFortune(0, 'Charlie', 'New York', 'Designer');


function calculateDogAge(age){
    let dogAge = age*7;
    console.log('Your doggie is ' + dogAge + ' years old in dog years!');
}
calculateDogAge(3);
calculateDogAge(1);
calculateDogAge(8);


function reverse(number){
    number = number+"";
    return n.split("").reverse().join("");
}


function alphabet_order(str){
    return str.split('').sort().join('');
}