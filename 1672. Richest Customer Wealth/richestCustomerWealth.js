const maximumWealth = accounts => {
    return Math.max(...accounts.map(customer => customer.reduce((a, b) => a + b)));
};

module.exports = maximumWealth