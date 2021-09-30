// https://leetcode.com/problems/maximum-subarray/

const maxSubArray = (nums) => {
//     BASE CASE
    if(nums.length == 1)
    {
        return nums[0]
    }
    else if(nums.length == 0)
    {
        return 0
    }
//     Current SUM
   let sum = nums[0]
   let maxS = nums[0]
   for(let i=1; i< nums.length; i++){
//        Max of current element and the previous element
       sum = Math.max(nums[i], sum+nums[i])
       maxS = Math.max(maxS,sum)
   }
    return maxS
};

// ### Dry Run ###
nums = [5,4,-1,7,8]

n = 5
maxS = num[0] = 5
sum = num[0] = 5
// 1st Iteration
i=1 1<5 true
sum = max(nums[i], nums[i]+sum) = max(4,4+5) = max(4,9) = 9
maxS = max(maxS, sum) = max(5, 9) = 9

n = 5
maxS = 9
sum = 9
// 2nd Iteration
i=2 2<5 true
sum = max(nums[i], nums[i]+sum) = max(-1, 9-1) = max(-1,8) = 8
maxS = max(maxS, sum) = (9,8) = 9

n=5
maxS = 9
sum = 8
// 3rd Iteration
i=3 3<5 true
sum = max(nums[i], sum+nums[i]) = max(7, 7+8) = max(7,15) = 15
maxS = max(9,15) = 15

n=5
maxS = 15
sum = 15
// 4th iteration
i=4 4<5 true
sum = max(nums[i],sum+nums[i]) = max(8,8+15) = max(8,23) = 23
maxS = max(15,23) = 23

n=5
maxS = 23
sum = 23
// 5th Iteration
i=5 5<5 false
return maxS that is 23
