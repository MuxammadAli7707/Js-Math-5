// Problem 1

// let n = "4E6";
// let a = 16;
// console.log(parseDecimal(n, a));
// function parseDecimal(n, a){
//   if(a == 16){
//     return n = parseInt(n, 16);
//   } else if(a == 2){
//     return n = parseInt(n, 2);
//   } else if (a == 8){
//     return n = parseInt(n, 8);
//   }
// }


// Problem 2

// let mass = [-2, 5, -10, 12, 3, -4, -5];
// let n = true;
// if(mass[0] < 0){
//   for(let i = 0; i < mass.length; i++){
//     if(i % 2 == 0 &&  mass[i]> 0){
//       n = i;
//       break;
//     } else if(i % 2 == 1 && mass[i] < 0) {
//       n = i;
//       break;
//     }
//   }
// } else {
//   for(let i = 0; i < mass.length; i++){
//     if(i % 2 == 0 && mass[i] < 0){
//       n = i;
//       break;
//     } else if(i % 2 == 1 && mass[i] > 0) {
//       n = i;
//       break;
//     }
//   }
// }

// console.log(n);

// Problem 3

// const obj = {
//   mass: [15, 20, 12, 4, -13, 5],
//   at: function(index) {
//     if(index >= 0) {
//       let a = 0;
//       let b = false;
//       for(let i = 0; i < this.mass.length; i++) {
//         if(index == i){
//           a = this.mass[i];
//           b = true;
//           break;
//         }
//       }
//       if(b == true) {
//         return a;
//       } else{
//         return undefined;
//       }
//     } else {
//       let d = Math.abs(index);
//       d = this.mass.length - d;
//       let a = 0;
//       let b = false;
//       for(let i = this.mass.length; i > 0; i--) {
//         if(d == i){
//           a = this.mass[i];
//           b = true;
//           break;
//         }
//       }
//       if(b == true) {
//         return a;
//       } else {
//         return undefined;
//       }
//     }
//   }
// }

// console.log(obj.at(-2));

// Problem 4

// const string = {
//   reverse: function(str){
//     let mass = str.split('');
//     console.log(mass);
//       for (let i = 0; i <= mass.length; i++) {
//          console.log(mass[mass.length - i]);
//       }
//   }
// }

// console.log(string.reverse("Python"));


// Problem 5

// let object = { x: 1, y: 2 }
// let mass = [];

// for (let i in object) {
//   mass[mass.length] = [i, object[i]];
// }

// console.log(mass);

// Problem 7
// let a = [1, 't', 15, 't'];
// let b = [2, 4];
// let c = [];;

// for (let i = 0; i < a.length; i++) {
//     for (j = i; j < b.length; b++) {
//         if (a[i]==b[j + 1] ){
//             a[i].pop();
//         }
//         else {
//             c[c.length] = a[i];
//             c[c.length] = b[j];
//             break;
//         }
//     }
// }
// console.log(c);


// Problem 8

// const matrix = [
//   [1, 2, 3, 4],
//   [5, 6, 7, 8],
//   [9, 10, 11, 12],
// ];

// const getMinimalCell = function (table, i, j) {
//   const top = table[i - 1]?.[j];
//   const left = table[i][j - 1];
//   let sum = 0;

//   if (top !== undefined && left !== undefined) {
//     sum += top > left ? left : top;
//   }
//   if (top !== undefined && left === undefined) {
//     sum = table[i - 1][j];
//   }

//   if (top === undefined && left !== undefined) {
//     sum = table[i][j - 1];
//   }
//   return sum;
// };

// const getMinRoute = function (matrix, i, j, res = []) {
//   res[res.length] = [i, j];
//   const left = matrix[i][j - 1];
//   const top = matrix[i - 1]?.[j];

//   if (top !== undefined && left !== undefined) {
//     if (left > top) {
//       getMinRoute(matrix, i - 1, j, res);
//     } else getMinRoute(matrix, i, j - 1, res);
//   }

//   if (top !== undefined && left === undefined) {
//     getMinRoute(matrix, i - 1, j, res);
//   }

//   if (top === undefined && left !== undefined) {
//     getMinRoute(matrix, i, j - 1, res);
//   }
//   return res;
// };

// for (let i = 0; i < matrix.length; i++) {
//   for (let j = 0; j < matrix[i].length; j++) {
//     matrix[i][j] += getMinimalCell(matrix, i, j);
//   }
// }

// const res = getMinRoute(matrix, matrix.length - 1, matrix[0].length - 1);
// console.log(res.reverse());


