var imageEle = document.getElementById('image');
var ratingNumberEle = document.getElementById('ratingnumber');
var reviewsNumberEle = document.getElementById('reviewsnumber');
var prepTimeEle = document.getElementById('prep-time');
var cockTieEle = document.getElementById('cook-time');
var servingsEle = document.getElementById('servings');
var levelEle = document.getElementById('level');
var categoryEle = document.getElementById('category');
var titleEle = document.getElementById('title');
var descriptionEle = document.getElementById('description');
var alertEle = document.getElementById('preparationalert');
var ingredientlistEle = document.getElementById('ingredientlist');
var instructionlistEle = document.getElementById('instructionlist');
var tipslistEle = document.getElementById('tipslist');
var caloriesEle = document.getElementById('calories-value');
var protienEle = document.getElementById('Protien-value');
var carbohydrateEle = document.getElementById('Carbohydrate-value');
var FatEle = document.getElementById('Fat-value');
var FiberEle = document.getElementById('Fiber-value');
var SodiumEle = document.getElementById('Sodium-value');


var recipesList = [
    {
        rate: 4.9,
        reviews: 512,
        imageUrl: './images/imgi_2_photo-1529692236671-f1f6cf9683ba.jfif',
        prepTime: 15,
        cookTime: 25,
        servings: 4,
        level: "Intermediate",
        category: "Asian",
        title: "Thai Green Curry",
        description: "Vibrant and aromatic curry with vegetables and coconut milk",
        ingredients: [
            "2 tablespoons green curry paste",
            "400ml coconut milk",
            "300g chicken breast, sliced",
            "1 red bell pepper, sliced",
            "100g green beans",
            "1 eggplant, cubed",
            "2 tablespoons fish sauce",
            "1 tablespoon palm sugar",
            "Fresh Thai basil leaves"
        ],
        instructions: [
            "Heat a large pot or wok over medium heat. Add curry paste and cook for 1 minute until fragrant.",
            "Add half the coconut milk and stir to combine with the curry paste.",
            "Add sliced chicken and cook until no longer pink, about 5 minutes.",
            "Add remaining coconut milk, vegetables, fish sauce, and palm sugar.",
            "Simmer for 15-20 minutes until vegetables are tender and sauce has thickened.",
            "Stir in fresh Thai basil leaves. Serve hot with jasmine rice."
        ],
        calories: 420,
        proties: 26,
        carb: 22,
        fat: 26,
        fiber: 5,
        sodium: 890,
        tips: [
            "Adjust spice level by using more or less curry paste",
            "Add vegetables in stages based on cooking time needed",
            "Fresh Thai basil is essential for authentic flavor",
            "Use full-fat coconut milk for richest, creamiest sauce"
        ]
    },
    {
        rate: 4.7,
        reviews: 328,
        imageUrl: './images/imgi_2_photo-1546069901-ba9599a7e63c.png',
        prepTime: 10,
        cookTime: 20,
        servings: 6,
        level: "Easy",
        category: "Italian",
        title: "Classic Spaghetti Carbonara",
        description: "Creamy Roman pasta with eggs, cheese, and crispy pancetta",
        ingredients: [
            "400g spaghetti",
            "200g pancetta, diced",
            "4 large eggs",
            "100g Pecorino Romano cheese, grated",
            "50g Parmesan cheese, grated",
            "Black pepper to taste",
            "Salt for pasta water"
        ],
        instructions: [
            "Bring a large pot of salted water to boil and cook spaghetti according to package directions.",
            "While pasta cooks, fry pancetta in a large pan until crispy, about 5-7 minutes.",
            "In a bowl, whisk together eggs, Pecorino, Parmesan, and plenty of black pepper.",
            "Reserve 1 cup pasta water, then drain spaghetti.",
            "Remove pan from heat, add hot pasta to pancetta and toss.",
            "Quickly add egg mixture, tossing constantly and adding pasta water as needed to create a creamy sauce.",
            "Serve immediately with extra cheese and black pepper."
        ],
        calories: 520,
        proties: 24,
        carb: 58,
        fat: 20,
        fiber: 3,
        sodium: 680,
        tips: [
            "Remove pan from heat before adding eggs to prevent scrambling",
            "Use freshly grated cheese for best results",
            "Pasta water is key to creating the perfect creamy texture",
            "Serve immediately as carbonara doesn't reheat well"
        ]
    },
    {
        rate: 4.8,
        reviews: 891,
        imageUrl: './images/imgi_2_photo-1546069901-eacef0df6022.png',
        prepTime: 20,
        cookTime: 15,
        servings: 4,
        level: "Easy",
        category: "Mexican",
        title: "Street-Style Fish Tacos",
        description: "Crispy battered fish with cabbage slaw and creamy sauce",
        ingredients: [
            "500g white fish fillets",
            "1 cup all-purpose flour",
            "1 teaspoon baking powder",
            "1 cup beer",
            "2 cups shredded cabbage",
            "1/2 cup mayonnaise",
            "2 tablespoons lime juice",
            "1 teaspoon chipotle powder",
            "8 corn tortillas",
            "Fresh cilantro and lime wedges"
        ],
        instructions: [
            "Mix flour, baking powder, and beer to create a smooth batter.",
            "Cut fish into strips and season with salt and pepper.",
            "Heat oil in a deep pan to 180°C (350°F).",
            "Mix cabbage, mayonnaise, lime juice, and chipotle powder for the slaw.",
            "Dip fish strips in batter and fry until golden brown, about 3-4 minutes.",
            "Warm tortillas and fill with fish, slaw, cilantro, and a squeeze of lime."
        ],
        calories: 385,
        proties: 28,
        carb: 38,
        fat: 14,
        fiber: 4,
        sodium: 520,
        tips: [
            "Use very cold beer for the crispiest batter",
            "Don't overcrowd the pan when frying",
            "Warm tortillas on an open flame for authentic flavor",
            "Add your favorite hot sauce for extra kick"
        ]
    },
    {
        rate: 4.6,
        reviews: 445,
        imageUrl: './images/imgi_2_photo-1546793665-c74683f339c1.png',
        prepTime: 25,
        cookTime: 30,
        servings: 4,
        level: "Easy",
        category: "Mediterranean",
        title: "Greek Chicken Bowl",
        description: "Healthy bowl with marinated chicken, fresh vegetables, and tzatziki",
        ingredients: [
            "500g chicken breast",
            "3 tablespoons olive oil",
            "2 tablespoons lemon juice",
            "2 teaspoons dried oregano",
            "2 cups cooked quinoa",
            "1 cucumber, diced",
            "2 tomatoes, diced",
            "100g feta cheese, crumbled",
            "1/2 red onion, sliced",
            "Greek yogurt tzatziki sauce"
        ],
        instructions: [
            "Marinate chicken in olive oil, lemon juice, oregano, salt, and pepper for 15 minutes.",
            "Grill or pan-fry chicken over medium-high heat until cooked through, about 6-7 minutes per side.",
            "Let chicken rest for 5 minutes, then slice.",
            "Prepare quinoa according to package instructions.",
            "Assemble bowls with quinoa as base, topped with cucumber, tomatoes, onion, and feta.",
            "Add sliced chicken and drizzle with tzatziki sauce. Serve with lemon wedges."
        ],
        calories: 465,
        proties: 38,
        carb: 42,
        fat: 16,
        fiber: 7,
        sodium: 580,
        tips: [
            "Marinate chicken overnight for deeper flavor",
            "Make your own tzatziki with Greek yogurt, cucumber, garlic, and dill",
            "Use brown rice or couscous as quinoa alternative",
            "Add kalamata olives for authentic Greek taste"
        ]
    },
    {
        rate: 4.9,
        reviews: 672,
        imageUrl: './images/imgi_2_photo-1559314809-0d155014e29e.png',
        prepTime: 30,
        cookTime: 45,
        servings: 4,
        level: "Advanced",
        category: "Asian",
        title: "Authentic Tonkotsu Ramen",
        description: "Rich pork bone broth with noodles, eggs, and tender chashu",
        ingredients: [
            "2kg pork bones",
            "1 onion, halved",
            "1 head garlic",
            "5cm ginger, sliced",
            "400g fresh ramen noodles",
            "4 soft-boiled eggs",
            "300g pork belly chashu",
            "2 sheets nori seaweed",
            "4 spring onions, sliced",
            "Sesame oil and white pepper"
        ],
        instructions: [
            "Boil pork bones for 5 minutes, drain, and rinse thoroughly.",
            "Return bones to pot with fresh water, onion, garlic, and ginger. Simmer for 4-6 hours.",
            "Strain broth and season with salt and white pepper.",
            "Cook ramen noodles according to package instructions.",
            "Prepare soft-boiled eggs and slice chashu.",
            "Assemble bowls with noodles, hot broth, chashu, eggs, nori, spring onions, and sesame oil."
        ],
        calories: 580,
        proties: 32,
        carb: 54,
        fat: 26,
        fiber: 3,
        sodium: 1240,
        tips: [
            "The longer you simmer the broth, the richer it becomes",
            "Keep broth at a rolling boil for milky white color",
            "Marinate eggs in soy sauce and mirin overnight",
            "Add corn, bamboo shoots, or wood ear mushrooms for variation"
        ]
    },
    {
        rate: 4.5,
        reviews: 234,
        imageUrl: './images/imgi_2_photo-1559314809-0d155014e29e.png',
        prepTime: 20,
        cookTime: 35,
        servings: 6,
        level: "Intermediate",
        category: "Indian",
        title: "Butter Chicken Masala",
        description: "Creamy tomato-based curry with tender tandoori-style chicken",
        ingredients: [
            "700g chicken thighs, cubed",
            "1 cup Greek yogurt",
            "2 tablespoons tandoori masala",
            "400g crushed tomatoes",
            "200ml heavy cream",
            "3 tablespoons butter",
            "1 onion, diced",
            "4 cloves garlic, minced",
            "2cm ginger, grated",
            "1 tablespoon garam masala",
            "Fresh cilantro"
        ],
        instructions: [
            "Marinate chicken in yogurt and tandoori masala for at least 2 hours.",
            "Grill or broil marinated chicken until charred, about 10 minutes.",
            "In a large pan, melt butter and sauté onion, garlic, and ginger until soft.",
            "Add crushed tomatoes and garam masala, simmer for 15 minutes.",
            "Blend sauce until smooth, return to pan and add cream.",
            "Add grilled chicken and simmer for 10 minutes. Garnish with cilantro and serve with naan."
        ],
        calories: 495,
        proties: 34,
        carb: 18,
        fat: 32,
        fiber: 3,
        sodium: 720,
        tips: [
            "Marinate chicken overnight for maximum flavor",
            "Use kasuri methi (dried fenugreek) for authentic taste",
            "Adjust cream amount for desired richness",
            "Serve with basmati rice or garlic naan"
        ]
    },
    {
        rate: 4.7,
        reviews: 556,
        imageUrl: './images/imgi_2_photo-1455619452474-d2be8b1e70cd.png',
        prepTime: 15,
        cookTime: 10,
        servings: 4,
        level: "Easy",
        category: "American",
        title: "Classic Cheeseburger",
        description: "Juicy beef patty with melted cheese and all the fixings",
        ingredients: [
            "600g ground beef (80/20)",
            "4 burger buns",
            "4 slices cheddar cheese",
            "4 lettuce leaves",
            "1 tomato, sliced",
            "1 onion, sliced",
            "Pickles",
            "Ketchup, mustard, and mayonnaise",
            "Salt and pepper"
        ],
        instructions: [
            "Divide beef into 4 equal portions and form into patties slightly larger than buns.",
            "Season both sides generously with salt and pepper.",
            "Heat a cast iron skillet or grill to high heat.",
            "Cook patties for 3-4 minutes per side for medium doneness.",
            "Add cheese during last minute and cover to melt.",
            "Toast buns, then assemble with condiments, lettuce, tomato, onion, patty, and pickles."
        ],
        calories: 620,
        proties: 36,
        carb: 42,
        fat: 34,
        fiber: 3,
        sodium: 980,
        tips: [
            "Don't press down on patties while cooking",
            "Make a small indent in center of patty to prevent puffing",
            "Let burgers rest for 2 minutes after cooking",
            "Toast buns with butter for extra flavor"
        ]
    },
    {
        rate: 4.8,
        reviews: 723,
        imageUrl: './images/imgi_2_photo-1467003909585-2f8a72700288.png',
        prepTime: 20,
        cookTime: 40,
        servings: 8,
        level: "Intermediate",
        category: "French",
        title: "Quiche Lorraine",
        description: "Classic French tart with bacon, eggs, and cream",
        ingredients: [
            "1 pie crust (store-bought or homemade)",
            "200g bacon, diced",
            "1 onion, diced",
            "4 large eggs",
            "300ml heavy cream",
            "100g Gruyere cheese, grated",
            "Nutmeg, salt, and pepper",
            "Fresh chives"
        ],
        instructions: [
            "Preheat oven to 190°C (375°F). Place pie crust in a 9-inch tart pan.",
            "Cook bacon until crispy, remove and drain. In same pan, sauté onion until soft.",
            "In a bowl, whisk together eggs, cream, nutmeg, salt, and pepper.",
            "Spread bacon, onion, and half the cheese over the crust.",
            "Pour egg mixture over filling and top with remaining cheese.",
            "Bake for 35-40 minutes until golden and set. Let cool for 10 minutes before slicing."
        ],
        calories: 420,
        proties: 16,
        carb: 24,
        fat: 30,
        fiber: 1,
        sodium: 620,
        tips: [
            "Blind bake the crust for 10 minutes to prevent sogginess",
            "Use full-fat cream for richest texture",
            "Add spinach or mushrooms for variation",
            "Serve warm or at room temperature"
        ]
    },
    {
        rate: 4.6,
        reviews: 412,
        imageUrl: './images/imgi_2_photo-1509722747041-616f39b57569.jfif',
        prepTime: 30,
        cookTime: 20,
        servings: 4,
        level: "Intermediate",
        category: "Asian",
        title: "Korean Bibimbap Bowl",
        description: "Colorful rice bowl with seasoned vegetables, beef, and fried egg",
        ingredients: [
            "3 cups cooked white rice",
            "300g beef sirloin, thinly sliced",
            "2 tablespoons soy sauce",
            "1 tablespoon sesame oil",
            "200g spinach",
            "2 carrots, julienned",
            "200g bean sprouts",
            "4 eggs",
            "Gochujang (Korean chili paste)",
            "Sesame seeds"
        ],
        instructions: [
            "Marinate beef in soy sauce and half the sesame oil for 15 minutes.",
            "Blanch spinach, squeeze dry, and season with remaining sesame oil and salt.",
            "Sauté carrots until tender. Blanch bean sprouts briefly.",
            "Cook beef in a hot pan until browned, about 3-4 minutes.",
            "Fry eggs sunny-side up.",
            "Divide rice into bowls, arrange vegetables and beef in sections. Top with egg, gochujang, and sesame seeds."
        ],
        calories: 520,
        proties: 28,
        carb: 64,
        fat: 16,
        fiber: 5,
        sodium: 840,
        tips: [
            "Use a stone bowl (dolsot) for crispy rice bottom",
            "Arrange ingredients by color for visual appeal",
            "Mix everything together before eating",
            "Add kimchi for extra flavor and probiotics"
        ]
    },
    {
        rate: 4.9,
        reviews: 834,
        imageUrl: './images/imgi_2_photo-1565557623262-b51c2513a641.png',
        prepTime: 25,
        cookTime: 35,
        servings: 6,
        level: "Advanced",
        category: "Spanish",
        title: "Seafood Paella",
        description: "Traditional Spanish rice dish with saffron, seafood, and vegetables",
        ingredients: [
            "400g paella rice",
            "300g mixed seafood (shrimp, mussels, squid)",
            "1 liter fish stock",
            "Pinch of saffron threads",
            "1 onion, diced",
            "1 red bell pepper, sliced",
            "3 cloves garlic, minced",
            "200g tomatoes, diced",
            "100g peas",
            "Olive oil, paprika, lemon wedges"
        ],
        instructions: [
            "Steep saffron in warm fish stock for 10 minutes.",
            "Heat olive oil in a large paella pan. Sauté seafood briefly, remove and set aside.",
            "In same pan, cook onion, pepper, and garlic until soft.",
            "Add rice, paprika, and tomatoes. Stir for 2 minutes.",
            "Add saffron stock and bring to boil. Reduce heat and simmer without stirring for 20 minutes.",
            "Add seafood and peas in final 5 minutes. Let rest off heat for 5 minutes before serving with lemon."
        ],
        calories: 445,
        proties: 26,
        carb: 58,
        fat: 12,
        fiber: 4,
        sodium: 920,
        tips: [
            "Never stir paella after adding stock",
            "Look for socarrat - crispy rice bottom layer",
            "Use bomba or calasparra rice for best results",
            "Paella should be slightly al dente"
        ]
    },
    {
        rate: 4.4,
        reviews: 289,
        imageUrl: './images/imgi_2_photo-1568901346375-23c9450c58cd.png',
        prepTime: 20,
        cookTime: 15,
        servings: 4,
        level: "Easy",
        category: "Middle Eastern",
        title: "Crispy Falafel Wraps",
        description: "Herb-packed chickpea fritters with tahini sauce and fresh vegetables",
        ingredients: [
            "400g canned chickpeas, drained",
            "1 onion, quartered",
            "3 cloves garlic",
            "1 cup fresh parsley",
            "1/2 cup fresh cilantro",
            "1 teaspoon cumin",
            "1 teaspoon coriander",
            "3 tablespoons flour",
            "4 pita breads",
            "Tahini sauce, tomatoes, cucumber, lettuce"
        ],
        instructions: [
            "In food processor, pulse chickpeas, onion, garlic, herbs, cumin, and coriander until coarse.",
            "Transfer to bowl, mix in flour, salt, and pepper. Refrigerate for 30 minutes.",
            "Form mixture into small balls or patties.",
            "Heat oil to 180°C (350°F) and fry falafel until golden brown, about 3-4 minutes.",
            "Drain on paper towels.",
            "Warm pita bread and fill with falafel, vegetables, and tahini sauce."
        ],
        calories: 380,
        proties: 14,
        carb: 52,
        fat: 14,
        fiber: 10,
        sodium: 640,
        tips: [
            "Use dried chickpeas soaked overnight for best texture",
            "Don't over-process - mixture should be coarse, not smooth",
            "Add baking powder for fluffier falafel",
            "Can be baked at 200°C instead of fried"
        ]
    },
    {
        rate: 4.7,
        reviews: 591,
        imageUrl: './images/imgi_2_photo-1574071318508-1cdbab80d002.png',
        prepTime: 15,
        cookTime: 10,
        servings: 4,
        level: "Easy",
        category: "Asian",
        title: "Mongolian Beef Stir-Fry",
        description: "Sweet and savory beef with green onions in dark sauce",
        ingredients: [
            "500g flank steak, thinly sliced",
            "4 tablespoons soy sauce",
            "3 tablespoons brown sugar",
            "2 tablespoons hoisin sauce",
            "1 tablespoon cornstarch",
            "1 tablespoon vegetable oil",
            "4 cloves garlic, minced",
            "1 teaspoon ginger, minced",
            "6 green onions, cut into 2-inch pieces",
            "Sesame seeds for garnish"
        ],
        instructions: [
            "Toss beef slices with cornstarch until evenly coated.",
            "Mix soy sauce, brown sugar, and hoisin sauce in a bowl.",
            "Heat oil in a wok or large skillet over high heat.",
            "Stir-fry beef in batches until browned, about 2 minutes per batch. Remove and set aside.",
            "Add garlic and ginger to pan, cook for 30 seconds.",
            "Return beef to pan, add sauce and green onions. Toss for 2 minutes. Garnish with sesame seeds and serve over rice."
        ],
        calories: 395,
        proties: 32,
        carb: 28,
        fat: 18,
        fiber: 2,
        sodium: 1120,
        tips: [
            "Freeze beef for 30 minutes for easier slicing",
            "Cook in small batches to maintain high heat",
            "Use a carbon steel wok for authentic flavor",
            "Add red pepper flakes for spicy version"
        ]
    },
    {
        rate: 4.8,
        reviews: 467,
        imageUrl: './images/imgi_2_photo-1574894709920-11b28e7367e3.jfif',
        prepTime: 20,
        cookTime: 120,
        servings: 8,
        level: "Intermediate",
        category: "Brazilian",
        title: "Feijoada (Brazilian Black Bean Stew)",
        description: "Hearty stew with black beans, pork, and smoky sausages",
        ingredients: [
            "500g black beans, soaked overnight",
            "300g pork shoulder, cubed",
            "200g chorizo sausage, sliced",
            "150g bacon, diced",
            "1 onion, diced",
            "4 cloves garlic, minced",
            "2 bay leaves",
            "1 orange, halved",
            "Salt and pepper",
            "Fresh cilantro and lime wedges"
        ],
        instructions: [
            "Drain and rinse soaked beans. Place in large pot with fresh water and bay leaves.",
            "In a separate pan, brown bacon until crispy. Add pork and chorizo, cook until browned.",
            "Add onion and garlic to meat, cook until soft.",
            "Transfer meat mixture to beans. Add orange halves.",
            "Simmer for 2 hours, stirring occasionally and adding water as needed.",
            "Remove orange halves. Season with salt and pepper. Serve with rice, orange slices, and cilantro."
        ],
        calories: 485,
        proties: 34,
        carb: 42,
        fat: 20,
        fiber: 12,
        sodium: 980,
        tips: [
            "Soaking beans overnight reduces cooking time",
            "Add smoked ham hock for extra flavor",
            "Traditional accompaniments include farofa and collard greens",
            "Tastes even better the next day"
        ]
    },
    {
        rate: 4.6,
        reviews: 378,
        imageUrl: './images/imgi_2_photo-1585032226651-759b368d7246.png',
        prepTime: 30,
        cookTime: 180,
        servings: 6,
        level: "Advanced",
        category: "Asian",
        title: "Vietnamese Pho Bo",
        description: "Aromatic beef noodle soup with star anise and fresh herbs",
        ingredients: [
            "1.5kg beef bones",
            "500g beef brisket",
            "1 onion, halved and charred",
            "5cm ginger, charred",
            "4 star anise",
            "1 cinnamon stick",
            "3 tablespoons fish sauce",
            "400g rice noodles",
            "200g beef sirloin, thinly sliced",
            "Bean sprouts, Thai basil, lime, jalapeños"
        ],
        instructions: [
            "Boil bones and brisket for 5 minutes, drain and rinse.",
            "Return to pot with fresh water. Add charred onion, ginger, star anise, and cinnamon.",
            "Simmer for 3 hours, skimming foam regularly.",
            "Remove brisket after 2 hours, slice thinly when cooled.",
            "Strain broth, season with fish sauce, salt, and sugar.",
            "Cook rice noodles. Assemble bowls with noodles, brisket, and raw beef. Pour hot broth over. Serve with herbs, bean sprouts, lime, and jalapeños."
        ],
        calories: 420,
        proties: 28,
        carb: 48,
        fat: 12,
        fiber: 3,
        sodium: 1180,
        tips: [
            "Char onion and ginger directly over flame for authentic flavor",
            "Keep broth at gentle simmer for clear soup",
            "Raw beef cooks instantly in hot broth",
            "Hoisin sauce and sriracha are traditional condiments"
        ]
    },
    {
        rate: 4.5,
        reviews: 201,
        imageUrl: './images/imgi_2_photo-1601050690597-df0568f70950.png',
        prepTime: 25,
        cookTime: 90,
        servings: 6,
        level: "Intermediate",
        category: "Moroccan",
        title: "Lamb Tagine with Apricots",
        description: "Slow-cooked Moroccan stew with tender lamb, dried fruits, and warm spices",
        ingredients: [
            "800g lamb shoulder, cubed",
            "2 onions, sliced",
            "3 cloves garlic, minced",
            "2 teaspoons cumin",
            "2 teaspoons paprika",
            "1 teaspoon cinnamon",
            "1 teaspoon ginger",
            "200g dried apricots",
            "400ml lamb or chicken stock",
            "2 tablespoons honey",
            "Handful of almonds, toasted",
            "Fresh cilantro and couscous"
        ],
        instructions: [
            "Season lamb with salt, pepper, cumin, paprika, cinnamon, and ginger.",
            "Brown lamb in batches in a tagine or heavy pot. Remove and set aside.",
            "Sauté onions and garlic until soft.",
            "Return lamb to pot, add stock and bring to boil.",
            "Reduce heat, cover, and simmer for 1 hour.",
            "Add apricots and honey, cook for 30 more minutes until lamb is tender. Garnish with almonds and cilantro. Serve over couscous."
        ],
        calories: 465,
        proties: 36,
        carb: 38,
        fat: 20,
        fiber: 6,
        sodium: 720,
        tips: [
            "Use a traditional tagine pot for best results",
            "Add prunes or dates for variation",
            "Preserved lemons add authentic Moroccan flavor",
            "Make ahead - flavors improve overnight"
        ]
    }
];

