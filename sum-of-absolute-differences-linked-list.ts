function getSumAbsoluteDifferences(nums: number[]): number[] {
    let outputs: number[] = [];
    let leftSum = 0;
    let totalSum = nums.reduce((a,b)=>a+b);
    let n = nums.length;
    for (let i = 0; i < nums.length; i++) {
        outputs[i] = i * nums[i] - leftSum + (totalSum - leftSum) - (n - i) * nums[i];
        leftSum += nums[i];
    }
    return outputs;
};
