/*
These define three classifications of positive integers based on their proper divisors.

Let  P(n)  be the sum of the proper divisors of n where proper divisors are all positive integers n other than n itself.

If P(n) < n then n is classed as deficient

If P(n) === n then n is classed as perfect

If P(n) > n then n is classed as abundant

Example: 6 has proper divisors of 1, 2, and 3. 1 + 2 + 3 = 6, so 6 is classed as a perfect number.

Implement a function that calculates how many of the integers from 1 to 20,000 (inclusive) are in each of the three classes. Output the result as an array in the following format [deficient, perfect, abundant].
getDPA(20000) == [15043, 4, 4953]
*/

function getDPA(num) {

    let perfect = 0;
    let deficient = 1; //the value 1 is deficient because it has no proper divisors so we added it to the initialzation
    let abundant = 0;
  
    for(let i = 2; i <= num; i++){
        /*
        calls the propDivisorSum to compare it to the current number.
        Iterates the appropriate variable for count
        Started the loop at 2 because 1 was already accounted for
        */
      if(propDivisorSum(i) == i){
        perfect++;
      }
      if(propDivisorSum(i)>i){
        abundant++;
      }
      if(propDivisorSum(i)<i){
        deficient++;
      }
    }
  
    function propDivisorSum(num){
    /*
    Finds the proper divisors (all integers that are divisors not counting the number) of a given number (num)
    returns the sum of those numbers
    */
      let resultArray = [1]; //initialize the array with 1 as the first element. ever number > 1 has 1 as a proper divisor
        
      for(let j = 2; j <= Math.round(num/2); j++){
        if(num%j === 0){resultArray.push(num/j);}
      }
      return resultArray.reduce((a,b) => a+b);
    }
    return [deficient,perfect,abundant];
  }
  