function displayNewRecipe() {
    index =  Math.floor(Math.random() * recipesList.length);
    currentRecipe = recipesList[index];
    console.log(index);
    ratingNumberEle.innerHTML = currentRecipe.rate;
    reviewsNumberEle.innerHTML = `(${currentRecipe.reviews})`
    imageEle.src = currentRecipe.imageUrl;
    prepTimeEle.innerHTML = `${currentRecipe.prepTime} min`;
    cockTieEle.innerHTML = `${currentRecipe.cookTime} min`;
    servingsEle.innerHTML = `${currentRecipe.servings} people`;
    levelEle.innerHTML = currentRecipe.level;
    categoryEle.innerHTML = currentRecipe.category;
    titleEle.innerHTML = currentRecipe.title;
    descriptionEle.innerHTML = currentRecipe.description;

    localIngredients = "";
    for (var i = 0; i < currentRecipe.ingredients.length; i++) {
        localIngredients += `<li class="d-flex gap-3 align-items-center py-2">
                        <div
                          class="rounded-circle d-flex  align-items-center justify-content-center text-white fw-bold flex-shrink-0">${i + 1}</div>
                        <span >${currentRecipe.ingredients[i]}</span>
                      </li>`
    }
    ingredientlistEle.innerHTML = localIngredients;

    localInstructions = "";
    for (var i = 0; i < currentRecipe.instructions.length; i++) {
        localInstructions += `<li class="d-flex gap-3 align-items-center pb-3">
                        <div
                          class="rounded-4 d-flex  align-items-center justify-content-center text-white fw-bold flex-shrink-0">${i + 1}</div>
                        <span class="">${currentRecipe.instructions[i]}</span>
                      </li>`
    }
    instructionlistEle.innerHTML = localInstructions;

    /*Nutrition*/
    caloriesEle.innerHTML = currentRecipe.calories + " Kcal";
    protienEle.innerHTML = currentRecipe.proties + "g";
    carbohydrateEle.innerHTML = currentRecipe.carb + "g";
    FatEle.innerHTML = currentRecipe.fat + "g";
    FiberEle.innerHTML = currentRecipe.fiber + "g";
    SodiumEle.innerHTML = currentRecipe.sodium = "mg"

    localTips = "";
    for (var i = 0; i < currentRecipe.tips.length; i++) {
        localTips += `<li class="pb-3">
                        <div
                          class="rounded-4 py-4 px-3 gap-2 d-flex  align-items-center border border-top-0 border-end-0 border-bottom-0 border-5">
                          <i class="fa-solid fa-check text-white p-1 rounded-circle"></i>

                          <p>${currentRecipe.tips[i]}</p>
                        </div>
                      </li>`
    }
    tipslistEle.innerHTML = localTips;

    if(currentRecipe.cookTime + currentRecipe.prepTime > 45){
        alertEle.classList.remove('d-none')
    }
    else 
        alertEle.classList.add('d-none');
}

displayNewRecipe();