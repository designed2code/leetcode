//https://leetcode.com/problems/squares-of-a-sorted-array/

var sortedSquares = function(nums) {
//     One Liner (Not efficient)
   // let squaredArray =  nums.map((num) => num * num ).sort((a,b) => a - b)
   // return squaredArray
  
  
  let length = nums.length
  let start = 0
  let end = length - 1
  let result = []
  let i;
//     Start the array from end
  for(i = length-1; i>=0 ; i--){
      if(Math.abs(nums[start]) < Math.abs(nums[end])){
          result[i] = (nums[end]**2)
          end--
      }else{
          result[i] = (nums[start]**2)
          start++
      }
  }
    return result
};
Time Complexity O(n) Space complexity O(n)
