const maxProfit = require('./bestTimeToBuyAndSellStock')

test('return max profit you can achieve from this transaction', () => {
    expect(maxProfit([7, 1, 5, 3, 6, 4])).toEqual(5)
})

test('If you cannot achieve any profit, return 0', () => {
    expect(maxProfit([7, 6, 4, 3, 1])).toEqual(0)
})
