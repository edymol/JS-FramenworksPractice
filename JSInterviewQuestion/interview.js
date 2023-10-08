// reversing a phrase and reversing each word in a phrase
let string = "Welcome to this Javascript Guide!";
let reverseEntireSentence = reverseBySeparator(string, "");
let reverseEachWord = reverseBySeparator(reverseEntireSentence, " ");

function reverseBySeparator(string, separator) {
  return string.split(separator).reverse().join(separator);
}

// Create a div element
const reversedSentenceDiv = document.createElement("h2");
reversedSentenceDiv.textContent = reverseEntireSentence;

const reversedWordsDiv = document.createElement("h2");
reversedWordsDiv.textContent = reverseEachWord;

// Append the divs to the document's body
document.body.appendChild(reversedSentenceDiv);
document.body.appendChild(reversedWordsDiv);


// Check if an object is an array
const myArray = [1, 2, 3];
console.log(Array.isArray(myArray)); // Output: true
const myObject = { name: "John", age: 30 };
console.log(Array.isArray(myObject)); // Output: false
const myArrayDiv = document.createElement("h2");

myArrayDiv.textContent = myArray;
document.body.appendChild(myArrayDiv);

const myArray1 = [1, 2, 3];
console.log(myArray instanceof Array); // Output: true
const myObject1 = { name: "John", age: 30 };
console.log(myObject instanceof Array); // Output: false

// check if a number is multiple of 3, of 5, or of both 3 and 5

for (let i = 1; i <= 100; i++) {
    console.log((i % 3 === 0 ? "Fizz" : "") + (i % 5 === 0 ? "Buzz" : "") || i);
}

// Given two strings, return true if they are anagrams of one another

const isAnagramDiv = document.createElement('div');
document.body.appendChild(isAnagramDiv);

let str1 = "Maria";
let str2 = "Ariam";
let isAnagram = function (str1, str2){
    

    if (str1.length !== str2.length) {
        return false;
    } else {
        let sortStr1 = str1.toLowerCase().split("").sort().join("");
        let sortStr2 = str2.toLowerCase().split("").sort().join("");
        return sortStr1 === sortStr2;
    }
}
const result = isAnagram(str1, str2);
isAnagramDiv.textContent = `Are "${str1}" and "${str2}" anagrams? ${result ? "Yes" : "No"}`;

