//https://leetcode.com/explore/interview/card/top-interview-questions-easy/92/array/727/

//Use two pointers to compare values i an j
//Whenever we find a value that is unique we bring it to the front.
//we will end up with an array whose duplicates are in the end which we'll slice
//we will not splice inside the loop as we are looping through the length of the existing array

function removeDuplicates(sortedArray) {
  if (sortedArray.length === 0) return 0;

  let i = 0;
  for (let j = 1; j < sortedArray.length; j++) {
    if (sortedArray[i] !== sortedArray[j]) {
      //when a non-duplicate value is encountered
      sortedArray[i + 1] = sortedArray[j]; //add it next to the i-th position
      i++; //increase i for next comparision
    }
  }

  //Note: Splice mutilates the array but slice does not so it has to be re-assigned
  sortedArray = sortedArray.slice(0, i + 1); // i+1 because we are adding unique value at that place

  return sortedArray;
}

const testArray = [0, 0, 1, 1, 1, 2, 2, 3, 3, 4];
console.log(removeDuplicates(testArray));

//Using ES6 data structure - Set :P
console.log([...new Set(testArray)]);
