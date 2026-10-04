const img = document.getElementById("img");
const btn = document.getElementById("btn");
const mName = document.getElementById("mName");
const Description = document.getElementById("Description");
const PrepTime = document.getElementById("PrepTime");
const Servings = document.getElementById("Servings");
const CookTime = document.getElementById("CookTime");


// Ingredients tags
const Ingredients1 = document.getElementById("Ingredients1");
const Ingredients2 = document.getElementById("Ingredients2");
const Ingredients3 = document.getElementById("Ingredients3");
const Ingredients4 = document.getElementById("Ingredients4");
const Ingredients5 = document.getElementById("Ingredients5");
const Ingredients6 = document.getElementById("Ingredients6");
const Ingredients7 = document.getElementById("Ingredients7");

//Instructions tags
const instructions1 = document.getElementById("instructions1");
const instructions2 = document.getElementById("instructions2");
const instructions3 = document.getElementById("instructions3");
const instructions4 = document.getElementById("instructions4");
const instructions5 = document.getElementById("instructions5");
const instructions6 = document.getElementById("instructions6");
const instructions7 = document.getElementById("instructions7");


//Chef Tips
const ChefTips1 = document.getElementById("ChefTips1");
const ChefTips2 = document.getElementById("ChefTips2");
const ChefTips3 = document.getElementById("ChefTips3");
const ChefTips4 = document.getElementById("ChefTips4");


// ["","","","","","",""]
const arrayOfMeals = [
    Tokbokki = {
        mName: "tokbokki",
        Img: "./img/tokbokki.jpg",
        Description: "Tokbokki is a popular Korean street-food dish featuring chewy rice cakes simmered in a glossy, spicy-sweet gochujang sauce",
        PrepTime: "12 minutes",
        Servings: "2-3 people",
        CookTime: "5-10 minutes",
        Ingredients: ["400 g Korean cylindrical rice cakes (tteok)", "150 g Korean fish cakes (eomuk), sliced", "500 ml anchovy-kelp stock or water", "1 tablespoon soy sauce", "1 teaspoon toasted sesame seeds", "1 tablespoon gochugaru (Korean chili flakes)", "2 garlic cloves, minced"],
        Instructions: ["If the rice cakes are refrigerated or frozen, soak them in warm water for about 10 minutes, then drain.", "Add the stock to a large pan and bring it to a gentle boil.", "Stir in the gochujang, gochugaru, soy sauce, sugar, and minced garlic until the sauce is smooth.", "Add the rice cakes and simmer over medium heat for 7–10 minutes, stirring frequently.", "Add the sliced fish cakes and continue cooking for another 3–5 minutes.", "Add the green onions and gently stir until the sauce becomes thick and glossy.", "Taste the sauce and adjust the sweetness or spiciness if necessary."],
        ChefTips: ["Serve while the sauce is still glossy and warm.", "Sprinkle sesame seeds and finely sliced green onions over the top.", "Wipe the edges of the bowl before serving for a clean.", "Arrange the boiled egg halves neatly ."]
    }
    ,
    Sushi = {
        mName: "Sushi",
        Img: "./img/sushi.jpg",
        Description: "Sushi consists of seasoned Japanese rice combined with fresh fish, vegetables, and other fillings and wrapped or shaped into elegant bite-sized pieces.",
        PrepTime: "20 minutes",
        Servings: "3-4 people",
        CookTime: "25-30 minutes",
        Ingredients: ["300 g sushi rice", "4 sheets nori (dried seaweed)", "1 tablespoon sugar", "150 g sushi-grade salmon", "150 g sushi-grade tuna", "1 tablespoon sesame seeds", "1 cucumber"],
        Instructions: ["Rinse the sushi rice several times under cold water until the water becomes mostly clear.", "Cook the rice with the measured water according to the rice cooker's instructions.", "Mix the rice vinegar, sugar, and salt until dissolved.", "Transfer the cooked rice to a wide bowl and gently fold in the vinegar mixture while the rice is warm.", "Allow the seasoned rice to cool to room temperature.", "Slice the salmon, tuna, cucumber, and avocado into thin, even strips.", "Place a sheet of nori on a bamboo sushi mat and spread a thin, even layer of rice over it."],
        ChefTips: ["Do not overfill the roll because it can make the slices uneven.", "Wipe and lightly moisten the knife between cuts for clean slices.", "Spread the rice thinly and evenly for a professional appearance.", "Finish with a very light brushing of sesame oil."]
    }
    ,
    Ramen = {
        mName: "Ramen",
        Img: "./img/ramen.jpg",
        Description: "Ramen is a comforting Japanese noodle soup made with flavorful broth, springy noodles, and a variety of savory toppings.",
        PrepTime: "5 minutes",
        Servings: "1-2 people",
        CookTime: "10-15 minutes",
        Ingredients: ["1 teaspoon grated fresh ginger", "150 g cooked chicken or sliced pork", "2 sheets nori, cut into smaller pieces", "1 tablespoon miso paste", "1 liter chicken or vegetable broth", "2 portions ramen noodles", "100 g mushrooms, sliced"],
        Instructions: ["Bring a pot of water to a boil and cook the eggs for approximately 6–7 minutes for soft centers.", "Transfer the eggs to ice water, cool them, peel them, and cut them in half.", "Heat the broth in a large saucepan over medium heat.", "Add the soy sauce, miso paste, sesame oil, garlic, and ginger, then stir until well combined.", "Add the mushrooms and simmer the broth for approximately 5 minutes.", "Add the spinach or bok choy and cook until just tender.", "Cook the ramen noodles separately according to the package instructions."],
        ChefTips: ["Place the egg halves with the yolks facing upward.", "Arrange the meat in overlapping slices along one side of the bowl.", "Keep the green onions concentrated in a small area for a clean garnish.", "Position the nori upright or slightly tucked into the noodles."]
    }
    ,
    Kimbab = {
        mName: "Kimbab",
        Img: "./img/kimbab.jpg",
        Description: "Kimbab is a Korean seaweed rice roll filled with colorful vegetables, egg, and savory ingredients before being sliced into attractive bite-sized pieces.",
        PrepTime: "3 minutes",
        Servings: "4-5 people",
        CookTime: "5-10 minutes",
        Ingredients: ["3 sheets roasted dried seaweed (gim)", "300 g cooked short-grain white rice", "1 tablespoon sesame oil", "1 teaspoon salt", "1 teaspoon sesame seeds", "100 g pickled yellow radish (danmuji)", "1 cucumber"],
        Instructions: ["Season the warm cooked rice with sesame oil, salt, and sesame seeds, then allow it to cool slightly.", "Beat the eggs with a small pinch of salt.", "Heat a lightly oiled pan and cook the eggs into a thin omelet.", "Slice the omelet into long, thin strips.", "Cut the carrot, cucumber, pickled radish, and cooked beef or ham into long strips.", "Lightly sauté the carrot until slightly tender.", "Blanch the spinach briefly, drain it well, and season lightly with sesame oil and salt."],
        ChefTips: ["Continue rolling until the entire cylinder is sealed.", "Brush the outside lightly with sesame oil if desired.", "Use a sharp, lightly dampened knife to cut the roll into even slices.", "Lightly sauté the carrot until slightly tender."]
    }
];


