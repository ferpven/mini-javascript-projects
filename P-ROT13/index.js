'use strict';
// (x + 13) % 26 = ROT13
const alp = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';

console.log('Rot13 Decoder with For Statements');

function rot13(str) {
    let newArr = str.split('');
    let finalArr = [];
    for(let i = 0; i < newArr.length; i++) {
        if(alp.indexOf(newArr[i]) >= 0) {
            //console.log(`The ${i} character is ${newArr[i]}`);
            //console.log(`${newArr[i]} is at the ${alp.indexOf(newArr[i])} - ROT13 is ${alp.charAt((alp.indexOf(newArr[i]) + 13) % 26)}`);
            finalArr.push(alp.charAt((alp.indexOf(newArr[i]) + 13) % 26));
        } else {
            //console.log(`FAILED AT ${i} THE CHARACTER IS ${newArr[i]}`);
            finalArr.push(newArr[i]);
        }
    }
    console.log(`'${newArr.join('')}' decoded '${finalArr.join('')}'`);
    return finalArr.join('');
}

rot13("GUR DHVPX OEBJA SBK WHZCF BIRE GUR YNML QBT.");
rot13("SERR PBQR PNZC");
rot13("SERR CVMMN!");
rot13("SERR YBIR?"); 

console.log('Rot13 Decoder with ForEach Method');

function rot13ForEach(str) {
    let finalArr = [];
    str.split('').forEach(element => {
        if(alp.indexOf(element) >= 0) {
            finalArr.push(alp.charAt((alp.indexOf(element) + 13) % 26));
        } else {
            finalArr.push(element);
        }
    });
    console.log(finalArr.join(''));
    return finalArr.join('');
}

rot13ForEach("GUR DHVPX OEBJA SBK WHZCF BIRE GUR YNML QBT.");
rot13ForEach("SERR PBQR PNZC");
rot13ForEach("SERR CVMMN!");
rot13ForEach("SERR YBIR?"); 

console.log('Rot13 Decoder with Map Method');

function rot13Map(str) {return str.split('').map(element => {if(alp.indexOf(element) >= 0) {return alp.charAt((alp.indexOf(element) + 13) % 26);} else {return element;}}).join('');}

console.log(rot13Map("GUR DHVPX OEBJA SBK WHZCF BIRE GUR YNML QBT."));
console.log(rot13Map("SERR PBQR PNZC"));
console.log(rot13Map("SERR CVMMN!"));
console.log(rot13Map("SERR YBIR?")); 
