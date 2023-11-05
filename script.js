let homeh1EL=document.getElementById("homeh1")
let guesth1EL=document.getElementById("guesth1")
let count=0
function addOne() {
    count+=1;
    homeh1EL.textContent=count
}
function addTwo() {
    count+=2;
    homeh1EL.textContent=count
    
}
function addThree() {
    count+=3;
    homeh1EL.textContent=count
}

let count2=0
function addOneg() {
    count2+=1;
    guesth1EL.textContent=count2
}
function addTwog() {
    count2+=2;
    guesth1EL.textContent=count2
    
}
function addThreeg() {
    count2+=3;
    guesth1EL.textContent=count2
}


function reset(){
    count=0
    homeh1EL.textContent=count
    count2=0

    guesth1EL.textContent=count2
}