//step 1 deposit amount value get
document.getElementById("deposit-button").addEventListener("click",function(){
const depositFeild = document.getElementById("deposit-feild");
const newDepositAmountString = depositFeild.value ; //this value is as a string
const newDepositAmount = parseFloat(newDepositAmountString);    //covert the string in a number


//step-2 set deposit value in the top innerText 
const totalOfDepositFeild = document.querySelector("#total-deposit");   // select id
const previousDepositString = totalOfDepositFeild.innerText;  //get innerText
const previousDeposit = parseFloat(previousDepositString);  //covert the string in a number
totalOfDepositFeild.innerText = newDepositAmount ;      //asign the feild as a innerText


//step-3 sum of the previousDeposit and newDeposit
const currentDeposit = newDepositAmount + previousDeposit;  
totalOfDepositFeild.innerText = currentDeposit; //asign the as a sum


//step-4 set the value to balanceFeild
const balanceFeild = document.querySelector("#balance-feild");
const mainBalanceString = balanceFeild.innerText ;
const mainBalance = parseFloat(mainBalanceString);  //get the balance value


//step-5 balance feild update with deposit update
const mainBalanceWithDeposit = mainBalance + newDepositAmount;
balanceFeild.innerText = mainBalanceWithDeposit;


//step-last deposit feild clear
depositFeild.value = '';


})

/* ----------------withdraw------------------- */

//step-1 get withdraw-button
document.querySelector("#Withdraw-button").addEventListener("click", function (){
const withdrawFeild = document.querySelector("#withdraw-feild") ;
const newWithdrawAmountString = withdrawFeild.value;
const newWithdrawAmount = parseFloat(newWithdrawAmountString)

    
//step-2 add withdraw into totalWithdraw
const totalOfWithsdrawFeild =  document.querySelector("#total-withrawd");
const totalOfWithsdrawString = totalOfWithsdrawFeild.innerText;
const totalOfWithsdraw = parseFloat(totalOfWithsdrawString);


//step-last clear of input feild
withdrawFeild.value ='';


//step-3 set the value to balanceFeild
const balanceFeild = document.querySelector("#balance-feild");
const mainBalanceString = balanceFeild.innerText ;
const mainBalance = parseFloat(mainBalanceString);  //get the balance value


if(newWithdrawAmount > mainBalance){
    alert('Tor baaper bank a atho tk nai!!')
    return;
}

//step-2.1 add ..
const totalWithdraw = newWithdrawAmount + totalOfWithsdraw ;
totalOfWithsdrawFeild.innerText = totalWithdraw ;


//step-4 balance feild update with deposit update
const mainBalanceWithWithdraw = mainBalance - newWithdrawAmount ;
balanceFeild.innerText = mainBalanceWithWithdraw ;

    });