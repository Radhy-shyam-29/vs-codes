// // // // let arr = [4, 5, 1, 2, 0, 4, 5, 1];

// // // // repeating = []

// // // // for(let i=0; i<arr.length; i++){

// // // //     let  flag = false
// // // //     for(let j=0; j<repeating.length; j++){

// // // //             if(arr[i] == repeating[j]){
// // // //                 flag = true
// // // //                 break;
// // // //             }
// // // //         }

// // // //         if(flag == false){
// // // //             repeating.push(arr[i])
// // // //         }
// // // // }

// // // // console.log(repeating);

// // // // kya phla element arr me dobara bhi aa rha hai agar aa rha hai to kuch mt kro or agle index ko check kro or agar koi index asa mil jae jo khta hai ki mere jaisa m akela hu to usko store kr k usi time break krdo loop bnd aage chk hi nhi krna

// // // let arr = [4, 5, 1, 2, 0, 4, 5, 1];

// // // let firstNonReapting = []

// // // for(let i=0; i<arr.length; i++){
// // //     let isDuplicate = false

// // //     for(let j=0; j<arr.length; j++){
// // //             if(i != j && arr[i] == arr[j]){
// // //                 isDuplicate = true
// // //                 break
// // //             }
// // //     } if( isDuplicate == false){
// // //         firstNonReapting.push(arr[i])
// // //         break
// // //     }
// // // }
// // // console.log(firstNonReapting);

// // // Find the FIRST REPEATING element in an array.
// // // Example:

// // let arr = [7, 3, 5, 3, 7, 9];

// // let firstReaptingNum = []

// // for(let i=0; i<arr.length; i++){
// //     let flag  = false

// //     for(let j=0; j<arr.length; j++){

// //         if(i != j && arr[i] == arr[j]){
// //                 flag = true
// //           firstReaptingNum.push(arr[i])
// //             break;
// //         }
// //     }
// //     if(flag = true)
// //         {break}
// // }
// // console.log(firstReaptingNum);
// // function ArrayProblem2(arr) {
// //   // Write code here
// // let num = 0
// //   for(let i=0; i<arr.length; i++){
// //     if(arr[i]>35){
// //       num = num+i;
// //     }
// //   }
// //   return num;
// // }
// // let x = ArrayProblem2([16,36,68,56,12,15])
// // console.log(x);
// function isPalindrome(n){
//   n = n.toString()
//   let left = 0;
//   let right = n.length - 1;
  
//   while (left < right) {
//     if (n[left] != n[right]) {
//      return false
//     }  
//      left += 1;
//       right += -1;  
//     }
//     return true 
// }
// console.log(isPalindrome('rar'))



// Step 1
let str = "Welcome to this JavaScript Guide!";

// final answer store karne ke liye
let finalResult = "";

// Loop for access the word before the space
for (let i = 0; i <= str.length; i++) {

  let word = "";

  // jab tak space na mile tab tak word banao
  for (; i < str.length && str[i] !== " "; i++) {
    word = word + str[i];
  }

  // when we meet the space we can break for the queue
  // and store it in another variable, then make another
  // loop for access these word we are storing in another variable
  let reversedWord = "";

  for (let j = 0; j < word.length; j++) {
    // this loop will check and do the operation of
    // converting this word into reverse and store in another variable
    reversedWord = word[j] + reversedWord;
  }

  // reversed word ko final result me add karo
  finalResult = finalResult + reversedWord;

  // space ko wapas add karo
  if (str[i] === " ") {
    finalResult = finalResult + " ";
  }

  // and repeat this task until string is end.
}

console.log(finalResult);
