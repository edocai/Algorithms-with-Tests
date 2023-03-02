const diameterOfBinaryTree = root => {
  if (!root) return 0;

  let max = 0

  const dfs = node => {
    if (!node) return 0;

    let left = dfs(node.left)
    let right = dfs(node.right)

    max = Math.max(left + right, max)

    return Math.max(left, right) + 1
  }
  dfs(root)
  return max
};

//dfs recursion
//use a global variable to hold the max (diameter)
//update max after each left, right
//recursively return max of left, right + 1 (current node)
//return max

//Time: O(n) (traversing)
//Space: worst: O(n) (call stack)