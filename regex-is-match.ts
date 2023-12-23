function isMatch(s: string, p: string): boolean {
    let regex: string = p;
    while (regex.includes("**")) {
        regex = regex.replace("**", "*");
    }
    let res: Object[] = s.match(new RegExp(regex));
    return res ? res.includes(s) : false;
};
