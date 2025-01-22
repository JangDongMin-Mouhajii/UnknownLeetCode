// Given an integer array nums, return true if any value appears more than once in the array, otherwise return false.

class Solution {
    /**
     * @param {number[]} nums
     * @return {boolean}
     */
    hasDuplicate(nums) {
        const numCheckHash = new Set()
        for (const num of nums) {
            if (numCheckHash.has(num)) {
                return true
            } else {
                numCheckHash.add(num)
            }
        }
        return false
    }
}
