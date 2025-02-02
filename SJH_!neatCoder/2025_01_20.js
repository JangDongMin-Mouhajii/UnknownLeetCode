// Given an integer array nums, return true if any value appears more than once in the array, otherwise return false.

class Solution {
    /**
     * @param {number[]} nums
     * @return {boolean}
     */
    hasDuplicate(nums) {
        const checkedNum = new Set();
        for (const num of nums) {
            if (checkedNum.has(num)) {
                return true;
            }
            checkedNum.add(num)
        }
        return false;
    }
}
