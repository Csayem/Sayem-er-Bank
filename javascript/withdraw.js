/* 
1. add event handler with the withdraw button
2. get the withdraw amount from the withdraw input field
2-5. also make sure to convert the input into a number by using parseFloat

3. Get previous withdraw total

4. calculate total withdraw amount 
4-5. set total withdraw amount

5. get the previous balance total
6. calculate new balance total
6-5: set the new balance total

7. clear the input field
*/

// step-1
document.getElementById('btn-withdraw').addEventListener('click', function () {
    // step-2:
    const withdrawField = document.getElementById('withdraw-field');
    const newWithDrawAmountString = withdrawField.value;
    const newWithdrawAmount = parseFloat(newWithDrawAmountString);
    
    withdrawField.value = ''

    if(isNaN(newWithdrawAmount)){
        alert('please provide a valid number')
        return;
    }
    const withdrawTotalElement = document.getElementById('withdraw-total');
    const previousWithdrawTotalstring = withdrawTotalElement.innerText;
    const previousWithdrawTotal = parseFloat(previousWithdrawTotalstring);
 

    const balanceTotalElement = document.getElementById('balance-total');
    const previousTotalBalanceString = balanceTotalElement.innerText;
    const previousTotalBalance = parseFloat(previousTotalBalanceString);

    if(newWithdrawAmount > previousTotalBalance){
        alert('baap er bank a ato tk nai')
        return;
    }
    const currentWithdrawTotal = previousWithdrawTotal + newWithdrawAmount;
    withdrawTotalElement.innerText = currentWithdrawTotal;

    const newBalanceTotal  = previousTotalBalance - newWithdrawAmount;
    balanceTotalElement.innerText = newBalanceTotal;    







})