const isSameTree = (p, q) => {
  const dfs = (tree1, tree2) => {
    if (!tree1 && !tree2) return true
    if (!tree1 || !tree2) return false
    if (tree1.val !== tree2.val) return false
    return dfs(tree1.left, tree2.left) && dfs(tree1.right, tree2.right)
  }
  return dfs(p, q)
};

//dfs recursion
//base case
    //if both p and q === null return true
//if p.val or q.val !== to eachother
    //return false
//if either p or q is null
    //return false
//recursively call and return func(p.left, q.left) && func(p.right, q.right)

//Time: O(n)
//Space: O(n)