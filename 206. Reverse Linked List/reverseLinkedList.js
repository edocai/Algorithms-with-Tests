const reverseList = head => {
    let current = head;
    let previous = null;
    let holdingPointerNext;

    while (current !== null) {
        holdingPointerNext = current.next;
        current.next = previous;
        previous = current;
        current = holdingPointerNext
    }
    return previous;
};