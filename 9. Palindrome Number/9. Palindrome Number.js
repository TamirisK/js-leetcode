var isPalindrome = function(x) {
  let y = x.toString().split('').reverse().join('')
  if(x == y){
      return true
  }
  return false
};

console.log(isPalindrome(121)) // true
console.log(isPalindrome(-121)) // false
console.log(isPalindrome(20)) // false