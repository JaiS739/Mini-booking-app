// Each ticket will cost 100 Rupees
// If wallet amount is insufficient show alert "Insufficient Balance!";
// Else show "Booking successfull!" and adjust the wallet amount in real time

let storedAmount = JSON.parse(localStorage.getItem("amount"));
let walledTag = document.getElementById("wallet");

walledTag.innerText = storedAmount;



// ---------------------------------------------------

// moviesTickectConfirmation

// let inputSeats = document.getElementById("number_of_seats").value;
// let Balance;



// -------------------------------------------------

let moviesStorage = JSON.parse(localStorage.getItem("movie"));


moviesStorage.map(({ Poster, Title }) => {

    let movieDiv = document.getElementById("movie");

    let div = document.createElement("div");

    let img = document.createElement("img");
    img.src = Poster;

    let h1 = document.createElement("h1");
    h1.innerText = Title;

    div.append(img, h1);
    movieDiv.append(div);
})


let submit = () => {
    let walledTag = document.getElementById("wallet");
    // walledTag.innerText=storedAmount;

    let inputSeats = document.getElementById("number_of_seats").value;

    let ticketCost = inputSeats * 100;


    let nameTag = document.getElementById("user_name").value;

    console.log(nameTag);
    console.log(storedAmount);



    if (ticketCost == 0 || nameTag == "") {

        alert("enter required fields");

    }
    else {
        if (storedAmount >= ticketCost) {

            alert("Booking successful!");
            let Balance = storedAmount - ticketCost;
            localStorage.setItem("amount", JSON.parse(Balance));
            walledTag.innerText = Balance;
            window.location.reload();
        }
        else {
            alert("Insufficient Balance!");
        }
    }

}


