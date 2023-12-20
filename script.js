const makeChange = (c) => {
  // your name here
	function makeChange(amount) {
  // Initialize variables to store the count of each coin
  let quarters = 0;
  let dimes = 0;
  let nickels = 0;
  let pennies = 0;

  // Calculate the number of quarters
  quarters = Math.floor(amount / 25);
  // Calculate the remaining amount after using quarters
  amount %= 25;

  // Calculate the number of dimes
  dimes = Math.floor(amount / 10);
  // Calculate the remaining amount after using dimes
  amount %= 10;

  // Calculate the number of nickels
  nickels = Math.floor(amount / 5);
  // Calculate the remaining amount after using nickels
  amount %= 5;

  // The remaining amount is the number of pennies
  pennies = amount;

  // Return the result as an object
  return { q: quarters, d: dimes, n: nickels, p: pennies };
}
};

// Do not the change the code below
const c = prompt("Enter c: ");
alert(JSON.stringify(makeChange(c)));
