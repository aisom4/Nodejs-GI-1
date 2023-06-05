// without the method.
//function sum(x){
//     total = 0;
//     for(let i =0; i< x.length; i++){
//         total = total + x[i];

//     } return total;
// }

// console.log(sum([1,2,3,4,5,6]));

// process.argv
let total = 0;
for (let i = 2; i < process.argv.length; i++) {
  total += Number(process.argv[i]);
}
console.log(total);
