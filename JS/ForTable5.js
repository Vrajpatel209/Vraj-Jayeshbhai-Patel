function createlabel(x, calculatedValue){
    var label = document.createElement('label');

    label.innerText = '\n\n' + calculatedValue + '\n';

    label.id = "lbl" + x;

    document.body.appendChild(label);
}

function forloop(){
    for(let x = 1; x <= 10; x++)
    {
        let mul = 5 * x;
        let calculatedValue = "5 * " + x + " = " + mul;
        createlabel(x, calculatedValue);       
    }
}