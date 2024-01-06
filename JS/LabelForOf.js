function createLabel(vraj) {
    var label = document.createElement('label');
    label.innerText = vraj + '\n';
    document.body.appendChild(label)
}

//----------------------------------------------------------------------------------------------------------------
// Print array in Label

let vowel = ['a', 'e', 'i', 'o', 'u'];

function forOfloop() {

    for (letter in vowel) {
        createLabel(letter + '-' + vowel[letter]);
        //createVowel(vowel[letter]);
        //console.log(char);
    }
    /*for(let i = 0; i < vowel.length; i++){
        console.log(vowel[i]);
    }*/
}

//----------------------------------------------------------------------------------------------------------------
// Array - PUSH & POP

let myName = ["V", "R", "A", "J"];

function arrayPush() {

    myName.push("P", "A", "T", "E", "L");

    for (x of myName) {
        createLabel(x);
    }
}

function arrayPop() {

    myName.pop();
    
    for(y of myName){
        createLabel(y);
    }
}

//----------------------------------------------------------------------------------------------------------------