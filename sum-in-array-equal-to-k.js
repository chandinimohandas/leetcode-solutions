//Given k, find all the pairs of numbers in an 
//array whose sun is k


const arr = [1,2,3,4,5,6,7];
const sum = 5;

//#############################################
//Normal solution - O(n^2)
// function findThoseNumbers(arr, sum){
//     let result=[];
//     for(let i=0;i<arr.length;i++){
//         for(let j=i+1;j<arr.length;j++){
//             if(arr[i]+arr[j]==sum){
//                 result.push([arr[i],arr[j]]);
//             }
//         }
//     }
// return result;
// }

//#############################################
//Awesome solution - O(n)
function findThoseNumbers(arr, sum){
    let hashmap = {};
    let result = [];
    for(let i=0;i<arr.length;i++){
        if(hashmap[arr[i]]){
            result.push([hashmap[arr[i]],arr[i]]);
        }else{
            hashmap[sum-arr[i]]=arr[i];
        }
    }
    return result;
}

console.log(findThoseNumbers(arr, sum));