// // // // // Q1. Print all elements row-wise
// // // // // Input:
// // // // // [
// // // // //  [1,2,3],
// // // // //  [4,5,6]
// // // // // ]
// // // // // Output:
// // // // // 1 2 3
// // // // // 4 5 6


// // // // let arr = [
// // // //     [1,2,3],
// // // //     [4,5,6]
// // // // ]

// // // // for (let index = 0; index < arr.length; index++) {
// // // //     let store = ''
// // // //     for (let j = 0; j < arr[index].length; j++) {
// // // //     //    store.push(arr[index][j])
// // // //        store += arr[index][j] +' '
// // // //     }
// // // //     console.log(store);
    
// // // // }




// // // // Q2. Count total elements in 2D array

// // // // let arr = [
// // // //     [1,2,3],
// // // //     [4,5,6]
// // // // ]
// // // // let count = 0
// // // // for (let index = 0; index < arr.length; index++) {

// // // //    for (let j = 0; j < arr[index].length; j++) {
// // // //         count++
// // // //    }
// // // // }
// // // // console.log(count);





// // // // Q3. Print first row and last row




// // // // let arr = [
// // // //     [1,2,3],
// // // //     [4,5,6],
// // // //     [7,8,9]
// // // // ]

// // // // for (let index = 0; index < arr.length; index++) {
// // // //     if(index == 1){
// // // //            continue
// // // //        }else{
// // // //         console.log(arr[index]);
        
// // // //        }
// // // // }



// // // // Q4. Find sum of all elements




// // // // let arr = [
// // // //     [1,2,3],
// // // //     [4,5,6],
// // // //     [7,8,9]
// // // // ]
// // // // let sum = 0
// // // // for (let index = 0; index < arr.length; index++) {

// // // // for (let j = 0; j < arr[index].length; j++) {
 
// // // //      sum += arr[index][j]
// // // // }
// // // // }
// // // // console.log(sum);



// // // // Q5. Find maximum element



// // // // let arr = [
// // // //     [1,2,3],
// // // //     [4,5,6],
// // // //     [7,8,9]
// // // // ]
// // // // let max = -Infinity
// // // // for (let index = 0; index < arr.length; index++) {
// // // //     for (let j = 0; j < arr.length; j++) {
// // // //       if(arr[index][j]> max){
// // // //             max = arr[index][j]
// // // //         }
// // // //     }
// // // // }
// // // // console.log(max);


// // // // 🟠 INTERMEDIATE LEVEL
// // // // Q6. Find sum of each row




// // // // let arr = [
// // // //     [1,2,3],
// // // //     [4,5,6],
// // // //     [7,8,9]
// // // // ]

// // // // for (let index = 0; index < arr.length; index++) {
// // // //     let sum = 0
// // // //      for (let j = 0; j < arr.length; j++) {
// // // //         sum+= arr[index][j]
// // // //      }
// // // //      console.log(sum);
     
// // // //     }

// // // // // Q7. Find sum of each column



// // // // let arr = [
// // // //     [1,2,3],
// // // //     [4,5,6],
// // // //     [7,8,9]
// // // // ]

// // // // for (let index = 0; index < arr.length; index++) {
// // // //     let sum = 0
// // // //      for (let j = 0; j < arr.length; j++) {
// // // //         sum+= arr[j][index]
// // // //      }
// // // //      console.log(sum);
     
// // // //     }



// // // // Q8. Print matrix in reverse order (bottom to top)




// // // let arr = [
// // //     [1,2,3],
// // //     [4,5,6],
// // //     [7,8,9]
// // // ]
// // // for(let i = arr.length-1; i>=0; i--){
// // //     let store = []
// // //     for(let j=arr[i].length-1; j>=0; j--){
// // //             store.push(arr[i][j])
// // //     }
// // //     console.log(store);
// // // }

// // // // Q9. Count even and odd numbers



// // // // Q10. Search an element (linear search)
// // // // Input: 5
// // // // Output: Found at row 1 column 1

// // // // 🔵 ADVANCED LEVEL (DSA STYLE)
// // // // Q11. Check if matrix is a Square Matrix
// // // // rows === columns

// // // // Q12. Print Primary Diagonal
// // // // 1 5 9


// // // // Condition:

// // // // if (i === j)

// // // // Q13. Print Secondary Diagonal

// // // // Condition:

// // // // if (i + j === n - 1)

// // // // Q14. Transpose of Matrix
// // // // Input:
// // // // 1 2 3
// // // // 4 5 6

// // // // Output:
// // // // 1 4
// // // // 2 5
// // // // 3 6

// // // // Q15. Check if Matrix is Symmetric
// // // // matrix[i][j] === matrix[j][i]

// // // // Q16. Rotate Matrix 90° Clockwise ⭐

// // // // (Interview favourite)

// // // // Q17. Print Matrix in Spiral Order ⭐⭐⭐
// // // // 1 2 3
// // // // 6 9 8
// // // // 7 4 5

// // // // Q18. Find row with maximum sum
// // // // Q19. Check if all rows are sorted
// // // // Q20. Convert 2D Array → 1D Array
// // // // 🔥 HOW YOU SHOULD PRACTICE (Important)

// // // // Dry run on paper

// // // // Track:

// // // // i → row

// // // // j → column

// // // // Never guess logic

