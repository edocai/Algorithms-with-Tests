var isSubtree = function (root, subRoot) {
  //base case
  if (!root && !subRoot) return true
  //if subRoot is null it can still be a subTree
  if (!subRoot) return true
  //however if root is null it cannot
  if (!root) return false
  //dfs helper func to find if they're the same
  const sameTree = (tree1, tree2) => {
    if (!tree1 && !tree2) return true
    if (!tree1 || !tree2) return false
    if (tree1.val !== tree2.val) return false
    return sameTree(tree1.left, tree2.left) && sameTree(tree1.right, tree2.right)
  }
  //if helper func returns true then return true
  if (sameTree(root, subRoot)) return true
  //else return if either the root.left or root.right is equal to the subRoot
  return isSubtree(root.left, subRoot) || isSubtree(root.right, subRoot)
};

//Time: O(m*n)
//Space: O(min(m,n)) because the recursion stops when any node is null. The tree with less nodes will become null first