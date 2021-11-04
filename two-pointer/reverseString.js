// https://leetcode.com/problems/reverse-string/submissions/

/**
 * @param {character[]} s
 * @return {void} Do not return anything, modify s in-place instead.
 */
var reverseString = function(s) {
//     1st Method Using Extra Space
   // let start = 0
   // let end = s.length - 1
   //     while(start<end){
   //     let temp = s[start]
   //     s[start] = s[end]
   //     s[end] = temp
   //     start++
   //     end--
   //     }
   //  return s
    
//    2nd Method Without Using extra space
    let start = 0
    let end = s.length - 1
    while(start<end){
        [s[start], s[end]] = [s[end], s[start]]
        start++
        end--
    }
    return s
};