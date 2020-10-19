/*
https://www.freecodecamp.org/learn/coding-interview-prep/rosetta-code/convert-seconds-to-compound-duration

Implement a function which:

 > takes a positive integer representing a duration in seconds as input (e.g., 100), and
 > returns a string which shows the same duration decomposed into weeks, days, hours, 
   minutes, and seconds as detailed below (e.g., 1 min, 40 sec).
*/

function convertSeconds(sec) {
    let duration = {
      //get weeks
      wk: Math.floor(sec /7 /24 /60 /60) === 0 ? '' : (Math.floor(sec /7 /24 /60 /60)),
      //get days
      d : Math.floor(sec /24 /60 /60) % 7 === 0 ? '' : (Math.floor(sec /24 /60 /60) % 7),
      //get hours
      hr: Math.floor(sec /60 /60) % 24 === 0 ? '' :(Math.floor(sec /60 /60) % 24),
      //get minutes
      min: Math.floor(sec /60) % 60 === 0 ? '' : (Math.floor(sec /60) % 60),
      //get seconds
      sec: sec % 60 === 0 ? '' : (sec % 60)
    };
    let compiledDuration = '';
  
    //build Return String
    for(let key of Object.keys(duration)){
      //check to see if there's a value for a key
      if(duration[key]){
        //if the value exists, but nothing has been added to the return
        //string, just add the duration value and it's key
        //i.e 59 sec
        if(compiledDuration.length === 0){
          compiledDuration =compiledDuration.concat(`${duration[key]} ${key}`)
        }
        //otherwise place  ', ' before the duration value and it's key 
        else {
          compiledDuration = compiledDuration.concat(`, ${duration[key]} ${key}`)
        }
      }
    }

    return compiledDuration;
  }
  