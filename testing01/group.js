// You are given a string containing only uppercase letters. 
// Your task is to implement a function called compressString that compresses
//  the string by counting the consecutive occurrences of each letter
//   and returning a new compressed string.

// The compressed string should consist of each letter followed by its count.
//  If a letter appears only once consecutively, you should include the count.

// Example: 
// compressString("AAAABBBCCDAA"); // should return "A4B3C2D1A2"
// compressString("XYZ"); // should return "X1Y1Z1"
function compressString(s) {
    return s.split('').reduce((acc, char, index, arr) => {
        if (index < arr.length - 1 && char === arr[index + 1]) {
            acc.count += 1;
        } else {
            acc.compressed += char + acc.count;
            acc.count = 1;
        }
        return acc;
    }, { compressed: '', count: 1 }).compressed;
}

// Example usage:
console.log(compressString("AAAABBBCCDAA")); // Output: "A4B3C2D1A2"
console.log(compressString("")); // Output: "X1Y1Z1"

