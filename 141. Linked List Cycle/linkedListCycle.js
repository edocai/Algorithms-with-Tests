const hasCycle = head => {
    let fast = head
    let slow = head

    while (fast && fast.next) {
        fast = fast.next.next
        slow = slow.next

        if (fast === slow) {
            return true
        }
    }
    return false
};

//fast&slow pointer
//similar to finding the middle of a linked list
//simply check if fast === slow to break out of the while loop
//else return false

//Time: O(n)
//Space: O(1)