// reverses a string - because js does not have a reverse string built in method.
function reverse(string) {
    //return string.split("").reverse().join("");
    // Updated for emojis
    return Array.from(string).reverse().join("")

}

// Returns true for a palindrome, false otherwise.
function palindrome(string) {
    let processedContent = string.toLowerCase();
    return processedContent === reverse(processedContent);
}
