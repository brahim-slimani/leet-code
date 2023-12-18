function twoSum(nums: number[], target: number): number[] {
    let output: number[] = [];
    nums.forEach((x: number, index: number) => {
        for(let i in nums) {
            if(index !== parseInt(i)) {
                if(x + nums[i] == target) output = [index, parseInt(i)]
            } 
        }
    });
    return output
};
