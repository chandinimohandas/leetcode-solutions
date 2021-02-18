//https://leetcode.com/explore/interview/card/top-interview-questions-easy/92/array/646/

//normal solution
function normalShift(nums, k) {
  k %= nums.length; //to remove full rotations that will result in the same array
  let temp;
  for (let i = 0; i < k; i++) {
    temp = nums.pop();
    nums.unshift(temp); //complexity of unshift is O(n) :C
  }
  console.log(nums);
}

normalShift([1, 2, 3, 4, 5, 6, 7], 3);

//time complexity: O(n^2) Space complexity= O(1)

//Super awesome solution
function reverse(arr, start, end) {
  let temp;
  while (start < end) {
    temp = arr[start];
    arr[start] = arr[end];
    arr[end] = temp;
    start++;
    end--;
  }
}

function awesomeShift(nums, k) {
  k %= nums.length;
  reverse(nums, 0, nums.length - 1);
  reverse(nums, 0, k - 1);
  reverse(nums, k, nums.length - 1);
  console.log(nums);
}

awesomeShift([1, 2, 3, 4, 5, 6, 7], 3);

//first reverse = [7,6,5,4,3,2,1]
//second reverse = [5,6,7,4,3,2,1]
//third reverse = [5,6,7,1,2,3,4]

//time complexity: O(n) Space complexity= O(1)
