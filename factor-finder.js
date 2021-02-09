let userInput = prompt("Factor Finder");
let factors = [];
let b = [];
let divisor;

//sorting function from the internet.
function compare(a, b) {
    return a - b;
}

function getFact() {
    for (let i = 1; i != userInput; i++) {
        divisor = i;
        let product = userInput / divisor;
        
        if (product % 1 === 0) {
            factors[factors.length] = divisor;
            factors[factors.length] = product;
        }
    }
    for (let i = 0; i < factors.length; i++) {
        if (b.indexOf(factors[i]) === -1) {
            b.push(factors[i]);
        }
    }
    b.sort(compare);
    alert("Factors of " + userInput + ": " + b);
}

getFact();
