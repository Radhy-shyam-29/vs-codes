

// let n = 5

// for(let i=1; i<=n; i++){
//     let spaces = ' '.repeat(n-i)
//     let stars = '* '.repeat(i)
//     console.log(spaces,stars)
// }

// for(let i=n-1; i>=1; i--){
//      let spaces = ' '.repeat(n-i)
//     let stars = '* '.repeat(i)
//     console.log(spaces,stars)
// }


// let str = 'my name is radhey'
// res = ''
// for(let i=str.length-1; i>=0; i--){
//     res += str[i]
// }
// console.log(res)

// let str = '12.45.5.8.76'

// let sp = str.split('.')

// let sum = 0
// for (let i = 0; i < sp.length; i++) {
//     sum += Number(sp[i])
// }
// console.log(sum)


// let arr = [
//   1, 2, 3, 4, 5, 6, 7, 8, 9, 10,
//   11, 12, 14, 15, 16, 17, 18, 19, 20,
//   21, 22, 23, 24, 25, 26, 27, 28, 29, 30,
//   31, 32, 33, 34, 35, 36, 37, 38, 39, 40,
//   41, 42, 43, 44, 45, 46, 47, 48, 49,
//   51, 52, 53, 54, 55, 56, 57, 58, 59, 60,
//   61, 62, 63, 64, 65, 66, 67, 68, 69, 70,
//   71, 72, 73, 74, 75, 76, 77, 78, 79, 80,
//   81, 82, 83, 84, 85, 86, 87, 88, 89, 90,
//   91, 92, 93, 94, 95, 96, 97, 98, 100
// ];
// let brr  = []
// for(let i=1; i<100; i++){
//     if(!arr.includes(i)){
//         brr.push(i)
//     }
// }
// console.log(brr)


// let obj = {
//     name : 'radhey',
//     age : 26,
//     course : 'MERN'
// }
// obj.aadharNum = 828936276270
// delete obj.name
// obj.age = 30

// let obj2 = obj 

// obj2.age = 40

// console.log(obj.name);


// console.log((Object.entries(obj2)).reverse().join(' - ').split())

// for(let radhy of obj){
//     console.log(radhy);
// }



let obj = {
    name : 'radhey',
    age : 26,
    course : 'MERN'
}
// let ram = Object.values(obj)
// for(let i=0; i<ram.length; i++){
// }
// console.log(ram)

for(let [rama,shyama] of Object.entries(obj)){
    console.log(rama, shyama)
}
// obj.aadharNum = 828936276270
// // delete obj.name
// obj.age = 30

// let obj2 = obj 

// obj2.age = 40
// let {age:myage,course:mycourse} = obj
// console.log(myage,);

// // 'œ˙´´`˳þ¥¨ʼø,“‘¯ßðƒ©ˍ˝˚-ˀ.¸ˇ˘˜˛≤≥'

