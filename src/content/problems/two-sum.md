---
id: two-sum
title: Two Sum
difficulty: easy
topic: arrays
tags: [array, hashmap]
time: O(n)
space: O(n)
---

## Question

Given an array of integers `nums` and an integer `target`, return indices of the two numbers such that they add up to `target`.

---

## Examples

Input: nums = [2,7,11,15], target = 9
Output: [0,1]


---

## Code (Python)

```python
def twoSum(nums, target):
    mp = {}
    for i, val in enumerate(nums):
        diff = target - val
        if diff in mp:
            return [i, mp[diff]]
        mp[val] = i
```

Explanation

We use a hashmap to store previously seen numbers.

- For each number, compute target - num

- If it exists in the map, we found the answer

- Otherwise, store the current number

Complexity

- Time: O(n)

- Space: O(n)