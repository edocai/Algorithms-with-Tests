var mergeTrees = function (root1, root2) {
  function dfs(r1, r2) {
    //base case
    if (!r1 && !r2) return null
    if (!r1) return r2
    if (!r2) return r1
    //addition
    r1.val += r2.val
    //recursion
    r1.left = dfs(r1.left, r2.left)
    r1.right = dfs(r1.right, r2.right)
    return r1
  }
  return dfs(root1, root2)
};

//Time: O(m). A total of m nodes need to be traversed. Here, m represents the minimum number of nodes from the two given trees.

//Space: O(m). The depth of the recursion tree can go upto m in the case of a skewed tree. In average case, depth will be O(logm)