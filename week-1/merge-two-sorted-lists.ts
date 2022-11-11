class ListNode {
	val: number;
	next: ListNode | null;
	constructor(val?: number, next?: ListNode | null) {
		this.val = val === undefined ? 0 : val;
		this.next = next === undefined ? null : next;
	}
}

/**
 * -------------------
 *    Time: 17 mins
 * -------------------
 */
function mergeTwoLists(
	list1: ListNode | null,
	list2: ListNode | null
): ListNode | null {
	if (list1 === null) return list2;
	if (list2 === null) return list1;
	if (list1.val < list2.val) {
		list1.next = mergeTwoLists(list1.next, list2);
		return list1;
	} else {
		list2.next = mergeTwoLists(list1, list2.next);
		return list2;
	}
}

// I AM STUPID

/**
 * Runtime: 107 ms, faster than 76.52% of TypeScript online submissions for Merge Two Sorted Lists.
 * Memory Usage: 44.6 MB, less than 89.48% of TypeScript online submissions for Merge Two Sorted Lists.
 */
