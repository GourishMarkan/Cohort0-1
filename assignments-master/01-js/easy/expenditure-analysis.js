/*
  Implement a function `calculateTotalSpentByCategory` which takes a list of transactions as parameter
  and return a list of objects where each object is unique category-wise and has total price spent as its value.
  transactions is an array where each
  Transaction - an object like 
        {
		id: 1,
		timestamp: 1656076800000,
		price: 10,
		category: 'Food',
		itemName: 'Pizza',
	}
  Output - [{ category: 'Food', totalSpent: 10 }] // Can have multiple categories, only one example is mentioned here
*/

function calculateTotalSpentByCategory(transactions) {
  let result = [];
  transactions.forEach((transaction) => {
    let found = false;
    for (let i = 0; i < result.length; i++) {
      if (result[i].category === transactions.category) {
        result[i].totalSpent += transactions.price;
        found = true;
      }
    }
    if (!found) {
      result.push({
        category: transactions.category,
        totalSpent: transaction.price,
      });
    }
  });
  return result;
}

module.exports = calculateTotalSpentByCategory;
