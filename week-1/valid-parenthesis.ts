/**
 * -------------------
 *    Time: 19 mins
 * -------------------
 */
function isValid(s: string): boolean {
	const map = new Map<string, number>([
		["(", 0],
		["{", 0],
		["[", 0],
	]);
	const enmap = new Map<string, string>([
		[")", "("],
		["}", "{"],
		["]", "["],
	]);
	const q = [];
	for (let i = 0; i < s.length; i++) {
		const e = s[i];
		if (e === "(" || e === "{" || e === "[") {
			q.push(e);
			map.set(e, (map.get(e) as number) + 1);
		} else {
			const pp = q.pop();
			const enm = enmap.get(e) as string;
			if (pp !== enm) return false;
			map.set(enm, (map.get(enm) as number) - 1);
		}
	}
	return map.get("(") === 0 && map.get("{") === 0 && map.get("[") === 0;
}

/**
 * Runtime: 85 ms, faster than 84.59% of TypeScript online submissions for Valid Parentheses.
 * Memory Usage: 42.9 MB, less than 95.51% of TypeScript online submissions for Valid Parentheses.
 */
