'use strict';

// prettier-ignore
// const months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];

// const form = document.querySelector('.form');
// const containerWorkouts = document.querySelector('.workouts');
// const inputType = document.querySelector('.form__input--type');
// const inputDistance = document.querySelector('.form__input--distance');
// const inputDuration = document.querySelector('.form__input--duration');
// const inputCadence = document.querySelector('.form__input--cadence');
// const inputElevation = document.querySelector('.form__input--elevation');

// let array = ['1', '2', '3', '4', '5', '7','12'];
// const arrLength = array.length;
// const step = array[arrLength];
// console.log('hello');
// // for (let i = 0; i <= arrLength; i++) {
// //   console.log(array[i]);
// // }

// const myArr=[];
// const inputArr = ['add', 'remove', 'add', 'remove'];
// //const inputArr = prompt('hello, enter the new array');
// console.log(inputArr);
// let counter = 1;
// for (let i = 0; i < inputArr.length; i++) {
//   if (inputArr[i] === 'add') {
//     myArr.push(counter);
//     counter++;
//     console.log(myArr);
//   } else if (inputArr[i] === 'remove') {
//     myArr.pop(counter);
//     counter++;
//   }
// }
// if (myArr.length === 0) {
//   console.log('empty');
// } else {
//   for (let i = 0; i < myArr.length; i++) {
//     console.log(myArr[i]);
//   }
// }
// let arr1=['Banana', 'Orange', 'Coconut', 'Apple', '15']
// // let lastInd=arr1.length-1
// // let lastEl=arr1[lastInd];
// let lastEl = arr1[arr1.length - 1];
// const end = arr1.pop();
// for (let i = 0; i < end; i++) {
//   arr1.unshift(arr1.pop());
// }
// console.log(arr1);
//////////////
////////////////
//
/////////////////////////////////////////////////////////////////////////////////
// let array=[20, 3, 2, 15, 6, 1]
// let currentBiggest = 0;
// //let resultArr = [];
// for (let i = 0; i < array.length; i++) {
//   let currentNum = array[i];
//   if (currentNum >= currentBiggest) {
//     currentBiggest = currentNum;
//     //console.log(currentBiggest);
//     //resultArr.push(currentBiggest);
//   } else {
//     array.splice(i, 1);
//     i--;
//   }
// }
// //console.log(currentBiggest);
// console.log(array);
////////////////////////////////////////////
// let array=['test', 'Deny', 'omen', 'Default']
// let newArr = array.sort((a, b) => a.length - b.length || a.localeCompare(b)
// );

// console.log(newArr);
// //console.log(parseInt('Deny') > parseInt('test'));

///////////////////////////////////////////////////////////////
// let myMatrix=[
//     [
//         [4, 5, 6],
//         [6, 5, 4],
//         [5, 5, 5]
//     ],
// ];
// let sum=0;
// for (let row = 0; row < myMatrix[0].length; row++) {
//     for(let col=0; col<myMatrix[0].length;col++ ){
//         if(row===0 ){
//             sum+=myMatrix[0][row][col];
//         }
//         let prom=myMatrix[0][row+1][col];

//     }

// }

// console.log(myMatrix[0][1].reduce((sum, num) => sum + num));

// let criteriaSum = myMatrix[0][0][0] + myMatrix[0][0][1] + myMatrix[0][0][2];
// let firstCol = myMatrix[0][0][0] + myMatrix[0][1][0] + myMatrix[0][2][0];
// let secondCol = myMatrix[0][0][1] + myMatrix[0][1][1] + myMatrix[0][2][1];
// let thirdCol = myMatrix[0][0][2] + myMatrix[0][1][2] + myMatrix[0][2][2];

// let secondRow = myMatrix[0][1][0] + myMatrix[0][1][1] + myMatrix[0][1][2];
// let thirdRow = myMatrix[0][2][0] + myMatrix[0][2][1] + myMatrix[0][2][2];

// if (
//   criteriaSum === firstCol &&
//   criteriaSum === secondCol &&
//   criteriaSum === thirdCol &&
//   criteriaSum === secondRow &&
//   criteriaSum === thirdRow
// ) {
//   console.log('It is magical');
// } else {
//   console.log('it is not funny');
// }
////////////////////////////////////////////////////////////////////
