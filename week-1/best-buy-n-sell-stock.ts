/**
 * -------------------
 *    Time: 8 mins
 * -------------------
 */
function maxProfit(prices: number[]): number {
	let min = prices[0];
	let diff = 0;
	for (let i = 0; i < prices.length; i++) {
		const e = prices[i];
		if (e < min) {
			min = e;
			continue;
		} else {
			const ndiff = e - min;
			diff = diff > ndiff ? diff : ndiff;
		}
	}
	return diff;
};

/**
 * Runtime: 90 ms, faster than 96.51% of TypeScript online submissions for Best Time to Buy and Sell Stock.
 * Memory Usage: 51.4 MB, less than 95.14% of TypeScript online submissions for Best Time to Buy and Sell Stock.
 */