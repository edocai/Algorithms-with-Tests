var minDepth = function (root) {
  if (!root) return 0;
  // If the left node is empty DFS into right node
  if (!root.left) return minDepth(root.right) + 1;

  // If the right node is empty DFS into left node
  if (!root.right) return minDepth(root.left) + 1;
  return 1 + Math.min(minDepth(root.left), minDepth(root.right))
};