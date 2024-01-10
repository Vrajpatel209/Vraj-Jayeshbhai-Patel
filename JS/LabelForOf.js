function createLabel(vraj) {
    var label = document.createElement('label');
    label.innerText = vraj + '\n';
    document.body.appendChild(label)
}

function createLabelName(patel) {
    var label = document.createElement('label');
    label.innerText = patel;
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
        createLabelName(x);
    }
    createLabelName(" : ")
}

function arrayPop() {

    myName.pop();
    createLabelName(" | ")
    for(y of myName){
        createLabelName(y);
    }
    createLabelName(" | ")
}

//----------------------------------------------------------------------------------------------------------------