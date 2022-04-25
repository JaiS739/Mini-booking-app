// Store the wallet amount to your local storage with key "amount"

let storedAmount = JSON.parse(localStorage.getItem("amount"))||"";

// -----------------------------------------
// total checking
let inputAmount = document.getElementById("amount").value;
let total = Number(storedAmount) + Number(inputAmount);
    // console.log(total);



console.log(typeof(total));

let walledTag = document.getElementById("wallet");

walledTag.innerText = storedAmount;

let addToWallet = () => {
    let inputAmount = document.getElementById("amount").value;
    
    let total = Number(storedAmount) + Number(inputAmount);
    console.log(total);

    localStorage.setItem("amount", JSON.stringify(total));
    window.location.reload();
}



