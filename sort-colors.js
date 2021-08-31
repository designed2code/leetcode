// https://leetcode.com/problems/sort-colors/submissions/
/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var sortColors = function(nums) {

    //Initializing pointers
    l = 0
    m = 0
    h = nums.length -1
    
    while(m <= h){
        
        if(nums[m] == 0){
//swap l and m and increment both
            temp = nums[m]
            nums[m] = nums[l]
            nums[l] = temp
            l++
            m++
        }
        else if(nums[m] == 1)
            m++
        
        else if(nums[m] == 2){
//             Swap m and h and decrement h
            temp = nums[h]
            nums[h] = nums[m]
            nums[m] = temp
            h--
        }
    }
    return sortColors;
};
