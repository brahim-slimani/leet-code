function removeDuplicates(nums: number[]): number {
   if (nums.length === 0) return 0; 
    
    let uniqueCount = 1; 
    let prev = nums[0]; 
    
    for (let i = 1; i < nums.length; i++) {
        if (nums[i] !== prev) {
            prev = nums[i]; 
            nums[uniqueCount] = nums[i]; 
            uniqueCount++; 
        }
    }
    
    return uniqueCount;
};
