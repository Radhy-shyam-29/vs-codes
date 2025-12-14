// // Write a program to find the second largest number in an array without using .sort().




// // Write code to reverse an array manually (using loop, not .reverse()).





// // Create a new array containing only even numbers from an existing array.






// // Create a new array where every element is the square of elements from the original array (no .map()).

// // Write logic to merge two arrays manually without using concat().

// // Write code to remove duplicates from an array without using Set.

// // Given an array, create a new array with elements in alternate order (ex: [1,2,3,4,5] → [1,3,5]).

// // Write logic to rotate an array to the right by K steps (ex: [1,2,3,4], K=1 → [4,1,2,3]).

// // Write code to find the frequency of each element in an array (only arrays allowed).

// // Write logic to check if two arrays are exactly equal in both value & order.



// // let arr1 = [1,2,3]
// // let arr2 = [2,3]

// // function check(){

// // if(arr1.length !== arr2.length){
// //     return false
// // }

// // for(let i=0; i<arr1.length; i++){
// //     if(arr1[i] !== arr2[i]){
// //     return false
// // }
// // }
// // return true

// // }
// // let c1= check(arr1,arr2)
// // console.log(c1)


// // Without using .push(), add an element at the end of the array manually.


// // let arr = [1,2,3]
// // // console.log(arr.length);

// // // arr[arr.length] = 4
// // // console.log(arr);

// // for(let i=arr.length-1; i>=0; i--){
// // arr[i+1] = arr[i]
// // }
// // arr[0]=0
// // console.log(arr)

// // // let arr = [10, 20, 30];

// // // step 1: shift elements right (from end to start)
// // for (let i = arr.length; i > 0; i--) {
// //   arr[i] = arr[i - 1];
// // }

// // // step 2: put new value at start
// // arr[0] = 5;

// // console.log(arr); // [5, 10, 20, 30]




// // Without using .pop(), remove the last element manually and print the modified array.

// // let arr = [1,2,3,4]
// // arr.length = arr.length - 1
// // console.log(arr)

// // Write a program to find the sum of all numbers in an array using a loop.

// // let arr = [1,2,3,4,5]
// // let count = 1
// // for(let i=0; i<arr.length; i++){
// //  count *= arr[i]
// // }
// // console.log(count);


// // Create a new array containing only positive numbers from another array.

// // let arr= [1,0,2,3,4,5,6,7,8,7,6,5,4,5,6,7,8,9,8,7,6,7,8,8]
// // let newArr = []
// // for(let i=0; i<arr.length; i++){
// //     if(arr[i] % 2== 0 && !(newArr.includes(arr[i]))){
// //         newArr.push(arr[i])
// //     }
// // }
// // console.log(newArr);

// // let arr = [5, -3, 12, -7, 0, 9, -1, 4, -10, 8];
// // let newArr = []
// //     for(let i=0; i<arr.length; i++){
// //         if(arr[i]>=0){
// //             newArr.push(arr[i])
// //         }
// //     }
// //     console.log(newArr);
    
// // Write logic to create an array containing elements that appear more than once in the original array.

// // let arr= [1,0,2,3,4,5,6,7,8,7,6,5,4,5,6,7,8,9,8,7,6,7,8,8]

// // let newArr = []
// // let final = []
// // let result = []
// //  for(let i=0; i<arr.length; i++){
    
// //     if(!(newArr.includes(arr[i]))){
// //         newArr.push(arr[i])
// //     }
// //     else{
// //         final.push(arr[i])
// //     }
// //  }
// //  for(let i=0; i<final.length; i++){
// //      if(!(result.includes(final[i]))){
// //         result.push(final[i])
// //     }
// //  }
// //  console.log(newArr,final,result);
 


// // let arr= [1,0,2,3,4,5,6,7,8,7,6,5,4,5,6,7,8,9,8,7,6,7,8,8]

// // let newArr = []
// // let final = []
// // let result = []
// //  for(let i=0; i<arr.length; i++){
    
// //     if(!(newArr.includes(arr[i]))){
// //         newArr.push(arr[i])

// //     }
// //     else if(!(final.includes(arr[i]))){
// //         final.push(arr[i])
// //     }
// //  }
// //  console.log(newArr,final);
 



