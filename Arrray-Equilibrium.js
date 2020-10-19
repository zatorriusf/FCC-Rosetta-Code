function equilibrium(array) {
    if(array.length === 1){
        return [0];
    }
    if(array === []){
        return [];
    }
    let result = []
    for(let i = 0; i < array.length; i++){
    /* Going to slice the array into two 
       Then reduce those two halves to the 
       sum of their parts. If the sums equal
       we push i to the result arrry.*/
    let rightArraySum = i == 0 ? 0: array.slice(0,i).reduce((x = 0, y) =>  x+y);
    let leftArraySum = i == array.length -1 ? 0 : array.slice(i+1, array.length).reduce((x = 0, y) =>  x+y);
    
    if(rightArraySum === leftArraySum){
        result.push(i);
    }
}
return result;
}
