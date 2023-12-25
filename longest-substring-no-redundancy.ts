function lengthOfLongestSubstring(s: string): number {
    let start = 0;
    let maxLength = 0;
    let charIndexMap = {};

    for (let end = 0; end < s.length; end++) {
        const currentChar = s[end];

        if (currentChar in charIndexMap) {
            start = Math.max(start, charIndexMap[currentChar] + 1);
        }

        charIndexMap[currentChar] = end;
        maxLength = Math.max(maxLength, end - start + 1);
    }

    return maxLength;
};
