'use strict';

function binaryAgent(str) {
    let sum = 0;
    let decimals = [];
    let arr = str.split(' ');
    let decimalArr = [];


    for(let i = 0; i < arr.length; i++) {
        let nmr = arr[i];
        for(let j = 0; j < 8; j++) {
            sum = (sum * 2) + Number.parseInt(nmr[j]);
        }
        decimals.push(sum);
        sum = 0;
    }
    //console.log(decimals);
    //console.log(decimals.join(''));
    for(let i = 0; i < decimals.length; i++) {
        decimalArr[i] = String.fromCharCode(decimals[i]);
    }
    let returnStr = decimalArr.join('');
    console.log(returnStr);
    return returnStr;
  }
  
  binaryAgent("01000001 01110010 01100101 01101110 00100111 01110100 00100000 01100010 01101111 01101110 01100110 01101001 01110010 01100101 01110011 00100000 01100110 01110101 01101110 00100001 00111111");