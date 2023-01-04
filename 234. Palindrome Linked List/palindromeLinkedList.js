const reverse = head => {
    let prev = null;
    let current = head;
    let next;

    while (current !== null) {
        next = current.next;
        current.next = prev;
        prev = current;
        current = next;
    }
    return prev
}

const isPalindrome = head => {
    let fast = head
    let slow = head
    let currentHead = head
    let len = 0

    while (fast && fast.next) {
        fast = fast.next.next
        slow = slow.next
        len++
    }

    let mid = reverse(slow)

    while (len) {
        len--
        if (currentHead.val !== mid.val) return false
        mid = mid.next
        currentHead = currentHead.next
    }
    return true
};

//Time Complexity: O(n)
//Space Complexity: O(1)