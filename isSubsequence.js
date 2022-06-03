Question https://leetcode.com/problems/is-subsequence/

function isSubsequence(s,t){
  let pointer1 = 0
  let pointer2 = 0
//   Traverse the long string
  while(pointer1<t.length) {
    if(t[pointer1] == s[pointer2]){
      pointer1++
      pointer2++
    }
    else{
      pointer1++
    }
  }
  return (pointer2 == s.length) ? true : false
}

Example 1:

Input: s = "abc", t = "ahbgdc"
Output: true
Example 2:

Input: s = "axc", t = "ahbgdc"
Output: false
      
