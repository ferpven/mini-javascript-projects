'use strict';

const moneyMap = {
    'ONE HUNDRED': 100,
    TWENTY: 20,
    TEN: 10,
    FIVE: 5,
    ONE: 1,
    QUARTER: 0.25,
    DIME: 0.1,
    NICKEL: 0.05,
    PENNY: 0.01,
  };

const safelyRoundMoney = (amount) => Math.round(amount * 100) / 100;

function checkCashRegister(price, cash, cid) {
    var change = {status: 'INSUFFICIENT_FUNDS', change: []};
    
    let totalCash = 0;
    for(let i = 0; i < cid.length; i++) {
        totalCash += safelyRoundMoney(cid[i][1]);
    }
    
    let payment = cash - price;
    console.log(`The payment is ${payment} and the total cash is ${totalCash}`);

    if(payment > totalCash) {
        return change;
    } else if(payment === totalCash) {
        change.status = 'CLOSED';
        change.change = cid;
        return change;
    } else if(payment < totalCash) {
        change.status = 'OPEN';
        [...cid].reverse().forEach(([unit, amount]) => {
            const unitValue = moneyMap[unit];
            if (unitValue > payment) {
              return;
            }
        
            let unitsTaken = 0;
        
            while (payment >= unitValue && amount > 0) {
              payment = safelyRoundMoney(payment - unitValue);
              amount = safelyRoundMoney(amount - unitValue);
              unitsTaken++;
            }
        
            change.change.push([unit, unitsTaken * unitValue]);
          });
          if (payment > 0) {
            return {
              status: 'INSUFFICIENT_FUNDS',
              change: [],
            };
          }
        return change;
    }
}
  
//let test = checkCashRegister(3.26, 100, [["PENNY", 1.01], ["NICKEL", 2.05], ["DIME", 3.1], ["QUARTER", 4.25], ["ONE", 90], ["FIVE", 55], ["TEN", 20], ["TWENTY", 60], ["ONE HUNDRED", 100]]);
//console.log(test);

let test2 = checkCashRegister(19.5, 20, [["PENNY", 0.01], ["NICKEL", 0], ["DIME", 0], ["QUARTER", 0], ["ONE", 1], ["FIVE", 0], ["TEN", 0], ["TWENTY", 0], ["ONE HUNDRED", 0]]);
console.log(test2);
//should return {status: "INSUFFICIENT_FUNDS", change: []}.

//let test3 = checkCashRegister(19.5, 20, [["PENNY", 0.5], ["NICKEL", 0], ["DIME", 0], ["QUARTER", 0], ["ONE", 0], ["FIVE", 0], ["TEN", 0], ["TWENTY", 0], ["ONE HUNDRED", 0]]);
//console.log(test3);
//should return {status: "CLOSED", change: [["PENNY", 0.5], ["NICKEL", 0], ["DIME", 0], ["QUARTER", 0], ["ONE", 0], ["FIVE", 0], ["TEN", 0], ["TWENTY", 0], ["ONE HUNDRED", 0]]}.
