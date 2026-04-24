const foodItems = [
    // Chicken
    { id: 1, name: "Grilled Chicken Breast", category: "Chicken", price: 15.99, rating: 4.8, image: "https://images.unsplash.com/photo-1482049118208-48f5159e41af?w=400&auto=format&fit=crop" },
    { id: 2, name: "Spicy Fried Chicken", category: "Chicken", price: 12.99, rating: 4.6, image: "https://images.unsplash.com/photo-1490818387583-1b05facad558?w=400&auto=format&fit=crop" },
    { id: 3, name: "Chicken Tikka Masala", category: "Chicken", price: 16.50, rating: 4.9, image: "https://images.unsplash.com/photo-1504674900247-0877df9cc836?w=400&auto=format&fit=crop" },
    { id: 4, name: "Chicken Wings", category: "Chicken", price: 10.99, rating: 4.5, image: "https://images.unsplash.com/photo-1527477396000-e27163b481c2?w=400&auto=format&fit=crop" },
    { id: 5, name: "Roast Chicken", category: "Chicken", price: 18.00, rating: 4.7, image: "https://images.unsplash.com/photo-1484723091782-428b40d34f53?w=400&auto=format&fit=crop" },
    { id: 6, name: "Chicken Shawarma", category: "Chicken", price: 9.99, rating: 4.6, image: "https://images.unsplash.com/photo-1476224203421-9ce81042c05f?w=400&auto=format&fit=crop" },
    { id: 7, name: "Chicken Curry", category: "Chicken", price: 14.50, rating: 4.8, image: "https://images.unsplash.com/photo-1588166524941-3bf61a9c41db?w=400&auto=format&fit=crop" },
    { id: 8, name: "Lemon Herb Chicken", category: "Chicken", price: 15.50, rating: 4.7, image: "https://images.unsplash.com/photo-1604908176997-125f25cc6f3d?w=400&auto=format&fit=crop" },
    
    // Mutton
    { id: 9, name: "Mutton Biryani", category: "Mutton", price: 20.00, rating: 4.9, image: "https://images.unsplash.com/photo-1633945274405-b6c8069047b0?w=400&auto=format&fit=crop" },
    { id: 10, name: "Mutton Rogan Josh", category: "Mutton", price: 22.50, rating: 4.8, image: "https://images.unsplash.com/photo-1603894584373-5ac82b2ae398?w=400&auto=format&fit=crop" },
    { id: 11, name: "Grilled Lamb Chops", category: "Mutton", price: 25.99, rating: 4.9, image: "https://images.unsplash.com/photo-1473093295043-cdd812d0e601?w=400&auto=format&fit=crop" },
    { id: 12, name: "Mutton Korma", category: "Mutton", price: 21.00, rating: 4.7, image: "https://images.unsplash.com/photo-1460306855393-0410f61241c7?w=400&auto=format&fit=crop" },
    { id: 13, name: "Mutton Seekh Kebab", category: "Mutton", price: 16.99, rating: 4.8, image: "https://images.unsplash.com/photo-1603360946369-dc9bb6258143?w=400&auto=format&fit=crop" },
    { id: 14, name: "Lamb Stew", category: "Mutton", price: 19.50, rating: 4.6, image: "https://images.unsplash.com/photo-1505253758473-96b7015fcd40?w=400&auto=format&fit=crop" },
    { id: 15, name: "Mutton Curry", category: "Mutton", price: 20.50, rating: 4.7, image: "https://images.unsplash.com/photo-1496412705662-e0083f10f5db?w=400&auto=format&fit=crop" },
    { id: 16, name: "Lamb Gyro", category: "Mutton", price: 14.99, rating: 4.5, image: "https://images.unsplash.com/photo-1493770348161-369560ae357d?w=400&auto=format&fit=crop" },

    // Veg
    { id: 17, name: "Paneer Butter Masala", category: "Veg", price: 14.99, rating: 4.8, image: "https://images.unsplash.com/photo-1481070555726-89c1e95052fa?w=400&auto=format&fit=crop" },
    { id: 18, name: "Palak Paneer", category: "Veg", price: 13.99, rating: 4.7, image: "https://images.unsplash.com/photo-1601050690597-df0568f70950?w=400&auto=format&fit=crop" },
    { id: 19, name: "Vegetable Stir Fry", category: "Veg", price: 12.50, rating: 4.6, image: "https://images.unsplash.com/photo-1512621776951-a57141f2eefd?w=400&auto=format&fit=crop" },
    { id: 20, name: "Chana Masala", category: "Veg", price: 11.99, rating: 4.5, image: "https://images.unsplash.com/photo-1585937421612-70a008356fbe?w=400&auto=format&fit=crop" },
    { id: 21, name: "Mixed Veg Curry", category: "Veg", price: 13.00, rating: 4.6, image: "https://images.unsplash.com/photo-1546833999-b9f581a1996d?w=400&auto=format&fit=crop" },
    { id: 22, name: "Mushroom Risotto", category: "Veg", price: 16.99, rating: 4.9, image: "https://images.unsplash.com/photo-1476124369491-e7addf5db371?w=400&auto=format&fit=crop" },
    { id: 23, name: "Vegan Buddha Bowl", category: "Veg", price: 15.50, rating: 4.8, image: "https://images.unsplash.com/photo-1511690656952-34342bb7c2f2?w=400&auto=format&fit=crop" },
    { id: 24, name: "Stuffed Bell Peppers", category: "Veg", price: 14.00, rating: 4.7, image: "https://images.unsplash.com/photo-1432139555190-58524dae6a55?w=400&auto=format&fit=crop" },
    { id: 25, name: "Caprese Salad", category: "Veg", price: 10.99, rating: 4.8, image: "https://images.unsplash.com/photo-1529312266912-b33cfce2eefd?w=400&auto=format&fit=crop" },

    // Fast Food
    { id: 26, name: "Classic Cheeseburger", category: "Fast Food", price: 9.99, rating: 4.7, image: "https://images.unsplash.com/photo-1568901346375-23c9450c58cd?w=400&auto=format&fit=crop" },
    { id: 27, name: "Pepperoni Pizza", category: "Fast Food", price: 14.99, rating: 4.8, image: "https://images.unsplash.com/photo-1478144592103-25e218a04891?w=400&auto=format&fit=crop" },
    { id: 28, name: "French Fries", category: "Fast Food", price: 4.99, rating: 4.5, image: "https://images.unsplash.com/photo-1576107232684-1279f390859f?w=400&auto=format&fit=crop" },
    { id: 29, name: "Hot Dog", category: "Fast Food", price: 5.99, rating: 4.4, image: "https://images.unsplash.com/photo-1612222869049-d8ec83637a3c?w=400&auto=format&fit=crop" },
    { id: 30, name: "Onion Rings", category: "Fast Food", price: 6.50, rating: 4.6, image: "https://images.unsplash.com/photo-1639024471283-03518883512d?w=400&auto=format&fit=crop" },
    { id: 31, name: "Chicken Nuggets", category: "Fast Food", price: 7.99, rating: 4.5, image: "https://images.unsplash.com/photo-1562967914-01efa7e87832?w=400&auto=format&fit=crop" },
    { id: 32, name: "Tacos", category: "Fast Food", price: 11.99, rating: 4.7, image: "https://images.unsplash.com/photo-1551504734-5ee1c4a1479b?w=400&auto=format&fit=crop" },
    { id: 33, name: "Nachos", category: "Fast Food", price: 9.50, rating: 4.6, image: "https://images.unsplash.com/photo-1513456852971-30c0b8199d4d?w=400&auto=format&fit=crop" },

    // Drinks
    { id: 34, name: "Mojito", category: "Drinks", price: 8.99, rating: 4.8, image: "https://images.unsplash.com/photo-1551538827-9c037cb4f32a?w=400&auto=format&fit=crop" },
    { id: 35, name: "Iced Coffee", category: "Drinks", price: 5.50, rating: 4.7, image: "https://images.unsplash.com/photo-1517701550927-30cf4ba1dba5?w=400&auto=format&fit=crop" },
    { id: 36, name: "Strawberry Smoothie", category: "Drinks", price: 6.99, rating: 4.6, image: "https://images.unsplash.com/photo-1414235077428-971145534356?w=400&auto=format&fit=crop" },
    { id: 37, name: "Lemonade", category: "Drinks", price: 4.50, rating: 4.5, image: "https://images.unsplash.com/photo-1513558161293-cdaf765ed2fd?w=400&auto=format&fit=crop" },
    { id: 38, name: "Mango Lassi", category: "Drinks", price: 5.99, rating: 4.8, image: "https://images.unsplash.com/photo-1546171753-97d7676e4602?w=400&auto=format&fit=crop" },
    { id: 39, name: "Green Tea", category: "Drinks", price: 3.50, rating: 4.4, image: "https://images.unsplash.com/photo-1512152272829-400c7b2e68f5?w=400&auto=format&fit=crop" },
    { id: 40, name: "Craft Beer", category: "Drinks", price: 7.50, rating: 4.7, image: "https://images.unsplash.com/photo-1535958636474-b021ee887b13?w=400&auto=format&fit=crop" },
    { id: 41, name: "Red Wine", category: "Drinks", price: 12.00, rating: 4.8, image: "https://images.unsplash.com/photo-1506377247377-2a5b3b417ebb?w=400&auto=format&fit=crop" },

    // Desserts
    { id: 42, name: "Chocolate Cake", category: "Desserts", price: 8.50, rating: 4.9, image: "https://images.unsplash.com/photo-1578985545062-69928b1d9587?w=400&auto=format&fit=crop" },
    { id: 43, name: "Cheesecake", category: "Desserts", price: 9.00, rating: 4.8, image: "https://images.unsplash.com/photo-1533134242443-d4fd215305ad?w=400&auto=format&fit=crop" },
    { id: 44, name: "Ice Cream Sundae", category: "Desserts", price: 7.50, rating: 4.7, image: "https://images.unsplash.com/photo-1467003909585-2f8aa04122bc?w=400&auto=format&fit=crop" },
    { id: 45, name: "Tiramisu", category: "Desserts", price: 9.50, rating: 4.9, image: "https://images.unsplash.com/photo-1543339308-43e59d6b73a6?w=400&auto=format&fit=crop" },
    { id: 46, name: "Brownie with Ice Cream", category: "Desserts", price: 8.00, rating: 4.8, image: "https://images.unsplash.com/photo-1606313564200-e75d5e30476c?w=400&auto=format&fit=crop" },
    { id: 47, name: "Fruit Tart", category: "Desserts", price: 7.00, rating: 4.6, image: "https://images.unsplash.com/photo-1519915028121-7d3463d20b13?w=400&auto=format&fit=crop" },
    { id: 48, name: "Macarons", category: "Desserts", price: 10.50, rating: 4.7, image: "https://images.unsplash.com/photo-1569864358642-9d1684040f43?w=400&auto=format&fit=crop" },
    { id: 49, name: "Donuts", category: "Desserts", price: 6.00, rating: 4.5, image: "https://images.unsplash.com/photo-1551024601-bec78aea704b?w=400&auto=format&fit=crop" },
    { id: 50, name: "Pancakes", category: "Desserts", price: 8.99, rating: 4.8, image: "https://images.unsplash.com/photo-1528207776546-365bb710ee93?w=400&auto=format&fit=crop" },
    { id: 51, name: "Waffles", category: "Desserts", price: 9.50, rating: 4.7, image: "https://images.unsplash.com/photo-1555939594-58d7cb561ad1?w=400&auto=format&fit=crop" }
];
