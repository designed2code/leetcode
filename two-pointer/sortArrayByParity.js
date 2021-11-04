// https://leetcode.com/problems/sort-array-by-parity/submissions/


var sortArrayByParity = function(A) {
    
     let curr =0
    for(let i =0; i<A.length;i++){
        if(A[i] % 2 == 0){
            [A[curr], A[i]] = [A[i], A[curr]]
            curr++
        }
    }
    return A
};
