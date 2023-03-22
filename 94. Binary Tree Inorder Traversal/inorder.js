var inorderTraversal = function (root) {
  let list = []
  const traverse = (node) => {
    if (!node) return list;
    if (node === null) return;
    if (node.left) traverse(node.left)
    list.push(node.val)
    if (node.right) traverse(node.right)
  }
  traverse(root)
  return list
};