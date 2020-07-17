// 1. Given an array, rotate the array to the right by k steps, where k is non-negative.
// ANS : 

Array.prototype.rotateRight = function( n ) {
    this.unshift.apply( this, this.splice( n, this.length ) );
    return this;
  }
const rotateRightArr = (input, element) => input.rotateRight(element);
// let rotateArr = input.rotateRight(2);


// 2. Given a binary tree, find the height of the binary tree. (Mandatory) 
// Input: Root node of the tree Output: Height of the tree 

const binaryTreeHeight = (n) =>  Math.ceil(Math.log(n +  1) / Math.log(2)) - 1; 
// console.log(binaryTreeHeight(3));




// 4. Find all combinations of a given string. 

// const combine = (combinestr) => {
//    const result = [];
//    for(let i = 0; i < Math.pow(2, combinestr.length) - 1; i++)
//       result.push([...combinestr].filter((_, pos) => 
//       (i >> pos) & 1).join(""));
//   return result;
// }
var combine =  (string) => {
    let result = [];  
    result.push("");  
    let itration =  (start,depth,prefix) => {
        for(let i=start; i<string.length; i++){
            let next = prefix+string[i];
            depth > 0 ? itration(i+1,depth-1,next): result.push(next); 
        }
    }
    for(let i=0; i<string.length; i++){
        itration(0,i,"");
    }
    return result;
}

// console.log(combine("abc"))
module.exports = {
    rotateRightArr,
    binaryTreeHeight,
    combine
    
}