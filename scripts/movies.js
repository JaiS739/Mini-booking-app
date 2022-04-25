// Implement debouncing for network request
// On clicking book now store the selected movie in localstorage as key "movie"
// so that you can retrive it on checkout.html page

let storedAmount = JSON.parse(localStorage.getItem("amount"));
let walledTag = document.getElementById("wallet"); 

    walledTag.innerText=storedAmount;


let id;

let searchMovies= async ()=>{
    let query = document.getElementById("search").value;
    // http://www.omdbapi.com/?apikey=f938c965&s=${query}

    let url = `https://www.omdbapi.com/?apikey=f938c965&s=${query}`;

    let res = await fetch(url);
    let data = await res.json();
    
    let movies = data.Search;
    console.log(movies);
    // appendMovies(movies);
    return movies;
}


let appendMovies = (data)=>{

    let moviesDiv = document.getElementById("movies");
    moviesDiv.innerHTML=null;

    data.map(({Poster,Title})=>{
        let div = document.createElement("div");

        let img = document.createElement("img");
        img.src=Poster;

        let h1 = document.createElement("h1");
        h1.innerText=Title;

        let btn = document.createElement("button");
        btn.innerText = "Book Now";
        btn.className="book_now";

        btn.addEventListener("click",()=>{
            let obj = {
                Poster,
                Title
            }
            addToCheckout(obj);
        })

        div.append(img,h1,btn);

        moviesDiv.append(div);
    })
}


let main =async ()=>{
    let data = await searchMovies();

    if(data ==undefined){
        return false;
    }

    appendMovies(data);
}

let debounce = (func,delay)=>{
    if(id){
        clearTimeout(id);
    }

    id = setTimeout(()=>{
        func();
    },delay);
}


let addToCheckout=(obj)=>{
    let arr = [];
    arr.push(obj)
    localStorage.setItem("movie",JSON.stringify(arr));
    window.location.href="checkout.html";
}