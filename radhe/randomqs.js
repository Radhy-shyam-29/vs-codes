// // Q1. Print all elements row-wise
// // Input:
// // [
// //  [1,2,3],
// //  [4,5,6]
// // ]
// // Output:
// // 1 2 3
// // 4 5 6


// let arr = [
//     [1,2,3],
//     [4,5,6]
// ]

// for (let index = 0; index < arr.length; index++) {
//     let store = ''
//     for (let j = 0; j < arr[index].length; j++) {
//     //    store.push(arr[index][j])
//        store += arr[index][j] +' '
//     }
//     console.log(store);
    
// }




// Q2. Count total elements in 2D array

// let arr = [
//     [1,2,3],
//     [4,5,6]
// ]
// let count = 0
// for (let index = 0; index < arr.length; index++) {

//    for (let j = 0; j < arr[index].length; j++) {
//         count++
//    }
// }
// console.log(count);





// Q3. Print first row and last row




// let arr = [
//     [1,2,3],
//     [4,5,6],
//     [7,8,9]
// ]

// for (let index = 0; index < arr.length; index++) {
//     if(index == 1){
//            continue
//        }else{
//         console.log(arr[index]);
        
//        }
// }



// Q4. Find sum of all elements




// let arr = [
//     [1,2,3],
//     [4,5,6],
//     [7,8,9]
// ]
// let sum = 0
// for (let index = 0; index < arr.length; index++) {

// for (let j = 0; j < arr[index].length; j++) {
 
//      sum += arr[index][j]
// }
// }
// console.log(sum);



// Q5. Find maximum element



// let arr = [
//     [1,2,3],
//     [4,5,6],
//     [7,8,9]
// ]
// let max = -Infinity
// for (let index = 0; index < arr.length; index++) {
//     for (let j = 0; j < arr.length; j++) {
//       if(arr[index][j]> max){
//             max = arr[index][j]
//         }
//     }
// }
// console.log(max);


// 🟠 INTERMEDIATE LEVEL
// Q6. Find sum of each row




// let arr = [
//     [1,2,3],
//     [4,5,6],
//     [7,8,9]
// ]

// for (let index = 0; index < arr.length; index++) {
//     let sum = 0
//      for (let j = 0; j < arr.length; j++) {
//         sum+= arr[index][j]
//      }
//      console.log(sum);
     
//     }

// // Q7. Find sum of each column



// let arr = [
//     [1,2,3],
//     [4,5,6],
//     [7,8,9]
// ]

// for (let index = 0; index < arr.length; index++) {
//     let sum = 0
//      for (let j = 0; j < arr.length; j++) {
//         sum+= arr[j][index]
//      }
//      console.log(sum);
     
//     }



// Q8. Print matrix in reverse order (bottom to top)




let arr = [
    [1,2,3],
    [4,5,6],
    [7,8,9]
]
for(let i = arr.length-1; i>=0; i--){
    let store = []
    for(let j=arr[i].length-1; j>=0; j--){
            store.push(arr[i][j])
    }
    console.log(store);
}

// Q9. Count even and odd numbers
// Q10. Search an element (linear search)
// Input: 5
// Output: Found at row 1 column 1

// 🔵 ADVANCED LEVEL (DSA STYLE)
// Q11. Check if matrix is a Square Matrix
// rows === columns

// Q12. Print Primary Diagonal
// 1 5 9


// Condition:

// if (i === j)

// Q13. Print Secondary Diagonal

// Condition:

// if (i + j === n - 1)

// Q14. Transpose of Matrix
// Input:
// 1 2 3
// 4 5 6

// Output:
// 1 4
// 2 5
// 3 6

// Q15. Check if Matrix is Symmetric
// matrix[i][j] === matrix[j][i]

// Q16. Rotate Matrix 90° Clockwise ⭐

// (Interview favourite)

// Q17. Print Matrix in Spiral Order ⭐⭐⭐
// 1 2 3
// 6 9 8
// 7 4 5

// Q18. Find row with maximum sum
// Q19. Check if all rows are sorted
// Q20. Convert 2D Array → 1D Array
// 🔥 HOW YOU SHOULD PRACTICE (Important)

// Dry run on paper

// Track:

// i → row

// j → column

// Never guess logic

// First write brute force

// Then optimize