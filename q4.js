// {
//     let x=0
// console.log(x);

// }


// function test(){ console.log("1") }
// function test(){ console.log("2") }

// test() 


// function outer(){
//     console.log("out1")
//                                             function inner(){
//                                                 console.log("inside")
//                                             }
//                                             inner()
//   console.log("out2")
// }
// outer()


// function outer(){
//   return function(){
//     console.log("returned function")
//   }
// }

// let x = outer()
// x()


// let addition =  (a,b) => {
//     console.log(parseInt(a/b))
// }
// addition(3,4)


// let add  = () => {

// }


// let x = function() {
//   console.log("Hi");
// };

// let y = x;
// x = null;

// y(); 


// console.log(typeof new (Object));

// function demo() {
//   console.log("1");
//    // baad me callback call hua
//    sayHello()
// }

// function sayHello() {
//   console.log("2");
// }

// demo(sayHello);




// function payment(ammount, call){
//     console.log(`${ammount} is recieved`);
//     console.log(`food is being prepared`);
//    call()
// }

// function zom(){
//     console.log(`zoomato is ready for you`);
    
// }

// function blink(){
//     console.log(`blinkit is ready for packaging`);
    
// }

// payment(500, blink)


// function check(){
//     let names = 'radhey'

//     return function singh(){
//         console.log(names)
//     }
// } 
// let ram = check()
// ram()

// //radhey


// let a = 10;

// function outer() {
//   let b = 20;

//   function inner() {
//     let c = 30;
//     console.log(a, b, c);
//   }

//   inner();
// }

// outer();


// let x = 5;

// function test() {
//   let y = 10;

//   if (true) {
//     let z = 15;
//     console.log(x, y, z);
//   }

//   console.log(x, y);
// }

// test();
// console.log(x);


// hello();

// var hello = function() {
//   console.log("Hi");
// }

// function a() {
//   b();
//   console.log("a");
// }

// function b() {
//   c();
//   console.log("b");
// }

// function c() {
//   console.log("c");
// }

// a();

// let matrix = [
//   [1, 2, 3], 
//   [4, 5, 6], 
//   [7, 8, 9]
// ];

// for (let i = 0; i < matrix.length; i++) {
//   for (let j = 0; j < matrix[i].length; j++) {
//     console.log(matrix[i][j]);
//   }
// }


// let threeD = [
//   [
//     [1,2], 
//     [3,4]
//   ],
//   [
//     [5,6], 
//     [7,8]
//   ]
// ];
// console.log(threeD);

// Ek array banao jisme 5 numbers ho.
// Phir:

// Last element remove karo

// Start me 100 add karo

// Array print karo

// let arr = [ 10,20,30,40, 50]

// arr.pop()
// console.log(arr);
// arr.unshift(100)
// console.log(arr);

// Ab ye kaam karo:

// Ek array banao jisme 5 numbers ho
// Beech wale element ko 999 se replace karo
// Phir array print karo


// let arr = [1,2,3,4,5]

// arr.splice(2,1,999)
// console.log(arr);


// Ek array banao jisme numbers ho
// Us array se sirf even numbers nikal ke ek naya array banao
// Aur us new array ko print karo

// let arr = [1,2,3,4,5,6,7,8,9]
// let evenArr = []


// for(let i =1; i<arr.length; i++){
//     if(arr[i] % 2 == 0){
//         evenArr.push(arr[i])
//     }
// }
// console.log(evenArr);


// Ek array banao
// Us array me se sabse bada number (maximum) nikaalo
// Aur print karo

// let arr = [1,2,3,454,56,6,7,78,89]

// let max = 0

// for(let i=0; i<arr.length; i++){
//     if(arr[i] > max){
//         max = arr[i]
//     }
// }
// console.log(max);

// Ek array banao
// Usme se sabse chhota number (minimum) nikaalo
// Aur print karo


// let arr = [1,1,2,3,4,5,5,56,66,7,76,7,86,756,54,4,324,4,6,85,7544,34]

// let newArr = []

// for(let i=0; i<=arr.length-1; i++){
//     if(arr[i] != newArr[i]){
//         newArr.push(arr[i])
//     }
// }
// console.log(newArr);

// let arr = [1,2,3,3,2,1,4,3,4,6,3,2,4,5,6,4,23,12,12,34,5,4];
// let newArr = [];

// for(let i=0; i<=arr.length-1; i++){
//     let isDuplicate = false;

//     for(let j=0; j<=newArr.length-1; j++){
//         if(arr[i] === newArr[j]){
//             isDuplicate = true;
//             break;
//         }
//     }

//     if(isDuplicate == false){
//         newArr.push(arr[i]);
//     }
// }

// console.log(newArr);


// Ek array banao
// Us array me se second largest number nikaalo
// Aur usko print karo

let arr = [1,2,3,3,2,1,4,3,4,6,3,2,4,5,6,4,23,12,12,34,5,4];


let uniqueNum = []

for(let i=0; i<arr.length; i++){
    
    let isDuplicate = false
    for(let j=0; j<uniqueNum.length; j++){
        if(arr[i] == uniqueNum[j]){
            isDuplicate = true
            break;
        }
    }
    if(isDuplicate == false){
        uniqueNum.push(arr[i])
    }
}

// let largest = uniqueNum[0]
console.log(uniqueNum);
// console.log(largest);






















// let uniqueNum = []
// let result = []

// for(let i=0; i<arr.length; i++){
//     let flag = false

//     for(let j=0; j< uniqueNum.length; j++){
//         if(arr[i] == uniqueNum[j]){
//             flag = true 
//             break;
//         }
//     }if(flag = true)(
//         uniqueNum.push(arr[i])
//     )
// }

// console.log(uniqueNum);
