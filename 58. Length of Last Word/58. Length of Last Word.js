var lengthOfLastWord = function(s) {
  s = s.trim().split(' ')
  return s[s.length-1].length
};

console.log(lengthOfLastWord('Hello World')); // 5
console.log(lengthOfLastWord('   fly me   to   the moon  ')); // 4
