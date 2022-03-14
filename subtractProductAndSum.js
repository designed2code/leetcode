Question https://leetcode.com/problems/subtract-the-product-and-sum-of-digits-of-an-integer/submissions/

Example 1:

Input: n = 234
Output: 15 
Explanation: 
Product of digits = 2 * 3 * 4 = 24 
Sum of digits = 2 + 3 + 4 = 9 
Result = 24 - 9 = 15
Example 2:

Input: n = 4421
Output: 21
Explanation: 
Product of digits = 4 * 4 * 2 * 1 = 32 
Sum of digits = 4 + 4 + 2 + 1 = 11 
Result = 32 - 11 = 21

// CODE
var subtractProductAndSum = function(n) {
let product = 1,sum=0
while(n > 0){
    // Get the last Digit
    let lastDigit = n%10
    // Multiply     
    product = product * lastDigit
    // Add
    sum = sum + lastDigit
    // Round of the n value Example 23.4 to 23 using Math.floor
    n = Math.floor(n/10)
}
    return product - sum
};
