var romanToInt = function(s) {
  const roman = {
    'I': 1,
    'V': 5,
    'X': 10,
    'L': 50,
    'C': 100,
    'D': 500,
    'M': 1000
  }

  let number = 0

  for(let i = 0; i < s.length; i++){
    number += roman[s[i]]

    if(roman[s[(i-1)]] < roman[s[i]]){
      number -= roman[s[(i-1)]]*2
    }
  }

  return number
};


console.log(romanToInt('IV')) // 4