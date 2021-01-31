const { join } = require("path");

let temp = [];
let temp2 = [];
let KQ = 0;
let output = " ";

function binToY(N, X, Y) {
  switch (Y) {
    case Y = 10:
      XToBin(N, X);
      for (let i = 0; i < temp.length; i++) {
        KQ = KQ + temp[temp.length - (1 + i)] * Math.pow(2, i);
      }
      output = "" + KQ
      break;
    case Y = 2:
      if(X==8){
        XToBin(N, X);
        for (let i = 0; i < temp.length; i++) {
          temp2.push(temp[i]);
          output = temp2.join("");
        }
      }
      else{
        XToBin(N, X);
        for (let i = 0; i < temp.length; i++) {
          temp2.push(temp[temp.length - (1 + i)]);
          output = temp2.join("");
        }
      }

  }
  temp = [];
  temp2 = [];
  KQ = 0;
  console.log(output)
}
function XToBin(N, X) {
  switch (X) {
    case X = 10:
      for (let i = 0; ;) {
        temp.push(parseInt(N % 2));
        N = N / 2;
        if (N / 2 < 1) {
          temp.push(parseInt(N % 2));
          break;
        }
        else {
          i++
        }
      }
      break;

    case X = 8:
      let M = ""
      M = M + N;
      let kq = 0;
      let temp3 = [];
      let temp4 = [];
      temp2 = M.split("");
      for (let i = 0; i < temp2.length; i++) {
        temp3.push(parseInt(temp2[i]));
      }
      for (let i = 0; i < temp3.length; i++) {
        kq = kq + temp3[i] * Math.pow(8, temp3.length - [1 + i]);
      }
      XToBin(kq, 10);
      for (let i = 0; i < temp.length; i++) {
        temp4.push(temp[temp.length - (1 + i)])
      }
      temp2 = [];
      temp = temp4;
      temp4 = [];
      break;
    case X = 2:
      let Z = ""
      Z = Z + N;
      temp = Z.split("");
      for (let i = 0; i < temp.length; i++) {
        temp2.push(parseInt(temp[i]));
      }
      temp = temp2;
      break;
  }
}


// Add new functions, variables here

function main(input) {
  let nhap = input.split(" ");
  let N = parseInt(nhap[0]);
  let X = parseInt(nhap[1]);
  let Y = parseInt(nhap[2]);
  binToY(N, X, Y);
  // console.log(XToBin(N, X));
  // Your code goes here
  // Using console.log to answer the question
}

module.exports = main;
