let wrapper = document.querySelector("#wrapper"); 
let button = document.getElementById("submit");
let textInput = ""; // empty string so we can call it later
let baseUrl = "https://proxy.calweb.xyz/http://www.recipepuppy.com/api/" // assigned to a variable so we an easily access it later
let container = document.getElementById("container");

// write function to concatenate input text to baseUrl, this function should contain a fetch

button.addEventListener("click", function (concatInnerHTML){ // creating listener that performs concatInnerHTML function on click
    textInput = document.getElementById('search').value; // this takes the text in the search bar and looks at the value in it
    console.log(textInput); // this is a console log to check that the value in the search bar is being logged in the console


    fetch(baseUrl + "?q=" + textInput)
    .then(function(response){
        // console.log(response.status); <---- this is to check that you get a 200 back and confirm everything is coming back from the server
        response.json()  // this takes the data that was fetched and converts to js (json)
        .then(function(data){   //this says, we take what we returned and are passing another function in called data (contains all of our results)
            let recipes = data.results; // this says, take that data and go into the reults object
            console.log(recipes); // this is a console log to check that the results objects are being logged
            console.log(recipes.length); // this logs the length to make sure you return the same amount (10 in this case)

            // i should have my for loop here to look over the data in recipes
            for (i = 0; i < recipes.length; i++){
                let recipe = recipes[i];
                function recipePage(recipe){
                    let html =`
                        <div>
                            <div class = "images" style = "background-image: url(${recipe.thumbnail})"></div>
                            <ul>
                                <li>${recipe.title}</li>
                                <li>${recipe.ingredients}</li>
                                <li>${recipe.href}</li>
                            </ul>
                        </div>
                    `;
                    return html;
                }
                    // console.log(recipePage);
                let addingRecipes = recipePage(recipe); // make new variable that takes the recipePage function and passes the data as the parameter
                container.innerHTML += addingRecipes; 
            }

    })

})
})







