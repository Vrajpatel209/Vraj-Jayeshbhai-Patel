function createVowel() {
    var label = document.createElement('label');
    label.innerText = char;
    document.body.appendChild(label);
}

function forOfloop() {

    let vowel = ['a', 'e', 'i', 'o', 'u'];

    for (char of vowel) {
        createVowel(vowel);
        //console.log(char);
    }
    /*for(let i = 0; i < vowel.length; i++){
        console.log(vowel[i]);
    }*/
}0
