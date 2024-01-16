var strStr = function(haystack, needle) {
  let output = haystack.search(needle);
  return output
};

console.log(strStr('sadnotsad', 'sad')) // sad 0
console.log(strStr('leetcode', 'leeto')) // -1
console.log(strStr('hello', 'll')) // 2
console.log(strStr('mississippi', 'mississippi')) // 0
console.log(strStr('mississippi', 'issip')) // 4

// var strStr = function(haystack, needle) {
//   let output = []
//   for(let i = 0; i < needle.length; i++){
//     for(let j = i; j < haystack.length; j++){
//       if(needle[i] === haystack[j] && needle[i+1] === haystack[j+1]) {
//         output.push(j)
//         i++
//       } else if (needle[needle.length] === haystack[j]) return 'this s'
//       // if(haystack[i] != needle[j]) return -1
//     }
//   }  
//   return output
//   // return output.length
//   // return output.length ? needle.length : -1
//   // return output.length == needle.length ? output[0] : -1
// };

// console.log(strStr('sadnotsad', 'sad')) // sad 0
// console.log(strStr('leetcode', 'leeto')) // -1
// console.log(strStr('hello', 'll')) // 2
// console.log(strStr('mississippi', 'mississippi')) // 0
// console.log(strStr('mississippi', 'issip')) // 0