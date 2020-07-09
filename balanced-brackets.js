function isBalanced(str) {
  
    let balance = 0;
    /*
      when we encounter a '[' we will add one to balance
      when we encounter a ']' and balance is 0 we will return
      falce
      when we encounter a ']' we will subtract one from balance
      if balance is > 0
  
    */
    for(let char of str){
      if (char ==='['){
        balance++;
      }
      if (char === ']' && balance === 0){
        return false;
      }
      if (char === ']' && balance > 0){
        balance--;
      }
    }
    /*
      after checking str if balance is 0 the string was balanced
    */
    return balance === 0;
  }
  