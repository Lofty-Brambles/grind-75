/**
 * -------------------
 *    Time: 3 mins
 * -------------------
 */
function isPalindrome(s: string): boolean {
	const sl = s.toLowerCase().replaceAll(/[^A-Za-z0-9]/g, "");
	console.log(s);
	const l = sl.length;
	const md = Math.floor(l / 2);
	for (let i = 0; i <= md; i++) if (sl[i] !== sl[l - i - 1]) return false;
	return true;
}

/**
 * Runtime: 74 ms, faster than 95.74% of JavaScript online submissions for Valid Palindrome.
 * Memory Usage: 43.8 MB, less than 94.73% of JavaScript online submissions for Valid Palindrome.
 */
