let my_var = 10;
console.log("hello world");

document.getElementById("my_head").addEventListener("click", function(e){
    alert("Switching Subjects");
    document.getElementById("paragraph").innerHTML = "Jude Victor William Bellingham (born 29 June 2003) is an English professional footballer who plays as a midfielder for La Liga club Real Madrid and the England national team. Known for his pace, dribbling, passing and composure, he is widely regarded as one of the best players in the world.";
    document.getElementById("image").src = "../img/bellingham.jpg";
    document.getElementById("my_head").innerHTML = "Jude Bellingham";
})

