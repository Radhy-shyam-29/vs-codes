// // // // let arr = [
// // // //     {name: "Ramesh", age:18},
// // // //     {name: "Mohan", age:16},
// // // //     {name: "Sohan", age:46},
// // // //     {name: "Vinod", age:20},
// // // // ];

// // // // let x = arr.filter(value=>{return value.age >= 18})

// // // // console.log(x);


// // // let countryNames = [
// // //   "United States",
// // //   "China",
// // //   "India",
// // //   "Japan",
// // //   "Germany",
// // //   "United Kingdom",
// // //   "France",
// // //   "Italy",
// // //   "Canada",
// // //   "Brazil",
// // //   "Russia",
// // //   "Australia",
// // //   "South Korea",
// // //   "Mexico",
// // //   "Indonesia",
// // //   "Saudi Arabia",
// // //   "Turkey",
// // //   "Spain",
// // //   "South Africa",
// // //   "Argentina"
// // // ];

// // // let a= countryNames.filter(value=> {return (value.includes("i") && value.includes("a") )|| (value.includes("I") && value.includes("A")) || (value.includes("i") && value.includes("A") )|| (value.includes("I") && value.includes("a"))})

// // // console.log(a)

// // // let b = countryNames.map((value)=>{return value.split('').map((char)=>{
// // //     if(char == char.toLowerCase()){
// // //         return char.toUpperCase();
// // //     }else{
// // //         return char.toLowerCase();
// // //     }
// // //    }).join('')
// // // });

// // // console.log(b);

// // // let c= [0, 101, undefined, 399,NaN, 20, "", 10, true, false]

// // // console.log(c.filter(x => x))


// // // let charArr1 =  ['r','a','m','e','s','h'].join('')
// // // console.log(charArr1)

// // // let charArr2 = ['ramesh', 'aand', 'mahesh', 'eshwar', 'sharma', 'hitesh']

// // // for(let key of charArr2){
// // //   console.log(key[0])
// // // }


// // const arr = [10,20,20,10,30,30,40,40,30,20,10];

// // const unique = arr.reduce((duplicate, item) => {
// //   if (!duplicate.includes(item)) {
// //     duplicate.push(item);
// //   }
// //   return duplicate;
// // }, []);

// // console.log(unique); 


// let arr = [
//     {id:1, name:"Rahul", city:"Delhi"},
//     {id:2, name:"Amit", city:"Mumbai"},
//     {id:3, name:"Suresh", city:"Chennai"},
//     {id:4, name:"Ramesh", city:"Delhi"},
//     {id:5, name:"Vikram", city:"Mumbai"},
//     {id:6, name:"Rajesh", city:"Kolkata"},
//     {id:7, name:"Mahesh", city:"Chennai"},
//     {id:8, name:"Sanjay", city:"Delhi"},
//     {id:9, name:"Vijay", city:"Kolkata"},
//     {id:10, name:"Ajay", city:"Mumbai"},
//     {id:10, name:"Ajay", city:"Delhi"},
// ]

// let groupedByCity = arr.reduce((acc, person) => {
//   if (!acc[person.city]) {
//     acc[person.city] = [];
//   }

//   acc[person.city].push(person);
  
//   return acc;
// },{});

// console.log(groupedByCity);



// let a = 10
// let b = 11
// let c = 9

// console.log(a>b ? 'a big' : b>c ? 'b big' :  c>a ? 'c big' : 'a big')

// console.log("5" - "2" + 10);


// console.log(5 + "5" + 2);


// console.log("12" - 2 + "4" * 2);


// console.log("7" + 3 - 2 + "5");


// let a = "0";

// let result = a ? (a === 0 ? "NUM" : "STR") : "EMPTY";

// console.log(result);
// let x = 0
// switch (x) {
//   default:
//     console.log("D");
//     // break
//   case 1:
//     console.log("A");
//   case 2:
//     console.log("B");
//   case 3:
//     console.log("C");
// }


// let flag = true;

// switch(flag) {
//   case 1:
//     console.log("ONE");
//     break;
//   case true:
//     console.log("TRUE");
//     break;
//   case "true":
//     console.log("STRING TRUE");
//     break;
//   default:
//     console.log("NOTHING");
// }



// console.log(typeof (typeof))


// // for (let i = 2; i < 20; i = i * 2) {
// //   console.log(i*2);
// // }
// for (let i = 1; i < 50; i = i % 5 === 0 ? i / 2 : i + 6) {
//   console.log(i);
// }

// for (let i = 1; i <= 10; i++) {
//   if (i % 3 === 0) {
//     i++;
//     continue;
//   }
//   console.log(i);
// }










// for (let i = 2; i < 20; i = i * 2) {
//   console.log(i*2);
// }


// for (let i = 1; i < 6; i++) {
//   if (i === 4) {
//     i++
//     continue
//    }
//   console.log(i);
// }

//  console.log('iuecfheiufcehnf');




// let i = 1;

// while (i < 6) {
//   if (i === 4) {
//     i++; // important: warna infinite loop ho jayega
//     continue;
//   }
//   console.log(i);
//   i++;
// }


// let a = 10
// let b = 20

// let c = (++a)

// console.log(c);


// let nums = ['a', 'b', 'c', 'd']
// console.log(nums[nums.length-1]); // undefined
// console.log(nums.length); // undefined
// console.log(nums.length-1); // undefined

// console.log(nums[nums.length]); // undefined


// for(let i=1; i<=5; i++){
// let str = ''
//     for(let j=1; j<=5; j++){
//         if(i == 2 && j == 3 || i == 4 && j == 3 || i == 3 && j == 2 ||  i == 3 && j == 3 || i == 3 && j == 4){
//            str += ' '
//         }
//         else{
//             str += '*'
//         }
//     }
//     console.log(str)
// // }

// let num = 9;

// let mid = Math.ceil(num/2);

// console.log(mid);
// let x = 1;

// for(let i=1; i<=mid; i++){
//     let str = "";
//     for(let s=1; s<=mid-i+1; s++){
//         str = str+"*";
//     }
//     if(i>1){
//         for(let j=1; j<=x; j++){
//             str = str+" "
//         }
//         x=x+2
//     }

//     if(i==1){
//         for(let k=mid+1; k<=num-i+1; k++){
//             str = str+"*";
//         }
        
//     }else{
//         for(let k=mid+1; k<=num-i+2; k++){
//             str = str+"*";
//         }
//     }
    

//     console.log(str);

// }

// x = mid;
// for(let i=mid-1; i>=1; i--){
//     let str = "";
//     for(let s=1; s<=mid-i+1; s++){
//         str = str+"*";
//     }
//     if(i){
//     }
//     for(let j=1; j<x-1; j++){
//         str = str+" "
//     }
//     x=x-2

//     if(i==1){
//         for(let k=mid+1; k<=num-i+1; k++){
//             str = str+"*";
//         }
        
//     }else{
//         for(let k=mid+1; k<=num-i+2; k++){
//             str = str+"*";
//         }
//     }
    

//     console.log(str);

// }


