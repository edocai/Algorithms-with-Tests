var islandPerimeter = function (grid) {

};

/*
1. Create perimeter variable.
2. Loop through grid.
  a. Loop through inner array.
    i. Condition if value is "1".
      1. Add perimeter by 4.
      2. If the block before is "1."
        a. Subtract perimeter by 2.
      3. If the block above is "1."
        a. Subtract perimeter by 2.
3. Return perimeter.

Strategy: Traverse
Time Complexity: O(n*m)
Space Complexity: O(1)
*/