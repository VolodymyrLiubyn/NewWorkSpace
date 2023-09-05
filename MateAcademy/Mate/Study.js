
function calculateProfit(amount, percent, period) {
  // write code here
  let sum = amount;
  
  for (let i = 1; i <= period; i++) {
  
  sum =  sum * (1 + percent/100);
  }

  return sum - amount
}



console.log (calculateProfit(10000, 4, 1))

console.log (calculateProfit(15000, 5, 5))

