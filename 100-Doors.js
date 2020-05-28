/*--Code Prompt--
    There are 100 doors in a row that are all initially closed. 
    You make 100 passes by the doors. The first time through, 
    visit every door and 'toggle' the door (if the door is closed, 
    open it; if it is open, close it). The second time, only visit 
    every 2nd door (i.e., door #2, #4, #6, ...) and toggle it. The 
    third time, visit every 3rd door (i.e., door #3, #6, #9, ...), etc., 
    until you only visit the 100th door.

    Implement a function to determine the state of the doors after 
    the last pass. Return the final result in an array, with only the 
    door number included in the array if it is open.
*/

function getFinalOpenedDoors(numDoors) {
    /*  
        After manually writting out door passes for lower numbers, 
        I found that the only doors that remained open  were perfect 
        squares (1,4,9,....). Below we caluclate perfect squares that
        are less than the number of doors and return them in the 
        resultArray variable
    */
    let counter = 1; //used to calculate the perfect squares
    let resultArray = []; //the array that holds our open doors
  
    /*
        verify that the perfect square is less than the numDoors variable
        if so push it to the resultArray
    */
    while(counter **2 <= numDoors){
      resultArray.push(counter **2);
      counter++;
    }
    return resultArray;
  }