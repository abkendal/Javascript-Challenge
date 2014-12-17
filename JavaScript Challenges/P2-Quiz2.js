var moonWalkers = [
  "Neil Armstrong",
  "Buzz Aldrin",
  "Pete Conrad",
  "Alan Bean",
  "Alan Shepard",
  "Edgar Mitchell",
  "David Scott",
  "James Irwin",
  "John Young",
  "Charles Duke",
  "Eugene Cernan",
  "Harrison Schmitt"
];

function alphabetizer(names) {
    
    //create an empty array that we will fill with the reversed names.
    var alph = [];
    
    //Iterate through all the elements in the names array, splitting each name into an array with 
    //two strings, reversing the order of the new array with an extra space, turning that array
    //into a string and then inserting that string into the output array. 
    for (x in names) {
        var temp1 = names[x].split(" ");
        var temp2 = [" " + temp1[0], temp1[1]].reverse();
        alph[x] = temp2.toString();
    };
    
    //Sort the elements in the output array in alphabetical and ascending order. 
    var alph = alph.sort();
    return alph;
};


// Try logging your results to test your code!
console.log(alphabetizer(moonWalkers));