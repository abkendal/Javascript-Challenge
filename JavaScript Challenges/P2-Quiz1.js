function getRelationship(x, y) {
    // First the function checks if any of the inputs are NaN or undefined. If they are, they are turned into a string based on which they were. 
    // These strings are then used as inputs for the rest of the function.
    // It is important to specify NaN that arent alrady strings becasuse otherwise they will be overridden.
    if (x === undefined) {x = 'undefined';}
    if (y === undefined) {y = 'undefined';}
    if (isNaN(x) && typeof x !== 'string') {x = 'NaN';}
    if (isNaN(y) && typeof y !== 'string') {y = 'NaN';} 
    
    
    // Then the function either performs the compare relationship or tells the user that it cannot
    // perform the compare relationship becasue one or both of the variables aren't numbers.
    // If the function is not able to perform the compare relationship, it tells the user
    // which arguments are not numbers.
    if (typeof x === "number" && typeof y === "number" && x>y) {
        return(">");
    }
    else if (typeof x === "number" && typeof y === "number" && x<y) {
        return("<");
    }
    else if (typeof x === "number" && typeof y === "number" && x===y) {
        return("=");
    }
    else if (typeof x === "string" && typeof y === "number") {
        return("Can\'t compare relationships because " + x + " is not a number");
    }
    else if (typeof x === "number" && typeof y === "string") {
        return("Can\'t compare relationships because " + y + " is not a number");
    }
    else if (typeof x === "string" && typeof y === "string") {
        return("Can\'t compare relationships because " + x + " and " + y + " are not numbers");
    }
};

// Try logging these functions to test your code!
//console.log(getRelationship(1,4));
//console.log(getRelationship(1,1));
//console.log(getRelationship("that",2));
//console.log(getRelationship(4,1));
//console.log(getRelationship("this","something else"));
//console.log(getRelationship(3));
//console.log(getRelationship("hi"));
//console.log(getRelationship(NaN));
//console.log(getRelationship(NaN, undefined));
//console.log(getRelationship(NaN, NaN));