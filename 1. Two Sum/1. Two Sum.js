var twoSum = function(nums, target) {
  let a = []
  for(let i = 0; i < nums.length; i++){
      for(let j = 1; j <= nums.length; j++){
          if(nums[i] + nums[j] == target && i != j){
              a.push(i)
              a.push(j)
              return a
          }
      }
  }
};

console.log(twoSum([2,7,11,15], 9)) // [0, 1]
console.log(twoSum([3,2,4], 6)) // [1, 2]
console.log(twoSum([1,5,5,11], 10)) // [1, 2]