function chooseRandomNumber() {
    const unUsed = [0, 1, 2, 3];
    const used = [];
}


function displayNextMeal() {
    var randomNumber = Math.floor(Math.random() * 4);
    var meal = arrayOfMeals[randomNumber];

    img.setAttribute("src", `${meal.Img}`);
    mName.innerHTML = meal.mName;
    Description.innerHTML = meal.Description;
    PrepTime.innerHTML = meal.PrepTime;
    Servings.innerHTML = meal.Servings;
    CookTime.innerHTML = meal.CookTime;

    Ingredients1.innerHTML = meal.Ingredients[0];
    Ingredients2.innerHTML = meal.Ingredients[1];
    Ingredients3.innerHTML = meal.Ingredients[2];
    Ingredients4.innerHTML = meal.Ingredients[3];
    Ingredients5.innerHTML = meal.Ingredients[4];
    Ingredients6.innerHTML = meal.Ingredients[5];
    Ingredients7.innerHTML = meal.Ingredients[6];

    instructions1.innerHTML = meal.Instructions[0];
    instructions2.innerHTML = meal.Instructions[1];
    instructions3.innerHTML = meal.Instructions[2];
    instructions4.innerHTML = meal.Instructions[3];
    instructions5.innerHTML = meal.Instructions[4];
    instructions6.innerHTML = meal.Instructions[5];
    instructions7.innerHTML = meal.Instructions[6];

    ChefTips1.innerHTML = meal.ChefTips[0];
    ChefTips2.innerHTML = meal.ChefTips[1];
    ChefTips3.innerHTML = meal.ChefTips[2];
    ChefTips4.innerHTML = meal.ChefTips[3];
    ChefTips5.innerHTML = meal.ChefTips[4];
    ChefTips6.innerHTML = meal.ChefTips[5];
    ChefTips7.innerHTML = meal.ChefTips[6];


};

btn.addEventListener("click", displayNextMeal);












