Question https://leetcode.com/problems/number-of-good-pairs/

Given an array of integers nums, return the number of good pairs.

A pair (i, j) is called good if nums[i] == nums[j] and i < j.

Example 1:

Input: nums = [1,2,3,1,1,3]
Output: 4
Explanation: There are 4 good pairs (0,3), (0,4), (3,4), (2,5) 0-indexed.
Example 2:

Input: nums = [1,1,1,1]
Output: 6
Explanation: Each pair in the array are good.
Example 3:

Input: nums = [1,2,3]
Output: 0

// CODE TIME COMPLEXITY O(n^2)
var numIdenticalPairs = function(nums) {
     let result = 0
    for(let i =0;i<=nums.length;i++){
        for(let j=i+1;j<=nums.length;j++){
            if(nums[i] == nums[j] && i<j){
                result++
            }
        }
    }
    return result
}
// CODE TWO POINTER APPROACH

const numIdenticalPairs = (nums) => {
  let left = 0,right=nums.length-1
  let count = 0
  while(left<right){
    if(nums[left] == nums[right]){
      count++
    }
    right--
    if(left == right){
//       RESET VALUES OF LEFT AND RIGHT
      left++
      right = nums.length-1
    }
  }
  return count
}
