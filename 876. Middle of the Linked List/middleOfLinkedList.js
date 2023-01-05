const middleNode = head => {
    let fast = head;
    let slow = head;

    while (fast && fast.next) {
        fast = fast.next.next
        slow = slow.next
    }

    return slow
};

//Fast & slow pointer method
//loop through the list while fast && fast.next is not null
    //increment the fast pointer 2 times and slow once
//when fast or fast.next === null break out and return slow
//at that time slow will be in the middle of the list

//Time Complexity: O(n)
//Space Complexity: O(1)