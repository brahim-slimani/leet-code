/**
 * Definition for singly-linked list.
 * class ListNode {
 *     val: number
 *     next: ListNode | null
 *     constructor(val?: number, next?: ListNode | null) {
 *         this.val = (val===undefined ? 0 : val)
 *         this.next = (next===undefined ? null : next)
 *     }
 * }
 */

function listNode2array(list: ListNode): number[] {
    let next: boolean = true;
    let arrs: number[] = [];
    let iterator: ListNode = list;
    while (next) {
        if (iterator?.val || iterator?.val == 0) arrs.push(iterator.val);
        if (iterator?.next) {
            iterator = iterator.next;
        } else next = false;
    }
    return arrs;
}

function array2ListNode(arr: number[]): ListNode {
    let list: ListNode = null;
    if (arr.length) {
        list = new ListNode(arr[0]);
    }
    let current = list;
    for (let i = 1; i < arr.length; i++) {
        current.next = new ListNode(arr[i]);
        current = current.next;
    }
    return list;
}

function mergeTwoLists(list1: ListNode | null, list2: ListNode | null): ListNode | null {
    let mergedArrs: number[] = listNode2array(list1).concat(listNode2array(list2)).sort((a, b) => a - b);
    return array2ListNode(mergedArrs);
};
