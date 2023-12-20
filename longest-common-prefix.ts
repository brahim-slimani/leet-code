function longestCommonPrefix(strs: string[]): string {
    let prefix: string = "";
    let firstStr = strs[0];
    let next: boolean = true;
    let i: number = 0;
    while (next && i < firstStr.length) {
        i++;
        if (strs.every((str) => str.startsWith(firstStr.slice(0,i)))) {
            prefix = firstStr.slice(0,i);
        } else {
            next = false;
        }
    }
    return prefix;
};
