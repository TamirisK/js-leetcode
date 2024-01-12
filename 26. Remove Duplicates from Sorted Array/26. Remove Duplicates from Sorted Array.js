var removeDuplicates = function(nums) {
  let add = 0
  for(let i = 0; i < nums.length; i++){
    if(nums[i] === nums[i+1] || nums[i] === nums[i-1]) {
      delete nums[i]
      add++
    }
  }
  nums.sort((a, b) => a-b);
  return nums.length-add
  // return nums
};

// let k = removeDuplicates([1,1,2]) // nums = [1,2,_] k = 2
// let k = removeDuplicates([0,0,1,1,1,2,2,3,3,4]) // nums = [0,1,2,3,4,_,_,_,_,_] k = 5
// let k = removeDuplicates([-1,0,0,0,0,3,3]) // nums = [-1,0,3,_,_,_,_] k = 3
let k = removeDuplicates([-3,-1,0,0,0,3,3]) // nums = [-3,-1,0,3,_,_,_] k = 4
console.log(k) 