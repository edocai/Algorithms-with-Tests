const isBalanced = root => {

};

//DFS recursion
//very similar method to find the diameter of a binary tree
//let max = 1 (variable that will change if below condition is true)
//traverse the tree and just check if absolute value of left - right is > 1
    //return max of left + right + 1 (current node)
//return true if max stays the same and false if it was changed

//Time: O(n) worst case we touch every node.
//Space: O(h)
//Space explantion: Our call stack (from recursion) will only go as far deep as the height of the tree, so h (the height of the tree) is our space bound for the amount of call stack frames that we will create