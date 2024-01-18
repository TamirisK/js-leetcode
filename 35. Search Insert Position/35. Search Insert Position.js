var searchInsert = function(nums, target) {
  for(let i = 0; i < nums.length; i++){
    if(nums[i] == target || (nums[i-1] < target && nums[i] > target )) return i
  }
};

console.log(searchInsert([1, 2, 3, 4, 5], 5)) // 4
console.log(searchInsert([1, 2, 4, 5], 3)) // 2
