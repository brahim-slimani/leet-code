function maxSatisfaction(satisfaction: number[]): number {
    satisfaction.sort((a, b) => b - a);
    let maxSum = 0;
    let currentSum = 0;
    for (let i = 0; i < satisfaction.length; i++) {
        currentSum += satisfaction[i];
        if (currentSum < 0) break;
        maxSum += currentSum;
    }
    return maxSum;
};
