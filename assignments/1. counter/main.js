var num = document.querySelector("p");
var inc = document.querySelector(".inc");
var dec = document.querySelector(".dec");
var res = document.querySelector(".reset");

function increase() {
    num.textContent = Number(num.textContent)+1
}
function decrease() {
    num.textContent = Number(num.textContent)-1
}
function resetvalue() {
    num.textContent = 0
}

inc.addEventListener("click", increase);
dec.addEventListener("click", decrease);
res.addEventListener("click", resetvalue);