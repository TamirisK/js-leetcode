/**
 * @param {number[]} nums
 * @return {number}
 */
var maxProductDifference = function(nums) {
  nums.sort(function(a, b){return a-b});
  return (nums[nums.length - 1] * nums[nums.length - 2])  - (nums[1] * nums[0])
};

console.log(maxProductDifference([5,6,2,7,4])) // 34
// Explanation: We can choose indices 1 and 3 for the first pair (6, 7) and indices 2 and 4 for the second pair (2, 4). The product difference is (6 * 7) - (2 * 4) = 34.
console.log(maxProductDifference([4,2,5,9,7,4,8])) // 64
// Explanation: We can choose indices 3 and 6 for the first pair (9, 8) and indices 1 and 5 for the second pair (2, 4). The product difference is (9 * 8) - (2 * 4) = 64.
console.log(maxProductDifference([1,6,7,5,2,4,10,6,4])) //
// Explanation: We can choose indices 2 and 6 for the first pair (7, 10) and indices 0 and 4 for the second pair (1, 2). The product difference is (7 * 10) - (1 * 2) = 68.