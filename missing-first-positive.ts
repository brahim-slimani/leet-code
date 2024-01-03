function firstMissingPositive(nums: number[]): number {
    let sorted: number[] = [...new Set(nums.filter(x => x > 0).sort((a, b) => a - b))];
    let smallestPositive = Math.max(...sorted) + 1;
    let next = true;
    let i = 0;
    while (next) {
        if (sorted[i] !== i + 1) {
            smallestPositive = i + 1;
            next = false;
        }
        i++;
    }
    return smallestPositive;
};
