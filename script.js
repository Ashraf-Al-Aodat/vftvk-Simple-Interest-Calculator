function compute() {
    p = document.getElementById('principal').value;

    let principal = document.getElementById('principal');

    let rate = document.getElementById('rate').value;

    let years = document.getElementById('years').value;

    let amount = principal.value * years * (rate / 100);

    let year = new Date().getFullYear() + parseInt(years);

    if (principal.value < 1) {
        alert('Enter a positive number!');
        principal.focus();
    } else {
        document.getElementById('result').innerHTML =
            '<br/><br/>If you deposit <mark>' +
            principal.value +
            '</mark>,<br>at an interest rate of <mark>' +
            rate +
            '%</mark><br>You will receive an amount of <mark>' +
            amount +
            '</mark>,<br>in the year <mark>' +
            year +
            '</mark><br>';
    }
}

function updateRate() {
    let rateval = document.getElementById('rate').value;
    document.getElementById('rate_val').innerText = rateval;
}
