function isOdd(x: number): boolean {
    return x % 2 === 0;
}

function findMedianSortedArrays(nums1: number[], nums2: number[]): number {
    let mergedArrs: number[] = nums1.concat(nums2).sort((a, b) => a - b);
    let size: number = mergedArrs.length;
    let mid: number = Math.trunc(size / 2);
    return isOdd(size) ? (mergedArrs[mid - 1] + mergedArrs[mid]) / 2 : mergedArrs[mid];
};
