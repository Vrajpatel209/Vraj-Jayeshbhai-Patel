function Calculator(Option) {
    let a = Number(document.getElementById("Value1").value);
    let b = Number(document.getElementById("Value2").value);

    switch (Option) {
        case 'Addition':
            document.getElementById("lblAnswer").innerText = a + b;
            break;
        case 'Subtraction':
            document.getElementById("lblAnswer").innerText = a - b;
            break;
        case 'Multiplication':
            document.getElementById("lblAnswer").innerText = a * b;
            break;
        case 'Division':
            document.getElementById("lblAnswer").innerText = a / b;
            break;
        default:
            alert("Enter correct input value");
            break;
    }
}