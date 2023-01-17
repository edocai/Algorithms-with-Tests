const invertTree = root => {
    if (!root) return root

    //swap the left with the right
    let temp = root.left
    root.left = root.right
    root.right = temp

    //Or you can do it this way
    //;[root.left, root.right] = [root.right, root.left]

    invertTree(root.left)
    invertTree(root.right)
    return root
};

//Time Complexity: O(n)
//Space Complexity: O(n)