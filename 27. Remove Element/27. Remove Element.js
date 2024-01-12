var removeElement = function(nums, val) {
  let add = 0
  for(let i = 0; i < nums.length; i++){
    if(nums[i] === val) {
      delete nums[i]
      add++
    }
  }
  nums.sort((a, b) => a-b);
  return nums.length-add
  // return nums
};


// let k = removeElement([3,2,2,3], 3) // 2, nums = [2,2,_,_]
let k = removeElement([0,1,2,2,3,0,4,2], 2) // 5, nums = [0,1,4,0,3,_,_,_]
console.log(k) 