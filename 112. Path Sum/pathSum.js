var hasPathSum = function (root, targetSum) {
  let hasSum = false

  function dfs(node, targetSum) {
    //base case
    if (!node) return false;
    if (!node.left && !node.right) {
      if (targetSum === node.val) {
        hasSum = true
      }
      return false
    }
    if (node.left) {
      dfs(node.left, targetSum - node.val)
    }
    if (node.right) {
      dfs(node.right, targetSum - node.val)
    }
  }
  dfs(root, targetSum)
  return hasSum
};