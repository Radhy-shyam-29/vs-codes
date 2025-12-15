// Find minimum element

let arr = [1,2,3,4,5,6]
brr = Infinity
for(let i=0; i<arr.length; i++){
    if(arr[i]< brr){
       brr = arr[i]
    }
}
console.log(brr);


// Count odd numbers

let arr2 = [1,2,3,4,5,6]

let count = 0
let countedValues = []
for(let i=0; i<arr2.length; i++){
    if(arr[i]%2 !== 0){
        count++
        countedValues.push(arr[i])
    }
}
console.log(count, countedValues);


// Copy array manually

let arr3 = [1,2,3,4,5,6]
let arr4 = [7,8,9,10]


let copiedArr = []

for(let i=0; i<arr3.length; i++){
    copiedArr.push(arr3[i])
}
for(let i=0; i<arr4.length; i++){
    copiedArr.push(arr4[i])
}
console.log(copiedArr);


// Find index of an element

let arr5 = [1,2,3,4,5,6]

let index = 3

for (let i = 0; i < arr5.length; i++) {
   if(i == index){
    console.log(arr5[i])
   }
    
}

// Check if array is empty

let arr6 = [1]

let length = arr6.length

if(length == 0){
    console.log('empty array')
} else{console.log('Non-Empty Array')}

