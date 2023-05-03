let randomNum1=Math.floor(Math.random()*6)+1;
let dice1="dice"+randomNum1+".png";
let randomImageSource="images/"+dice1;
let image1=document.querySelectorAll("img") [0];
image1.setAttribute("src", randomImageSource);
let randomNum2=Math.floor(Math.random()*6)+1;
let dice2="images/dice"+randomNum2+".png";

document.querySelectorAll("img") [1].setAttribute("src", dice2);
if(randomNum1>randomNum2){
    document.querySelector("h1").innerHTML="🚩Player 1 Wins";
}
else if(randomNum2>randomNum1){
    document.querySelector("h1").innerHTML="🚩Player 2 Wins";
}
else{
    document.querySelector("h1").innerHTML="Draw";
}
