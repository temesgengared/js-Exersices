let accountBalance = 1000;

function diposit(depositamount) {
    if (isNaN(diposit) || (diposit <= 0)) {
        return "undefine input";
    }
    accountBalance += depositamount
    console.log(`new balance: ${accountBalance}`);

}
const withdraw = (withdrawamount) => {
    if (isNaN(withdrawamount) || (withdrawamount <= 0)) {
        return "undefine input";

    }
    accountBalance = withdrawamount;
    console.log(`new balance: ${accountBalance}`);
    console.log(`withdraw: ${accountBalance}`);

    function viwebalance = () {
        console.log(`accountBalance: $ { accountBalance }`)
    }

}
diposit(200.00);
withdraw(200.00);
viwebalance();