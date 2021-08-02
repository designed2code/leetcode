// Two Sum - Submission Detail - LeetCode
// https://levelup.gitconnected.com/how-to-solve-two-sum-in-javascript-d1ebd9dfd3d3

// 1. Declare an empty object (hash map)
// 2. Loop over the array
// 3. Store the current element of the array
// 4. Check if the target minus current element value is present in the hash map
// 5. If present then return the the target minus current element value and current element
// 6. Else push the current element in the hash map
// 7. Return empty array if no numbers add up to the target value.

const twoSum = function(nums, target) {
    const hash = {}; // Stores seen numbers: {seenNumber: indexItOccurred}
  
    for (let i = 0; i < nums.length; i++) { // loop through all numbers
      const n = nums[i]; // grab the current number `n`.
      if (hash[target - n] !== undefined) { // check if the number we need to add to `n` to reach our target has been seen:
        return [hash[target - n], i]; // grab the index of the seen number, and the index of the current number
      }
      hash[n] = i; // update our hash to include the. number we just saw along with its index.
    }
    return []; // If no numbers add up to equal the `target`, we can return an empty array
  }
  
  console.log(twoSum([2,7,11,15], 9)); // [1, 2]