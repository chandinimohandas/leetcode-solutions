//Given an array find the value in the array that is not duplicate

//################################################################
//My solution
const array = [4,1,4,2,2];

// var singleNumber = function(nums) {
//     let hashmap={};
//     for(let i=0;i<=nums.length;i++){
//         let str=new String(nums[i]);
//         if(hashmap[str]){
//             delete hashmap[str];
//         } else{
//             hashmap[str] = str;
//         }
//     }
//     const key = Object.keys(hashmap);
//     return parseInt(hashmap[key[0]]);
// };
//################################################################
//Super Awesome solution

var singleNumber = function(nums) {
    return nums.reduce((a,b)=>{ return a^b; });
}
console.log(singleNumber(array));