// https://leetcode.com/problems/reverse-integer/
// REFER :- https://rishabh1403.com/posts/coding/leetcode/2019/11/leetcode-solution-of-reverse-integer-in-javascript
// STEPS
// 1. CONVERT THE NUMBER TO STRING, THEN SPLIT, THEN REVERSE, THEN JOIN, THEN CONVERT IT AGAIN INTO NUMBER USING PARSEINT
// 2. CHECK FOR THE SPECIAL CONDITION MENTIONED THE QUESTION
// 3. CHECK IF THE NUMBER IS POSITIVE OR NEGATIVE USING MATH.SIGN

var reverse = function(x) {
  
/*Convert the number to string then split it reverse it and join it again, now finally the      parseInt method converts the string to a number*/
const reversedInt = parseInt(Math.abs(x).toString().split('').reverse().join(''));
  
//Check for the edge condition mentioned in the question
  if (reversedInt > 2**31) return 0;
  
// 1.The sign() function returns 1 if the number is greater than 0.
// 2.The sign() function returns 0 if the number is equal to 0.
// 3.The sign() function returns -1 if the number is less than 0.
    
  return reversedInt * Math.sign(x);
    
};
