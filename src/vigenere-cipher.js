const CustomError = require("../extensions/custom-error");

class VigenereCipheringMachine {
  constructor(vigenereCipheringMachine) {
    if (vigenereCipheringMachine == false)
      this.vigenereCipheringMachine = "reverseMachine";
    else this.vigenereCipheringMachine = "directMachine";
    this.alphabet = "abcdefghijklmnopqrstuvwxyz";
  }

  encrypt(string, key) {
    if (!string || !key)
      throw new Error("At least one of parameters must be given");
    let encryptedText = "";
    string = string.toLowerCase();
    key = key.toLowerCase();
    let keyIndexesArr = [];
    let magicNumber = 0; // if string contains characters other than the alphabet, then you need to shift the key-index by one position
    for (let i = 0; i < key.length; i++) {
      keyIndexesArr.push(this.alphabet.indexOf(key[i]));
    }
    for (let i = 0; i < string.length; i++) {
      let indexOfCharacter = this.alphabet.indexOf(string[i]);
      if (indexOfCharacter === -1) {
        encryptedText += string[i];
        magicNumber--;
      } else {
        let indexOfKey = keyIndexesArr[(i + magicNumber) % key.length];
        encryptedText += this.alphabet[
          (indexOfCharacter + indexOfKey) % this.alphabet.length
        ];
      }
    }
    if (this.vigenereCipheringMachine === "reverseMachine") {
      encryptedText = encryptedText.split("").reverse().join("");
    }
    return encryptedText.toUpperCase();
  }
  decrypt(string, key) {
    if (!string || !key)
      throw new Error("At least one of parameters must be given");
    let decryptedText = "";
    string = string.toLowerCase();
    key = key.toLowerCase();
    let keyIndexesArr = [];
    let magicNumber = 0; // if string contains characters other than the alphabet, then you need to shift the key-index by one position
    for (let i = 0; i < key.length; i++) {
      keyIndexesArr.push(this.alphabet.indexOf(key[i]));
    }
    for (let i = 0; i < string.length; i++) {
      let indexOfCharacter = this.alphabet.indexOf(string[i]);
      if (indexOfCharacter === -1) {
        decryptedText += string[i];
        magicNumber--;
      } else {
        let indexOfKey = keyIndexesArr[(i + magicNumber) % key.length];
        if (indexOfCharacter - indexOfKey < 0) {
          indexOfCharacter = indexOfCharacter + 26;
        }
        decryptedText += this.alphabet[
          (indexOfCharacter - indexOfKey) % this.alphabet.length
        ];
      }
    }
    if (this.vigenereCipheringMachine === "reverseMachine") {
      decryptedText = decryptedText.split("").reverse().join("");
    }
    return decryptedText.toUpperCase();
  }
}

module.exports = VigenereCipheringMachine;

// const directMachine = new VigenereCipheringMachine();

// const reverseMachine = new VigenereCipheringMachine(false);
/* 
//console.log(directMachine.encrypt("ack at", "alp"));
console.log(reverseMachine.encrypt("ANZ AE", "alp")); */

/* console.log(
  directMachine.encrypt("Example of sequence: 1, 2, 3, 4.", "lilkey")
); */

// 'PFLWTJP WQ CIOFMYMI: 1, 2, 3, 4.'
