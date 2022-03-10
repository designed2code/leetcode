Question https://leetcode.com/problems/plus-one/

Example 1:

Input: digits = [1,2,3]
Output: [1,2,4]
Explanation: The array represents the integer 123.
Incrementing by one gives 123 + 1 = 124.
Thus, the result should be [1,2,4].
Example 2:

Input: digits = [4,3,2,1]
Output: [4,3,2,2]
Explanation: The array represents the integer 4321.
Incrementing by one gives 4321 + 1 = 4322.
Thus, the result should be [4,3,2,2].
Example 3:

Input: digits = [9]
Output: [1,0]
Explanation: The array represents the integer 9.
Incrementing by one gives 9 + 1 = 10.
Thus, the result should be [1,0].

// CODE
// ONE LINER
var plusOne = function(digits) {
  return (BigInt(digits.join("")) +1n).toString().split("")
};

// USING LOOP
var plusOne = function(digits){
//   Start the loop from back
  for(let i = digits.length-1;i>=0;i--){
//     Check if the last digit is less than 9 if it is then simply add 1 and return digits array
    if(digits[i] < 9){
      digits[i]++
      return digits }
//     If the last element is 9 then make it 0 and then again go to the if condition
    digits[i] = 0
  }
//   Worst Case if the digits array contains all the elements as 9 example digits = [9,9,9,9]
//   We need to add extra 1 to the start of the array so the final result should look like digits = [1,0,0,0,0]
  digits.unshift(1)
  return digits
}
