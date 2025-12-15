// 🟢 BASIC LEVEL (1–3)
// 1️⃣ Print all elements of a 2D array

// Given a 2D array, print all elements row by row.

//  let arr = [
//   [1, 2, 3],
//   [4, 5, 6]
// ];

// for(let i=0; i<arr.length; i++){

// for(let j=0; j<arr[i].length; j++){
//     console.log(arr[i][j])
// }
// }


// 2️⃣ Find the sum of all elements in a 2D array

// Calculate and print the total sum of all numbers.


//  let arr2 = [
//   [1, 2, 3],
//   [4, 5, 6]
// ];
// let sum = 0
// for(let i=0; i<arr2.length; i++){
// for(let j=0; j<arr2[i].length; j++){
//     sum += arr2[i][j]
// }
// }
// console.log(sum);



// 3️⃣ Count total rows and columns

//  let arr3 = [
//    [1, 2, 3],
//    [4, 5, 6, 7]
// ];

//       console.log(`rows are ${arr3.length}`)

// for(let i=0; i<arr3.length; i++){
//        console.log(`coloums in ${i+1} line  ${arr3[i].length}`)

//     }






// Given a 2D array, print:

// number of rows

// number of columns




// 🟡 INTERMEDIATE LEVEL (4–7)
// 4️⃣ Find the maximum element in a 2D array

// Return the largest number from the entire matrix.


// let arr4 = [
//      [1, 2, 3],
//      [4,5,12,7],
//      [8,9,10,11]
//  ];
// let max = -Infinity
// for(let i=0; i<arr4.length; i++){

//     for(let j=0; j<arr4[i].length; j++){

//         if(arr4[i][j] > max){
//             max = arr4[i][j]
//         }
//     }
// }
// console.log(max)


// 5️⃣ Find the sum of each row

// For every row, print its sum.

// Example Output:

// Row 1 sum = 6
// Row 2 sum = 15

// let arr5 = [
//      [1, 2, 3],
//      [4,5,12,7],
//      [8,9,10,11]
//  ];
//  for(let i=0; i<arr5.length; i++){
//      let sum = 0
//     for(let j=0; j<arr5[i].length; j++){
//         sum += arr5[i][j]
//     }
//     console.log(sum)
// }

// // 6️⃣ Find the sum of each column

// // Print the sum of each column in the 2D array.

// let arr6 = [
//      [1, 2, 3],
//      [4 ,5, 12],
//      [8, 9, 10]
//  ];
//  for(let i=0; i<arr6.length; i++){
//      let sum = 0
//     for(let j=0; j<arr6[i].length;j++){
//             sum += arr6[j][i]
//     }
//     console.log(sum)
// }



// 7️⃣ Search an element in a 2D array

// Given a number X, check whether it exists in the 2D array or not.

// Return:

// "Found" or "Not Found"

// 🔴 ADVANCED LEVEL (8–10)
// 8️⃣ Find the transpose of a matrix

// Convert rows into columns.

// Input:
// 1 2 3
// 4 5 6

// Output:
// 1 4
// 2 5
// 3 6

// 9️⃣ Check if a matrix is square

// A matrix is square if:

// number of rows == number of columns

// Return true or false.

// 🔟 Rotate a 2D array by 90 degrees clockwise

// Given a square matrix, rotate it 90° clockwise.

// Input:
// 1 2 3
// 4 5 6
// 7 8 9

// Output:
// 7 4 1
// 8 5 2
// 9 6 3

// 🧠 HOW TO PRACTICE (recommended)

// Solve without using built-in methods

// Use nested loops

// Dry run on paper first

// Push each solution to GitHub (🔥 streak)