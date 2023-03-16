var maxDepth = function (root) {
  if (!root) return 0;
  let level = 0
  let queue = []
  queue.push(root)

  while (queue.length > 0) {
    let count = queue.length
    for (let i = 0; i < count; i++) {
      node = queue.shift()
      if (node.left) queue.push(node.left)
      if (node.right) queue.push(node.right)
    }
    level++
  }
  return level
};