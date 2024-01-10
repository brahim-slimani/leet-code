class Solution {
    public List<Integer> findSubstring(String s, String[] words) {
        List<Integer> indices = new ArrayList<>();
        if (s.isEmpty() || words.length == 0) {
            return indices;
        }

        int wordLen = words[0].length();
        int totalLen = wordLen * words.length;
        HashMap<String, Integer> wordCount = new HashMap<>();

        for (String word : words) {
            wordCount.put(word, wordCount.getOrDefault(word, 0) + 1);
        }

        for (int i = 0; i <= s.length() - totalLen; i++) {
            String substring = s.substring(i, i + totalLen);
            HashMap<String, Integer> seenWords = new HashMap<>();
            int j = 0;

            while (j < totalLen) {
                String word = substring.substring(j, j + wordLen);
                seenWords.put(word, seenWords.getOrDefault(word, 0) + 1);
                j += wordLen;
            }

            if (seenWords.equals(wordCount)) {
                indices.add(i);
            }
        }

        return indices;
    }
}
