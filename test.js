const task = require('./task.js')
const assert = require('assert')

it('correctly calculates the rotateRightArr', () => { 
let actual = task.rotateRightArr([1,2,7,8,9], 2).toString();
let isMatch= false;
    if(actual == [7,8,9,1,2]) {
        isMatch = true;
    }
    assert.equal(isMatch, true);
})
  
it('correctly calculates the binary tree height', () => {
    assert.equal(task.binaryTreeHeight(6), 2);
})
  
it('correctly calculates the combination of all string', () => {
    let arr1 = task.combine("abc").sort();
    var isMatch= false;
    let arr2 = [ "", "a", "b", "c", "ab", "bc", "ac", "abc"].sort()
    if (arr1.length == arr2.length&& arr1.every((u, i) => u === arr2[i])) {
        isMatch = true
    }
    assert.equal(isMatch, true);
})
    