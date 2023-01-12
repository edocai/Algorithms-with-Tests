const removeElements = (head, val) => {
    let dummy = new ListNode(-1)
    dummy.next = head
    let prev = dummy
    let curr = head

    while (curr) {
        if (curr.val === val) {
            prev.next = curr.next
            curr = curr.next
        } else {
            prev = curr
            curr = curr.next
        }
    }

    return dummy.next
};

//Initiate dummy node as ListNode(-1) and set it to be the new head: dummy.next = head.
//Initiate two pointers to track the current node and its predecessor: curr and prev.
//While curr is not a null pointer:
//Compare the value of the current node with the value to delete.
//In the values are equal, delete the current node: prev.next = curr.next.
//Otherwise, set predecessor to be equal to the current node.
//Move to the next node: curr = curr.next.
//Return dummy.next.

//Time: O(n)
//Space: O(1)