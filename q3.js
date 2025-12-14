//q3





let map  = new Map() 
map.set("a",40);
map.set("b",30);
map.set("c",20);
map.set("d",10);
map.set("e",40);
map.set("f",50);
map.set("g",80);

// console.log(map);

console.log(new Map([...map].sort((a1,a2)=> a1[1]>a2[1]?1:-1)))

// let arr = [...map]
// // console.log(arr)

// // arr.sort(customLogic)
// arr.sort((a1,a2)=> a1[1]>a2[1]?1:-1)

// // function customLogic(a1,a2){
// //    if(a1[1] > a2[1]){
// //       return 1
// //    }
// //    else{
// //     return -1
// //    }
// // }
// console.log(new Map(arr))