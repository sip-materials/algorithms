/**
 * Find Length Of The Longest Substring Without Repeating Characters
 */

function lengthOfLongestSubstring(s: string): number {
    const n = s.length;
    const seen = new Map<string, number>();
    let maxLength = 0;
    let start = 0;

    for (let end = 0; end < n; end++) {
        const char = s[end];

        if (seen.has(char)) {
            start = Math.max((seen.get(char) ?? 0) + 1, start);
        }

        seen.set(char, end);
        maxLength = Math.max(maxLength, end - start + 1);
    }

    return maxLength;
}

console.log(lengthOfLongestSubstring("ABDEFGABEF")); // Output: 6
console.log(lengthOfLongestSubstring("BBBB")); // Output: 1
console.log(lengthOfLongestSubstring("GEEKSFORGEEKS")); // Output: 7
