const merge = (nums1, m, nums2, n) => {
  let endPoint1 = m - 1
  let endPoint2 = n - 1
  let i = m + n - 1

  while (endPoint2 >= 0) {
    let fPoint = nums1[endPoint1]
    let sPoint = nums2[endPoint2]

    if (fPoint > sPoint) {
      nums1[i] = fPoint
      i--
      endPoint1--
    } else {
      nums1[i] = sPoint
      i--
      endPoint2--
    }
  }
};

//Two pointer method (3 pointers)
//first pointer at the end of m, second at the end of nums2.length
//index at nums1 end
//while second pointer is greater or equal to 0
    //if val at first pointer is greater than second then nums1 at index = first val
        //decrement both index and first pointer
    //else
        //nums1 at index = second val
        //decrement both index and second pointer

//Time Complexity: O(m+n)
//Space Complexity: O(1)