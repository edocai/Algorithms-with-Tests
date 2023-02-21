var rangeSumBST = function (root, low, high) {
  let sum = 0

  function dfs(node, low, high) {
    //base case
    if (!root) return 0;
    //check if the value is included in the inclusive range
    if (node.val <= high && node.val >= low) {
      //add if it is
      sum += node.val
    }
    //recurse through the tree
    if (node.left) dfs(node.left, low, high)
    if (node.right) dfs(node.right, low, high)
  }
  dfs(root, low, high)
  //sum of the ints in the array
  return sum
};

//Time: O(n)
//Space: O(n)