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

function listNode2number(list: ListNode): string {
    let digits: string = '';
    let next: boolean = true;
    let iterator: ListNode = list;

    while (next) {
        digits += iterator.val;
        if (iterator.next) {
            iterator = iterator.next;
        } else {
            next = false;
        }
    }
    let d = digits.split('').reverse().join('');
    return d;
}

function arr2ListNode(arr: any[]): ListNode {
    let list = new ListNode(arr[0]);
    let current = list;
    for (let i = 1; i < arr.length; i++) {
        current.next = new ListNode(arr[i]);
        current = current.next;
    }
    return list;
}

function addTwoNumbers(l1: ListNode | null, l2: ListNode | null): ListNode | null {
    let sum = BigInt(listNode2number(l1)) + BigInt(listNode2number(l2));
    let digits: string = sum.toString().split('').reverse().join('');
    let result: ListNode = arr2ListNode(digits.split(''));
    return result;
};