// // Given an array, create a new array where elements are shifted left by 1 position
// // Example: [10,20,30,40] → [20,30,40,10].
// // let brr = [10,20,30,40]
// // let newBrr = []
// // for(let i=0; i<brr.length; i++){
// //   if(i == brr.length-1){
// //     newBrr.push(brr[i])
// //   }else{
// //     newBrr.push(brr[i+1])
// //   }
// //    }

// // console.log(brr);


// // Write code to insert a value at a specific index without using splice().
// // Input:
// // arr = [10, 20, 30, 40]
// // let value = 25
// // let index = 2



// // // Output:
// // // [10, 20, 25, 30, 40]

// // let arr = [10, 20, 30, 40] 
// // for(let i=arr.length; i>index; i--){
// //     arr[i] = arr[i-1]
    
// // }
// // arr[index] = value

// // console.log(arr)



// // // Write logic to remove a value at a specific index without using splice().

// // let arr = [10, 20, 30, 40, 50]
// // index = 2
// // // Output:
// // // [10, 20, 40, 50]

// // let arrr = []
// // for(let i=0; i<arr.length; i++){
// //     if(i==index){
// //         continue
// //     }else{
// //         arrr.push(arr[i])
// //     }
// // }
// // console.log(arrr);



// // Write a program to swap the first and last elements of an array.

// let arr = [10, 20, 30, 40, 50]
// let tmp = arr[0]
// arr[0] = arr[arr.length-1]
// arr[arr.length-1] = tmp

// console.log(arr);

// // Write code to calculate the average of numbers in an array.



// // let arr = [1,2,3,3,2,4,5,3,12,4,5,6]

// //     let brr = []
// // for(let i = 0; i<arr.length; i++){
// //     for(let j=i+1; j<arr.length; j++){
// //         if(arr[i] == arr[j] && brr != arr[i]){
// //              brr.push(arr[i])
// //         }
// //     }
// // }
// //     console.log(brr)



// // let arr = [1,2,3,3,2,4,5,3,12,4,5,6]

// // let brr = []
// // for(let i = 0; i<arr.length; i++){
// //     for(let j=i+1; j<arr.length; j++){
// //         if(arr[i] == arr[j]){
// //         if(!brr.includes(arr[i])){
// //         brr.push(arr[i])
// //         }
// //         }
// //     }
// // }
// // console.log(brr)


// // let arr = [1,2,3,2,3,2,3,4,5,6,4,5,6,7,12,9,6,6,4,34,3,2]
// // let max = -Infinity
// // let secondMax = -Infinity

// // for(let i=0; i<arr.length; i++){
// //     if(arr[i]> max){
// //         secondMax = max
// //         max = arr[i]
// //     }
// //     if( arr[i] < max && arr[i] > secondMax){
// //         secondMax = arr[i]
// //     }
// // }
// // console.log(max, secondMax)


// // let arr = [9,8,7,6,5,4,3,2,1,0]

// // let rev = []

// // for(let i=arr.length-1; i>=0; i--){
// //     rev.push(arr[i])
// // }
// // console.log(rev);


// // let arr = [9,8,7,6,5,4,3,2,1,0]

// // let even = []
// // let odd = []

// // for(let i=0; i<arr.length; i++){
// //     if(arr[i] % 2 == 0){
// //         even.push(arr[i])
// //     }
// //     else{
// //         odd.push(arr[i])
// //     }
// // }

// // console.log(even, odd);
// // console.log((even, odd));

// // let arr = [9,8,7,6,5,4,3,2,1,0,9,8,7,6,5,4,3,2,1,0]

// // let newArr = []

// // for(let i=0; i<arr.length; i++){
// //     if(!newArr.includes(arr[i])){
// //         newArr.push(arr[i])
// //     }
// // }
// // console.log(newArr);



// // let arr = [1,2,3,4,5]

// // let alternate = []

// // for(let i =0; i<arr.length; i+=2){
// // //    if(i%2==0){
// // //     alternate.push(arr[i])
// // //    }
// // //    else{continue}
// //     alternate.push(arr[i]);
// // }
// // console.log(alternate);

// // let arr = [1,2,3,4,5]

// // let k = 2

// // let newArr = []

// // for(let i=0; i<arr.length; i++){
 
// // }