function createVowel(vraj) {
    var label = document.createElement('label');
    label.innerText = vraj;
    document.body.appendChild(label)
}

function forOfloop() {

    let vowel = ['a', 'e', 'i', 'o', 'u'];

    for (letter of vowel) {
        createVowel(letter);
        //console.log(char);
    }
    /*for(let i = 0; i < vowel.length; i++){
        console.log(vowel[i]);
    }*/
}