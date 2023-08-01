/////////////////////////////////////////////////
/////////////////////////////////////////////////
// LECTURES

// const movements = [200, 450, -400, 3000, -650, -130, 70, 1300];
/*
/////////////////////////////////////////////////
//SLICE(non modifica l'array)
let arr = ['a', 'b', 'c', 'd', 'e'];
console.log(arr.slice(2));
console.log(arr.slice(2, 4));
console.log(arr.slice(-1));
console.log(arr.slice(1, -2));
console.log(arr.slice());
//SPLICE (modifica l'array, il secondo argomento è il numero di elem da eliminare)
// console.log(arr.splice(2));
arr.splice(1, 2);
console.log(arr);
//REVERSE (modifica l'array)
arr = ['a', 'b', 'c', 'd', 'e'];
const arr2 = ['j', 'i', 'h', 'g', 'f'];
console.log(arr2.reverse());
console.log(arr2);
//CONCAT (non modifica gli array)
const letters = arr.concat(arr2);
console.log(...arr, ...arr2);
console.log(letters);
//JOIN
console.log(letters.join('-'));
//AT
console.log(arr[arr.length - 1]);
console.log(arr.slice(-1)[0]);
console.log(arr.at(-1));
const movements = [200, 450, -400, 3000, -650, -130, 70, 1300];

for (const move of movements)
  for (const [i, move] of movements.entries()) {
    if (move > 0) {
      console.log(`Movement ${i + 1}: You deposited ${move}`);
    } else {
      console.log(`Movement ${i + 1}: You withdrew ${Math.abs(move)}`);
    }
  }
console.log('---FOR EACH---');
movements.forEach(function (move, i) {
  if (move > 0) {
    console.log(`Movement ${i + 1}: You deposited ${move}`);
  } else {
    console.log(`Movement ${i + 1}: You withdrew ${Math.abs(move)}`);
  }
});
//Map
const currencies = new Map([
  ['USD', 'United States dollar'],
  ['EUR', 'Euro'],
  ['GBP', 'Pound sterling'],
]);

currencies.forEach(function (cValue, cKey, map) {
  console.log(`${cKey}: ${cValue}`);
});
//Set
const currenciesUnique = new Set(['USD', 'GBP', 'USD', 'EUR', 'EUR']);
console.log(currenciesUnique);

currenciesUnique.forEach(function (value, _, map) {
  console.log(`${value}: ${value}`);
});

  */
/*
Julia and Kate are doing a study on dogs. So each of them asked 5 dog owners about their dog's age, and stored the data into an array (one array for each). For now, they are just interested in knowing whether a dog is an adult or a puppy. A dog is an adult if it is at least 3 years old, and it's a puppy if it's less than 3 years old.
Your tasks:
Create a function 'checkDogs', which accepts 2 arrays of dog's ages ('dogsJulia' and 'dogsKate'), and does the following things:
1. Julia found out that the owners of the first and the last two dogs actually have cats, not dogs! So create a shallow copy of Julia's array, and remove the cat ages from that copied array (because it's a bad practice to mutate function parameters)
2. Create an array with both Julia's (corrected) and Kate's data3. For each remaining dog, log to the console whether it's an adult ("Dog number 1 is an adult, and is 5 years old") or a puppy ("Dog number 2 is still a puppy �")
4. Run the function for both test datasets
Test data:
§ Data 1: Julia's data [3, 5, 2, 12, 7], Kate's data [4, 1, 15, 8, 3]
§ Data 2: Julia's data [9, 16, 6, 8, 3], Kate's data [10, 5, 6, 1, 4]
Hints: Use tools from all lectures in this section so far �
const dogsJulia = [3, 5, 2, 12, 7];
const dogsKate = [4, 1, 15, 8, 3];
const dogsJulia2 = [9, 16, 6, 8, 3];
const dogsKate2 = [10, 5, 6, 1, 4];

function checkDogs(jDogs, kDogs) {
  const arr = [...jDogs].slice(1, -2);
  //jDogs.slice().splice(0,1).splice(-2)
  const totDogs = [...arr, ...kDogs];
  //arr.concat(kdogs)
  totDogs.forEach((dog, i) => {
    if (dog < 3) {
      console.log(`Dog number ${i + 1} is still a puppy 🐶`);
    } else {
      console.log(`Dog number ${i + 1} is an adult, and is ${dog} years old`);
    }
  });
}

checkDogs(dogsJulia, dogsKate);
checkDogs(dogsJulia2, dogsKate2);

const eurToUsd = 1.1;

const movementsUSD = movements.map(mov => mov * eurToUsd);
console.log(movements);
console.log(movementsUSD);

const movementsUSDfor = [];
for (const mov of movements) movementsUSDfor.push(mov * eurToUsd);
console.log(movementsUSDfor);

const movementsDescriptions = movements.map(
  (mov, i) =>
    `Movement ${i + 1}: You ${mov > 0 ? 'deposited' : 'withdrew'} ${Math.abs(
      mov
      )}`
  );
console.log(movementsDescriptions);

const deposits = movements.filter(mov => mov > 0);
const withdrawls = movements.filter(mov => mov < 0);
console.log(deposits);
console.log(withdrawls);

const depositsFor = [];
for (const mov of movements) if (mov > 0) depositsFor.push(mov);
console.log(depositsFor);

console.log(movements);

// accumulator -> sum
// const balance = movements.reduce((acc, cValue) => {
//   console.log(acc, cValue);
//   return acc + cValue;
// }, 0);
const balance = movements.reduce((acc, cValue) => acc + cValue, 0);

let balance2 = 0;
for (const mov of movements) balance2 += mov;

console.log(balance);
console.log(balance2);

//Maximum value

const max = movements.reduce(
  (acc, cValue) => (acc > cValue ? acc : cValue),
  movements[0]
);
console.log(max);
*/
/*
Let's go back to Julia and Kate's study about dogs. This time, they want to convert dog ages to human ages and calculate the average age of the dogs in their study.
Your tasks:
Create a function 'calcAverageHumanAge', which accepts an arrays of dog's ages ('ages'), and does the following things in order:
1. Calculate the dog age in human years using the following formula: if the dog is <= 2 years old, humanAge = 2 * dogAge. If the dog is > 2 years old, humanAge = 16 + dogAge * 4
2. Exclude all dogs that are less than 18 human years old (which is the same as keeping dogs that are at least 18 years old)
3. Calculate the average human age of all adult dogs (you should already know from other challenges how we calculate averages �)
4. Run the function for both test datasets
Test data:
§ Data 1: [5, 2, 4, 1, 15, 8, 3]
§ Data 2: [16, 6, 10, 5, 6, 1, 4]
GOOD LUCK �

function calcAverageHumanAge(arr) {
  const humanAge = arr.map(dog => (dog <= 2 ? dog * 2 : 16 + dog * 4));
  const adultAge = humanAge.filter(adult => adult > 18);
  const average = adultAge.reduce((acc, age) => acc + age) / adultAge.length;
  // const average = adultAge.reduce((acc, age, i, arr) => acc + age / arr.length);
  return average;
}

console.log(calcAverageHumanAge([5, 2, 4, 1, 15, 8, 3]));
console.log(calcAverageHumanAge([16, 6, 10, 5, 6, 1, 4]));
*/
const movements = [200, 450, -400, 3000, -650, -130, 70, 1300];
const eurToUsd = 1.1;

const totalDepositsUSD = movements
  .filter(mov => mov > 0)
  .map(mov => mov * eurToUsd)
  .reduce((acc, mov) => acc + mov, 0);
console.log(totalDepositsUSD);
