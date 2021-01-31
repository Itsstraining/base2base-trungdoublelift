const { join } = require("path");

let temp=[];
let temp2=[];
let KQ=0;
let output=" ";
function binToY(N,X,Y){
  switch(Y){
    case Y=10:
    XToBin(N,X);
    for(let i=0;i<temp.length;i++){
      KQ=KQ+temp[i]*Math.pow(2,i);
      output=" "+KQ
    }
    break;
    case Y=2:
    XToBin(N,X);
    for(let i=0;i<temp.length;i++){
      temp2.push(temp[temp.length-(1+i)]);
      output=temp2.join(" ");
    }
  }
return output;
}
function XToBin(N,X){
  switch(X){
    case X=10:
      for(let i=0;;){
        temp.push(parseInt(N%2));
        N= N/2;
        if(N/2<1){
          temp.push(parseInt(N%2));
          break;
        }
        else{
          i++
        }
      }
      break;

  }
  return temp;
}


// Add new functions, variables here

function main(input) {
  let temp=input.split(" ");
  let N=parseInt(temp[0]);
  let X=parseInt(temp[1]);
  let Y=parseInt(temp[2]);
  console.log(binToY(N,X,Y));
  // Your code goes here
  // Using console.log to answer the question
}

module.exports = main;
