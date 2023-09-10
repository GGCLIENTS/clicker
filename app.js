var btn = document.getElementsByTagName('Button')[0];
var bt = document.getElementsByTagName('Button')[1];
var h = document.getElementsByTagName('h1')[0];
var i = 0
var hasPro
var hassup
var hasgod
console.log(h)
console.log(btn)
function color(){
    i++
    h.innerText = "Points:  " + i
    if (hasPro){
        i+= 3
    }else{

    }
    if (hassup){
        i+= 100
    }else{

    }
    if (hasgod){
        i+= 1000
    }else{

    }
}
function button() {
    if (i >= 10) {
        i -= 10; 
        hasPro = true
        h.innerText = "Points: " + i;
    } else {
        alert("YOU NEED 10 TO BUY THIS BOZO")
    }
}
function butto() {
    if (i >= 100) {
        i -= 100; 
        hassup = true
        h.innerText = "Points: " + i;
    } else {
        alert("YOU NEED 100 TO BUY THIS BOZO")
    }
}
function l() {
    if (i >= 10000) {
        i -= 10000; 
        hasgod = true
        h.innerText = "Points: " + i;
    } else {
        alert("YOU NEED 10000 TO BUY THIS BOZO")
    }
}
