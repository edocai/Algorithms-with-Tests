var postorderTraversal = function (root) {
  let list = []
  const traverse = (node) => {
    if (!node) return list;
    if (node === null) return;
    if (node.left) traverse(node.left)
    if (node.right) traverse(node.right)
    list.push(node.val)
  }
  traverse(root)
  return list
};