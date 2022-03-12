// https://leetcode.com/problems/length-of-last-word
var lengthOfLastWord = function(s) {
   // Split the String
   //Use the trim() method to remove extra spaces from the start and end of the string
   let split = s.trim().split(' ') // ['Hello', 'World']
   
   // Get the last word by accessing the last element of the array
   let lastWord = split[split.length -1] 
   
   // Calcualte the length of the last word
   let len = lastWord.length
   return len
};

// CODE (One Liner)
const lengthOfTheLastWord = (s) => {
   return s ? s.trim().split(" ").pop().length : 0
   
/* If string exists then remove white spaces using trim() then split it to an array remove last element using pop()
and then find length of last word using length method */    
}
