/*
The 0-1 knapsack problem is defined as follows:

You are given an array of objects representing items to be put in a knapsack. The objects have 3 attributes: name, weight, and value. The items need to be selected so that the total weight does not exceed the maximum weight and the value is maximized.

Write a function to solve the knapsack problem. The function is given the array of objects and the maximum weight as parameters. It should return the maximum total value possible.
*/

function knapsack(items, maxweight) {

    let knapsack = {value: 0, weight: 0, items: []};
  
    //creating a new key (ratio) in each object of items
    //ratio is value to weight
    for(let item of items){
      item['ratio'] = item.value/item.weight;
    }
    //sorts items by ratio
    items.sort((a,b) => b.ratio - a.ratio)
    
    //takes each object in items and adds the highest ratio item
    //that still keeps us under the maxweight
    for(let item of items){
      if(item.weight <= maxweight - knapsack.weight){
        knapsack.weight += item.weight;
        knapsack.value += item.value;
        knapsack.items.push(item)
      }
    }
    //loops through items again checks items that have not
    //been added to the knapsack that may result in a higher
    //knapsack value
    for(let item of items){
      if(knapsack.items.indexOf(item) === -1){
        for(let i = 0;i < knapsack.items.length;i++){
          const moreValue = item.value > knapsack.items[i].value;
          const canFit = (knapsack.weight - knapsack.items[i].weight + item.weight) <= maxweight;
  
          if(moreValue && canFit){
            knapsack.value -= knapsack.items[i].value;
            knapsack.weight -= knapsack.items[i].weight;
            knapsack.items.splice(i,1);
            knapsack.items.push(item);
            knapsack.value += item.value;
            knapsack.weight += item.weight;
          }
        }
      }
    }
    
    return knapsack.value;
  }
  