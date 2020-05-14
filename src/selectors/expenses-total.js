export default (expenses) => {
    return expenses
            .map(x => x.amount)
            .reduce((sum, value) => sum + value, 0);
};