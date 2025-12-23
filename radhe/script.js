// let obj = new Object()
// obj.name = 'radhey'

//const { use } = require("react");

// console.log(obj);


// console.log(Object({name:'radhey'}))

// let rad = 'rad'
// let obj = {
//     2 : '2',
//     '3': '3',
//     1 : '1',
//     'abc': 'cd',
//     abc : 'vdfvbh',
//     123 : '123',
//     11 : '11',
//     ssdsss : 'vdvvdsv',
//     '1 1' : '1 1',
//     'a c ' : 'dvdv',
//     bac  : rad
// }


// obj = {}
// console.log(obj);

// let obj = { a: 1, b: 2 };

// console.log(obj.length); // ❌ undefined


// let obj = {
//     a : 10,
//     b : 20,
//     c : 30
// }
// let store = Object.values(obj)

// let sum = 0

// for(let i=0; i<store.length; i++){
//     sum += store[i]
// }
// console.log(Object.keys(obj).length)
// // console.log(obj,store,sum)


// let obj = { name: 'Radhey', age: 27, city: 'Delhi' };

// let store = Object.keys(obj)

// for(let i=0; i<store.length; i++){
//     console.log(store[i], obj[store[i]])
// }

// let arr  = [1,2,3,4,5] // [4,5,1,2,3]

// let k = 2
// let n = arr.length
// let brr = []

// for(let i=0; i<n; i++){
//    brr[(i-k+n)%n] = arr[i]
// }

// console.log(brr);

// let student = {
//   name: "Radhey",
//   skills: ["HTML", "CSS", "JavaScript"]
// };
// console.log(student.skills[5]);

// let user = {
//   name: "Radhey",
//   address: {
//     city: "Delhi",
//     pincode: 110001
//   }
// };

// console.log(user['address']['pincode']);


// let calculator = {
//   add: function(a, b) {
//     return a + b;
//   }
// };
// // console.log(calculator.add(2,3))
// let name = 'shyam'
// let user = {
//   name: "Radhey",
//   greet: () => {
//     console.log(this.name); 
//   }
// }
// console.log(user.greet());

// let users = {a : 'abc', b: 'bcd'}
// for (let user in users) {
//   console.log(user , users[user]);
// }

// let response2 = [
//   obj ={ a : 'abc', b : 'bcd' }
// ]

// console.log(response2[0].b)


// let response = {
//   status: "success",
//   data: [
//     {
//       id: 1,
//       user: {
//         name: "Radhey",
//         skills: ["JS", "React"]
//       }
//     },
//     {
//       id: 2,
//       user: {
//         name: "Aman",
//         skills: ["HTML", "CSS"]
//       }
//     }
//   ]
// };
// console.log(response.data[1].user.skills[1])