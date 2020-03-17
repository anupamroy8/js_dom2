let counter = 0;
var num = document.querySelector("p");

var inc = document.querySelector(".inc");
var dec = document.querySelector(".dec");
var res = document.querySelector(".reset");

function displayCounter(n) {
    if(n < 0) {
        counter = 0;
        n=0;
    }
    num.textContent = n;
}

function increase() {
    counter = counter+1;
    displayCounter(counter);
}
function decrease() {
    counter = counter-1;
    displayCounter(counter);
}
function resetvalue() {
    counter = 0;
    displayCounter(counter);
}

inc.addEventListener("click", increase);
dec.addEventListener("click", decrease);
res.addEventListener("click", resetvalue);