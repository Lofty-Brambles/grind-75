/**
 * ------------------
 *    Time: 9 mins
 * ------------------
 */
function twoSum1(nums: number[], target: number) {
	const l = nums.length;
	for (let i = 0; i < l - 1; i++) {
		const e = nums[i];
		const ne = target - e;
		for (let j = i + 1; j < l; j++) {
			if (ne === nums[j]) {
				return [i, j];
			}
		}
	}
}

// After Hint 2

/**
 * ------------------
 *    Time: 6 mins
 * ------------------
 */
function twoSum(nums: number[], target: number) {
	const map = new Map<number, number>();
	for (let i = 0; i < nums.length; i++) {
		const e = nums[i];
		if (map.get(target - e) !== undefined) {
			return [map.get(target - e), i];
		} else {
			map.set(e, i);
		}
	}
}

/**
 * Runtime: 70 ms, faster than 97.88% of TypeScript online submissions for Two Sum.
 * Memory Usage: 45.6 MB, less than 22.08% of TypeScript online submissions for Two Sum.
 */
