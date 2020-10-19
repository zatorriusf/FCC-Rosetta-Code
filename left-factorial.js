/*https://www.freecodecamp.org/learn/coding-interview-prep/rosetta-code/left-factorials

Left factorials,  !n , may refer to either subfactorials or to factorial sums. The same notation can be confusingly seen used for the two different definitions. Sometimes, subfactorials (also known as derangements) may use any of the notations:

!n‘ 
!n 
n¡ 
(It may not be visually obvious, but the last example uses an upside-down exclamation mark.) This task will be using this formula for left factorial:

!n=∑n−1k=0k! 
where  !0=0
*/

function leftFactorial(n) {
    //making sure we only got digits
    if(!/^\d*$/.test(n)){
      throw 'Invalid arguments';
    }
    //trapping the case of n===0 to force 0 return
    if(n === 0){return 0;}
    //starting values at n === 1
    let previousFactorial = 1;
    let leftFactorial = 1;
  
    for(let i = 2; i <=n ;i++){
      previousFactorial *= i-1;
      leftFactorial += previousFactorial; 
    }
    return leftFactorial;
  }
  