//https://leetcode.com/explore/interview/card/top-interview-questions-easy/92/array/674/

//normal solution

function intersection(arr1, arr2) {
  let index,
    result = [];
  for (let i = 0, n = arr1.length; i < n; i++) {
    index = arr2.indexOf(arr1[i]);
    if (index !== -1) {
      result.push(arr1[i]);
      arr2.splice(index, 1);
    }
  }
  return result;
}

var intersect = function (nums1, nums2) {
  const bool = nums1.length > nums2.length;
  return bool ? intersection(nums2, nums1) : intersection(nums1, nums2);
};

console.log(intersect([1, 2, 2, 1], [2, 2]));

//time complexity: O(n^2) because of the indexOf and splice inside the loop
//space complexity: O(1)
//better runtime

//Better solution
//using hashmaps to reduce complexity

var hashIntersect = function (nums1, nums2) {
  let map = new Map();

  for (const n of nums1) {
    if (map.has(n)) {
      map.set(n, map.get(n) + 1);
    } else {
      map.set(n, 1);
    }
  }

  let result = [];
  for (const n of nums2) {
    if (map.has(n) && map.get(n) !== 0) {
      result.push(n);
      map.set(n, map.get(n) - 1);
    }
  }

  return result;
};

console.log(hashIntersect([1, 2, 2, 1], [2, 2]));

//time complexity: O(m+n)
//space complexity: O(n) because of hash map
//runtime also more for this solution
