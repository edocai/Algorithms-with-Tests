var preorderTraversal = function (root) {
  let list = []
  const traverse = (node) => {
    if (!node) return list;
    if (node === null) return;
    list.push(node.val)
    if (node.left) traverse(node.left)
    if (node.right) traverse(node.right)
  }
  traverse(root)
  return list
};