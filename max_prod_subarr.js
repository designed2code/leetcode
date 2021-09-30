// https://leetcode.com/problems/maximum-product-subarray/submissions/

const maxProduct = (nums) => {
    
    if(nums.length == 0) return 0
    if(nums.length == 1) return nums[0]
    
   let prevMax = nums[0]
   let prevMin =  nums[0]
   let maxProduct = nums[0]
   
   for(let i=1; i<nums.length; i++){
       curr_max = Math.max(nums[i], nums[i]*prevMax, nums[i]*prevMin)
       curr_min = Math.min(nums[i], nums[i]*prevMax, nums[i]*prevMin)
       
       prevMax = curr_max
       prevMin = curr_min
       
       maxProduct = Math.max(prevMax, maxProduct)
   }
    return maxProduct
};

//https://leetcode.com/problems/maximum-product-subarray/discuss/416395/JavaScript-Solution-w-Explanation
