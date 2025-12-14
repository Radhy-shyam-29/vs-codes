// q1



let v1 = "2.3.5" 
let v2 = "2.0000000003.5"

let arr1 = v1.split(".")
let arr2 = v2.split(".")

console.log(arr1)
console.log(arr2)

function convertToNumber(arr){
   for(let i = 0; i<=arr.length-1; i++){
      arr[i] = +arr[i]
    //   arr[i] += x // arr[i] = arr[i] +x
   }
   
}

convertToNumber(arr1)
convertToNumber(arr2)

console.log(arr1, arr2)
// [2,3,5] => "235"
// [2,3,5] =? "245"

let s1 = arr1.join("")
let s2 = arr2.join("")
console.log(s1,s2)


