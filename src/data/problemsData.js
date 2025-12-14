const problemsData = {
  "two-sum": {
    title: "Two Sum",
    question: "Given an array of integers nums and an integer target...",
    examples: `Input: nums = [2,7,11,15], target = 9
Output: [0,1]`,
    code: `def twoSum(nums, target):
    mp = {}
    for i, val in enumerate(nums):
        diff = target - val
        if diff in mp:
            return [i, mp[diff]]
        mp[val] = i`,
    explanation:
      "We use a hash map to store previously seen values and their indices...",
    complexity: {
      time: "O(n)",
      space: "O(n)",
    },
  },

  "binary-search": {
    title: "Binary Search",
    question: "Find the index of target in a sorted array...",
    examples: `Input: nums = [1,3,5,7], target = 5
Output: 2`,
    code: `def binarySearch(nums, target):
    l, r = 0, len(nums) - 1
    while l <= r:
        mid = (l + r) // 2
        if nums[mid] == target:
            return mid
        elif nums[mid] < target:
            l = mid + 1
        else:
            r = mid - 1
    return -1`,
    explanation:
      "Binary search cuts the search interval in half each step...",
    complexity: {
      time: "O(log n)",
      space: "O(1)",
    },
  },
};

export default problemsData;
