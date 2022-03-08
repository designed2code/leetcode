https://leetcode.com/problems/valid-palindrome/

const isPalindrome = (s) => {
 const sanitizedString = s.toLowerCase().replace(/[^a-zA-Z0-9]/g,'')
  const isStringPalindrome = true
  let left = 0, right = sanitizedString.length-1
  while(left<right){
      if(sanitizedString[left]!== sanitizedString[right]) return false
      left++
      right--
  }
    return isStringPalindrome
   
}