// // // // First write brute force

// // // // Then optimize

// // let arr = [];
// // arr[3] = 10;
// // console.log(arr.length);


// //  let arr = [10, 20, 30];

// // // for (let i in arr) {
// // //     console.log(i, arr[i]);
// // // }
// // for (let i in arr) {
// //     console.log(Number(i), arr[i]);
// // // }
// // let arr = [10, 20, 30];

// // for (let i in arr) {
// //     if (i == 1) {
// //         console.log("found");
// //     }
// // }


// //  let arr = [1,2,3,4,5,6,5,4,3,9,4,5,6,7,8,7,6,5,4,6,7,-8,7,6,5,5,]

// // let arr = [1, [2, [3, 4]], 5];

// // console.log(arr.flat(2));
// // // [1, 2, 3, 4, 5]


// //  let printt = arr.reduce((acc,num)=>{return num>acc ? num : acc}, 0)
// //  console.log(printt)

// // let brr = arr.map( n => n*n )
// // console.log(brr);

// // let crr = arr.every( nu => nu % 2 == 0)

// // console.log(crr)

// // let drr = arr.filter(num => num %2===0)

// // console.log(drr)



// // let arr = (23,54,2,4,87,3,45,43,2,5,89)

// // console.log(Array.isArray(arr))


// // let arr = [1,2,3,4]
// // let [a,b,...c] = arr

// // console.log(a,b,c)
// // let arr = [1, 2, 3, 4];

// // let a = [1,2,3].map(x => x*2).forEach(x => console.log(x));
// // ❌ Error: forEach is not a function (because map returns array, but forEach returns undefined)


// // let arr = [1, 30, 18, 20]
// // console.log(Array.isArray(arr));

// // let str = 'qwertyuiopasdfghjklzxcvbnm'

// // console.log(str.split('').sort().join(''))
// let users = [
//   { id: 1, name: "Aman", age: 22 },
//   { id: 2, name: "Radhey", age: 27 },
//   { id: 3, name: "Ravi", age: 20 }
// ];


// let updatedUsers = users.map(u => u.id === 2 ? { ...u, age: 28 } : u);
// console.log(updatedUsers)
// // arr.reverse();

// // console.log(arr);


// // let str = 'i am a boy '
// // let str = [1,2,3,4]
// // let by = str.join(' ')
// // console.log(by);

// // let words = ["Hello", "World"];

// // let str = words.join(' ').split()

// // console.log(str);

// // let str = "    r a d  h ey      shy   a  m    ";

// // let arr = str.split(' ').join('')
// // // let arr = Array.from(str)

// // console.log(arr);
// // // ["H", "E", "L", "L", "O"]


// let obj = {
//     id: 1, name: "Aman", age: 22,
//     id: 2, name: "Radhey", age: 27,
//     id: 3, name: "Ravi", age: 20 
// }
// console.log(Object.entries(obj));   
// // [ ["name","Aman"], ["age",22], ["city","Delhi"] ]


// let user = { name: "Aman", age: 22, city: "Delhi" };

// for (let key in user) {
//   console.log(key, user[key]);
// }




// let user = new Object();
// user.name = "Amit";
// user.age = 22;


// let users = [
//   { id: 1, name: "Aman" },
//   { id: 2, name: "Radhey" }
// ];

// for (let i = 0; i < users.length; i++) {
//   console.log(users[i].id);
// }


// let arr = [["a",1], ["b",2]];
// Object.fromEntries(arr);
// // { a:1, b:2 }
// console.log(arr);


// let a = { x: 1 };
// let b = { y: 2 };

// let c = Object.assign({}, a, b);


// console.log(c);


// let str = 'qwertyuiopasdfghjklzxcvbnm'

// console.log(str.split('').sort().join())



// let add =function(a, b) {
//     return a + b;
// }


// let add = (a,b)=> {
//     return a + b
// }
// console.log(add(1,2))


// function show() {
//   console.log(this);
// }

// show();

// let str  ='DogCat'
// let result = ''
// for(let i=3; i<str.length; i++){
// result += str[i]
// }
// for(let i=0; i<3; i++){
//     result += str[i]
// }

// console.log(result)



// let arr = ['DogCat'];
// // let str = arr[0];
// let res = '';

// // Cat part
// for (let i = 3; i < arr.length; i++) {
//   res.push(arr[i]);
// }

// // Dog part
// for (let i = 0; i < 3; i++) {
//   res.push( arr[i])
// }

// console.log(res); // CatDog

// // // console.log(str.split('A'<'Z').reverse().join(''))

// let arr = ['DogCat'];
// // let str = arr[0];
// let res = []

// // Cat part
// for (let i = 3; i < arr[0].length; i++) {
//   res.push(arr[0][i])
// }

// // Dog part
// for (let i = 0; i < 3; i++) {
//   res.push(arr[0][i])
// }

// console.log(res.join('')); // CatDog


// let str = "hello world";

// str.toUpperCase();
// console.log(str); // "HELLO WORLD"

// let a = "Admin";
// let b = "admin";

// if (a.toLowerCase() === b.toLowerCase()) {
//   console.log("Same");
// } else {
//   console.log("Not Same");
// }


// let name = "radhey";

// let result = name[0].toUpperCase() + name.slice(1);
// // console.log(result); // "Radhey"
