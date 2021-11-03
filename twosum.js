// Two Sum - Submission Detail - LeetCode https://leetcode.com/problems/two-sum/
// https://levelup.gitconnected.com/how-to-solve-two-sum-in-javascript-d1ebd9dfd3d3

//1.Declare a map, 
//2.standard for loop, 
//3.calculate the complement by target - nums[i]
//4.if complement is present in map then return current index i and map.get(complement)
//5.finally if complement is not present in map then add that element into map by map.set(nums[i], i)

const twoSum = (nums, target) => {
    let map = new Map()
    let i;
    let length = nums.length
    for(i=0;i<length;i++){
        let complement = target - nums[i]
        if(map.has(complement)){
            return [i,map.get(complement)]
        }
        map.set(nums[i], i)
    }
}
  
  console.log(twoSum([2,7,11,15], 9)); // [1, 2]
