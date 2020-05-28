/*
You are given a collection of ABC blocks (e.g., childhood alphabet blocks). There are 20 blocks with two letters on each block. A complete alphabet is guaranteed amongst all sides of the blocks. The sample collection of blocks:

(B O)
(X K)
(D Q)
(C P)
(N A)
(G T)
(R E)
(T G)
(Q D)
(F S)
(J W)
(H U)
(V I)
(A N)
(O B)
(E R)
(F S)
(L Y)
(P C)
(Z M)
Implement a function that takes a string (word) and determines whether the word can be spelled with the given collection of blocks.

Some rules to keep in mind:

Once a letter on a block is used, that block cannot be used again.
The function should be case-insensitive.

*/

function canMakeWord(word) {

    let unusedBlocks = [['B','O'],['X','K'],['D','Q'],['C','P'],['N','A'],
                        ['G','T'],['R','E'],['T','G'],['Q','D'],['F','S'],
                        ['J','W'],['H','U'],['V','I'],['A','N'],['O','B'],
                        ['E','R'],['F','S'],['L','Y'],['P','C'],['Z','M']]; //the given blocks, will be modified as a block is used
    
    /*
        Loops iterates through the letters in the word and checks if there is still an unused block
        that can be used for that letter
    */
    for(let i = 0; i< word.length; i++){
  
        let letterFound = false;
        for(let block in unusedBlocks){
          if(unusedBlocks[block].indexOf(word.charAt(i).toUpperCase()) >=0){
              unusedBlocks[block] = []; //removes values to show that the block has been used
              letterFound = true; //let's us know that we've found the letter
              break; //stops the loop from continuing
          }
        }
        if(!letterFound){
            return false; //gives us our false return if we cannot find the letter
          }
    }
    return true;
  }
  
  
  