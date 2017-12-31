// TASK 1: THE RECIPE CARD

//Create object to hold information on the recipe
function Recipe(title, servings, ingredients) {
    this.title = title;
    this.servings = servings;
    this.ingredients = ingredients;
}

let submit1 = document.getElementById('submitBtn1');

//Add event listener to the submit button under the form
submit1.addEventListener('click', function (e) {

    //Create the variables to hold the information from the form's input fields
    let recipeTitle = '',
        recipeServings = 0;
        recipeIngredients = [];

    //Assign the values from the form's input fields to the variables
    recipeTitle = document.getElementById('name-of-dish').value.trim();
    recipeServings = document.getElementById('servings').value.trim();
    recipeIngredients = document.getElementById('ingredients').value.trim().split(',');

    //Create a new instance of the Recipe object with the values from the form
    let recipe = new Recipe(recipeTitle, recipeServings, recipeIngredients);

    //Save the HTML elements from the recipe card into variables
    let recipeTitleCard = document.getElementById('recipe-title-card');
    let recipeServingsCard = document.getElementById('recipe-servings-card');
    let recipeIngredientsCard = document.getElementById('recipe-ingredients-card');

    //Create function which will display the info from the form, in the recipe card, it takes one parameter
    function recipeCard(recipe) {

        //Conditions to be fulfilled - no null values, etc.
        if (recipe.title !== '' && recipe.servings !== 0 && !isNaN(recipe.servings) && recipe.ingredients.length !== 0) {
            //Erase the text previously displayed in the recipe card
            recipeTitleCard.innerHTML = '';
            recipeServingsCard.innerHTML = '';
            recipeIngredientsCard.innerHTML = '';

            //Display the information for the new recipe in the recipe card
            recipeTitleCard.innerHTML = recipe.title;
            recipeServingsCard.innerHTML = recipe.servings;

            //for cycle to iterate through ingredients array and display the ingredients in a list with a separate list item for each ingredient
            for (let i = 0; i < recipe.ingredients.length; i++) {
                recipeIngredientsCard.innerHTML += `<li>${recipe.ingredients[i]}</li>`;
            }
        } else {
            alert('Please enter valid values for the required information.');
        }
    }

    //Call the recipeCard function with the new Recipe object passed to the function as an argument
    recipeCard(recipe);
});


//TASK 2: THE READING LIST

//Create an object to hold the information on the book
function Book(title, author, alreadyRead) {
    this.title = title;
    this.author = author;
    this.alreadyRead = alreadyRead;
}

let books = [];

let submit2 = document.getElementById('submitBtn2');

//Add event listener to the submit button under the form
submit2.addEventListener('click', function (e) {

    //Create the variables to hold the information from the form's input fields
    let bookTitle = '',
        bookAuthor = '',
        alreadyRead = true;

    //Assign the values from the form's input fields to variables
    bookTitle = document.getElementById('book-title').value.trim();
    bookAuthor = document.getElementById('book-author').value.trim();
    alreadyRead = document.getElementById('read').checked;

    //Create a new instance of the Book object with the values from the form
    let book = new Book(bookTitle, bookAuthor, alreadyRead);

    //Conditions to be fulfilled - no null values, etc.
    if (book.title !== '' && book.author !== '' && (alreadyRead || !alreadyRead)) {
        books.push(book);
    } else {
        alert('Please enter valid values for the required information.');
    }

    //Save the HTML elements from the reading list card into variables
    let readListCard = document.getElementById('reading-list-card-read');
    let notReadListCard = document.getElementById('reading-list-card-not-read');

    //Erase the text previously displayed in the reading list card
    readListCard.innerHTML = '';
    notReadListCard.innerHTML = '';

    //for cycle to iterate through the books array and display the books in two lists of read and unred books
    for (let i = 0; i < books.length; i++) {
        if (books[i].alreadyRead) {
            readListCard.innerHTML += `<li>"${books[i].title}" by ${books[i].author}</li>`;
        } else if (!books[i].alreadyRead) {
            notReadListCard.innerHTML += `<li>"${books[i].title}" by ${books[i].author}</li>`;
        }
    }
});


//TASK 3: ORDER COFFEE DRINKS

//Create an object to hold the information on the coffee drink
function Coffee(type, ounces) {
    this.type = type;
    this.ounces = ounces;

    if (ounces == 0.2) {
        this.size = 'small';
    } else if (ounces == 0.4) {
        this.size = 'medium';
    } else if (ounces == 0.6) {
        this.size == 'large';
    }

    //Save the HTML elements from the coffee drink card in a variable
    let coffeeDrinkCard = document.getElementById('coffee-drink-card');

    //Erase the text previously displayed in the coffee drink card
    coffeeDrinkCard.innerHTML = '';

    this.getString = () => {
        coffeeDrinkCard.innerHTML = `You have ordered a ${this.size} <span style="text-transform: capitalize;">${this.type}</span> coffee.<br>Enjoy it!`;
    };
}

let submit3 = document.getElementById('submitBtn3');

//Add event listener to the submit button under the form
submit3.addEventListener('click', function (e) {

    //Create the variables to hold the information from the form's input fields
    let coffeeType = '',
        coffeeOunces = 0;

    //Assign the values from the form's input fields to variables
    coffeeType = document.getElementById('coffee-type').value.trim();
    coffeeOunces = document.getElementById('coffee-size').value.trim();

    //Create a new instance of the Coffee object with the values from the form
    let coffee = new Coffee(coffeeType, coffeeOunces);

    //Conditions to be fulfilled - no null values, etc.
    if (coffeeType !== '' && coffeeOunces !== '' && !isNaN(coffeeOunces)) {
        coffee.getString();
    } else {
        alert('Please enter valid values for the required information.');
    }
});