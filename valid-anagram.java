class Solution {
    public boolean isAnagram(String s, String t) {
        if(s.length() != t.length()) return false;
        char[] s2arr = s.toCharArray(); 
        char[] t2arr = t.toCharArray();  
        Arrays.sort(s2arr);
        Arrays.sort(t2arr);
        return String.valueOf(s2arr).equals(String.valueOf(t2arr)); 
    }
}
