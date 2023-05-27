var result = document.getElementById('result');
var btnSum = document.getElementById('btn-sum');
var btnSubtract = document.getElementById('btn-subtract');
var btnMultiply = document.getElementById('btn-multiply');
var btnDivide = document.getElementById('btn-divide');



btnSum.addEventListener('click', function() {

    let a = document.getElementById("number-one").value;
    let b = document.getElementById("number-two").value;

    if (a == "" || b == "") {
        alert("Vui lòng nhập vào hai số");
        return false;
    }

    let sum = parseInt(a) + parseInt(b);

    result.innerText = 'Result:' + sum;
});


btnSubtract.addEventListener('click', function() {

    let a = document.getElementById("number-one").value;
    let b = document.getElementById("number-two").value;

    if (a == "" || b == "") {
        alert("Vui lòng nhập vào hai số");
        return false;
    }
    let subtract = parseInt(a) - parseInt(b);
    result.innerText = 'Result:' + subtract;
});

btnMultiply.addEventListener('click', function() {

    let a = document.getElementById("number-one").value;
    let b = document.getElementById("number-two").value;

    if (a == "" || b == "") {
        alert("Vui lòng nhập vào hai số");
        return false;
    }
    let multiply = parseInt(a) * parseInt(b);
    result.innerText = 'Result:' + multiply;
});

btnDivide.addEventListener('click', function() {

    let a = document.getElementById("number-one").value;
    let b = document.getElementById("number-two").value;

    if (a == "" || b == "") {
        alert("Vui lòng nhập vào hai số");
        return false;
    }
    if (b == 0) {
        alert("Vui lòng nhập số khác 0");
    } else {
        let divide = parseInt(a) / parseInt(b);
        result.innerText = 'Result:' + divide;
    }
});