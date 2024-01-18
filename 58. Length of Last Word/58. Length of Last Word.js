var lengthOfLastWord = function(s) {
  s = s.trim()
  console.log(s);
  for(let i = s.length; i > 0; i--){
    if(s[i] == ' ' && s[i-1] != ' ') return s.length-i-1
  }
};

console.log(lengthOfLastWord('Hello World')); // 5
console.log(lengthOfLastWord('   fly me   to   the moon  ')); // 4