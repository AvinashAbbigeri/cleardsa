const algorithmsData = {
  "binary-search": {
    title: "Binary Search",
    description:
      "Binary Search efficiently finds a target value in a sorted array by repeatedly dividing the search space.",
    steps: [
      "Start with left = 0 and right = n - 1",
      "Find mid index",
      "Compare mid value with target",
      "Discard half of the array",
    ],
    code: `def binary_search(nums, target):
    left, right = 0, len(nums) - 1
    while left <= right:
        mid = (left + right) // 2
        if nums[mid] == target:
            return mid
        elif nums[mid] < target:
            left = mid + 1
        else:
            right = mid - 1
    return -1`,
    complexity: {
      time: "O(log n)",
      space: "O(1)",
    },
    topics: ["arrays"],
  },

  bfs: {
    title: "Breadth First Search (BFS)",
    description:
      "BFS explores a graph level by level using a queue.",
    steps: [
      "Push start node into queue",
      "Mark node as visited",
      "Process neighbors",
    ],
    code: `from collections import deque

def bfs(graph, start):
    visited = set()
    queue = deque([start])

    while queue:
        node = queue.popleft()
        if node not in visited:
            visited.add(node)
            queue.extend(graph[node])`,
    complexity: {
      time: "O(V + E)",
      space: "O(V)",
    },
    topics: ["graphs"],
  },
};

export default algorithmsData;
