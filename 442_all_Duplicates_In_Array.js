https://leetcode.com/problems/find-all-duplicates-in-an-array/#:~:text=Find%20All%20Duplicates%20in%20an%20Array%20%2D%20LeetCode&text=Given%20an%20integer%20array%20nums,uses%20only%20constant%20extra%20space
// STEPS
// 1. Create a result array
// 2. Loop over the array
// 3. Get the absolute value of the current Element
// 4. Subtract 1 from the absolute value of current element to get the index 
// 5. if the element at the index position is < 0 then push it in the result array
// 6. Else if the element at the index position is  > 0 then make that element -ve

var findDuplicates = function(nums) {
    // create a result array
    let result = []
    // loop over the array
    for(let i =0; i < nums.length; i++){
        // get the absolute value of the current element
        let current_element = Math.abs(nums[i])
        // subtract 1 from the absolute value of current element to get the index
        let index = current_element - 1
        // if the element at the index position is <0 then push it in the result array
        if(nums[index]<0){
            result.push(current_element)
        }
        // else if the element at index position is >0 then make that element -ve
        else{
            nums[index] *= -1
        }
    }
    return result
};

// All Duplicates in the array
// Example array is [4,3,2,7,8,2,3,1]

// 1st Iteration
// [4,3,2,7,8,2,3,1]
// i = 0 
// current_element = abs(nums[i])
// current_element = abs(nums[0]) = abs(4) = 4
// index = 4-1 = 3
// nums[index] = nums[3] = 7 > 0 
// nums[3] = nums[3] *= -1 = 7*-1 = -7

// 2nd Iteration
// [4,3,2,-7,8,2,3,1]
// i = 1
// current_element = abs(nums[i])
// current_element = abs(nums[1]) = abs(3) = 3
// index = 3-1 = 2
// nums[index] = nums[2] = 2 > 0 
// nums[2] = nums[2] *= -1 = 2*-1 = -2

// 3rd Iteration
// [4,3,-2,-7,8,2,3,1]
// i = 2
// current_element = abs(nums[i])
// current_element = abs(nums[2]) = abs(-2) = 2
// index = 2-1 = 1
// nums[index] = nums[1] = 3 > 0 
// nums[1] = nums[1] *= -1 = 3*-1 = -3

// 4th Iteration
// [4,-3,-2,-7,8,2,3,1]
// i = 3
// current_element = abs(nums[i])
// current_element = abs(nums[3]) = abs(-7) = 7
// index = 7-1 = 6
// nums[index] = nums[6] = 3 > 0 
// nums[6] = nums[6] *= -1 = 3*-1 = -3

// 5th Iteration
// [4,-3,-2,-7,8,2,-3,1]
// i = 4
// current_element = abs(nums[i])
// current_element = abs(nums[4]) = abs(8) = 8
// index = 8-1 = 7
// nums[index] = nums[7] = 1 > 0 
// nums[7] = nums[7] *= -1 = 1*-1 = -1

// 6th Iteration
// [4,-3,-2,-7,8,2,-3,-1]
// i = 5
// current_element = abs(nums[i])
// current_element = abs(nums[5]) = abs(2) = 2
// index = 2-1 = 1
// nums[index] = nums[1] = -3 < 0 
// push current_element in result array result = [2]

// 7th Iteration
// [4,-3,-2,-7,8,2,-3,-1]
// i = 6
// current_element = abs(nums[i])
// current_element = abs(nums[6]) = abs(-3) = 3
// index = 3-1 = 2
// nums[index] = nums[2] = -2 < 0 
// push current_element in result array result = [2,3]

// 8th Iteration
// [4,-3,-2,-7,8,2,-3,-1]
// i = 7
// current_element = abs(nums[i])
// current_element = abs(nums[7]) = abs(-1) = 1
// index = 1-1 = 0
// nums[index] = nums[0] = 4 > 0
// nums[0] = nums[0]*= -1 = 4*-1 = -4

// Final Result 
// [-4,-3,-2,-7,8,2,-3,-1]
// Final result = [2,3]

// CODE USING ARRAY AND SET
var findDuplicates = function(nums) {
    const output = []
    const numbers = new Set()
    
    for(let i =0;i<=nums.length;i++){
        if(!numbers.has(nums[i])){
            numbers.add(nums[i])
        }else{
        output.push(nums[i])
        }
    }
    return output
};
