var randomnumber1 = Math.floor(Math.random()*6) + 1;
var randomnumber2 = Math.floor(Math.random()*6) + 1;

// alert(randomnumber1);

var image1 = document.querySelectorAll("img")[0];
var image2 = document.querySelectorAll("img")[1];

image1.setAttribute("src","dice"+randomnumber1+".png");
image2.setAttribute("src","dice"+randomnumber2+".png");

if(randomnumber1 > randomnumber2){
    document.querySelector("h1").innerHTML="Winner is Player-1";
}
else if(randomnumber1 < randomnumber2){
    document.querySelector("h1").innerHTML="Winner is Player-2";
}
else{
    document.querySelector("h1").innerHTML="Both are Winners";
}