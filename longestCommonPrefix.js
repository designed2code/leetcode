https://leetcode.com/problems/longest-common-prefix/

const longestCommonPrefix = (strs) => {
    let commonStr = strs[0]
    for(let i=1;i<strs.length;i++){
        let currentStr = strs[i]
        for(let j=0;j<commonStr.length;j++){
            if(currentStr[j] !== commonStr[j]){
                commonStr = currentStr.slice(0,j)
            }
        }
    }
    return commonStr
};
