function floodFill(
  image: number[][],
  sr: number,
  sc: number,
  color: number
): number[][] {
  //edge case
  if (!image || image.length < 1 || image[sr][sc] === color) return image;
  //initial color/number
  let initColor = image[sr][sc];
  //dfs
  function fill(
    image: number[][],
    r: number,
    c: number,
    color: number,
    initColor: number
  ): number[][] {
    //base case
    if (
      r < 0 ||
      r >= image.length ||
      c < 0 ||
      c >= image[0].length ||
      initColor !== image[r][c]
    ) {
      return;
    }
    //change to color
    image[r][c] = color;
    //recursively call for all directions
    fill(image, r + 1, c, color, initColor);
    fill(image, r - 1, c, color, initColor);
    fill(image, r, c - 1, color, initColor);
    fill(image, r, c + 1, color, initColor);
  }
  fill(image, sr, sc, color, initColor);
  return image;
}

/*
Time Complexity: O(N), where N is the number of pixels in the image. We might process every pixel.
Space Complexity: O(N)O(N)O(N), the size of the implicit call stack when calling dfs.
*/
