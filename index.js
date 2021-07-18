
var diceSides = 6;
var firstRandomNum =  Math.ceil(Math.random()* diceSides);
var secondRandomNum = Math.ceil(Math.random()* diceSides);
document.querySelectorAll("img")[0].setAttribute("src", "images/dice"+firstRandomNum+".png");
document.querySelectorAll("img")[1].setAttribute("src", "images/dice"+secondRandomNum+".png");

if(firstRandomNum > secondRandomNum){
  document.getElementsByTagName("h1")[0].innerHTML = "Player 1 Wins";
}
else if(firstRandomNum < secondRandomNum){
  document.getElementsByTagName("h1")[0].innerHTML = "Player 2 Wins";
}
else{
  document.getElementsByTagName("h1")[0].innerHTML = "Tie";
}
