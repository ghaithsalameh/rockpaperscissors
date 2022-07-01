let computernumber= Math.floor((Math.random() * 3) + 1);
console.log(computernumber);
function computerplay(){
if (computernumber==1){
     computersign="rock";
} else if (computernumber==2){
     computersign="paper";} 
    else {
         computersign="scissors";
    }
}
computerplay();
console.log(computersign);
//This function will take the user inout in the function invocation and compare 
function playround(playerselection,computersign){
console.log(playerselection.toLowerCase());
console.log(computersign);
if (playerselection.toLowerCase()==computersign){
    console.log("It's a Tie!");
} else if (playerselection.toLowerCase()=="rock"&&computersign=="paper"){
    console.log("Paper beats Rock. You Lose!");
} else if(playerselection.toLowerCase()=="rock"&&computersign=="scissors"){
    console.log("Rock beats Scissors. You Win!");

} else if(playerselection.toLowerCase()=="scissors"&&computersign=="paper"){
    console.log("Scissors beats paper. You Win!");

} 
else if(playerselection.toLowerCase()=="scissors"&&computersign=="rock"){
    console.log("Rock beats Scissors. You Lose!");

} 
else if(playerselection.toLowerCase()=="paper"&&computersign=="rock"){
    console.log("Paper beats Rock. You Win!");

} 
else if(playerselection.toLowerCase()=="paper"&&computersign=="scissors"){
    console.log("scissors beats paper. You Lose!");

} 
}
function playgame(){
    for (let i = 0; i < 5; i++) {

}
}