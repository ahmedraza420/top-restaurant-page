import images from "../assets/images"

export default [
            {
                category: "Burgers",
                type: 'food',
                items: [
                    {
                        name: "Make Your Own",
                        image: images.burger1,
                        variants: [
                            {label: null, price: 10.90},
                        ],
                        description: "Approx. 160g sirloin steak, free-range chicken breast, or vegetable patty",
                        featured: true
                    },
                    {
                        name: "Chili Burger",
                        image: images.burger2,
                        variants: [
                            {label: null, price: 12.40},
                        ],
                        description: "Chili peppers, chili sauce, and Emmental cheese",
                        featured: true
                    },
                    {
                        name: "Classic Burger",
                        image: images.burger3,
                        variants: [
                            {label: null, price: 10.90},
                        ],
                        description: "The original hamburger",
                        featured: true
                    },
                    {
                        name: "Cheese Burger",
                        image: images.burger4,
                        variants: [
                            {label: null, price: 12.40},
                        ],
                        description: "Classic burger with Emmental cheese",
                        featured: true
                    },
                    {
                        name: "Cheese & Bacon Burger",
                        image: images.burger1,
                        variants: [
                            {label: null, price: 12.40},
                        ],
                        description: "Emmental cheese and crispy bacon",
                        featured: true
                    },
                    {
                        name: "Alpine Burger",
                        image: images.burger2,
                        variants: [
                            {label: null, price: 12.40},
                        ],
                        description: "Emmental cheese and mountain cheese",
                        featured: true
                    },
                    {
                        name: "Arugula Burger",
                        image: images.burger3,
                        variants: [
                            {label: null, price: 13.95},
                        ],
                        description: "Double meat, double cheese, double bacon",
                        featured: true
                    },
                    {
                        name: "AG Burger",
                        image: images.burger4,
                        variants: [
                            {label: null, price: 15.90},
                        ],
                        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit",
                        featured: true
                    },
                    {
                        name: "Goodbye Obama Burger",
                        image: images.burger1,
                        variants: [
                            {label: null, price: 15.90},
                        ],
                        description: "Beef patty stuffed with cheese, caramelized onions, and bacon",
                        featured: true
                    },
                    {
                        name: "Mozzarella Burger",
                        image: images.burger2,
                        variants: [
                            {label: null, price: 12.40},
                        ],
                        description: "Mozzarella and basil pesto",
                        featured: false
                    },
                    {
                        name: "Onion Burger",
                        image: images.burger3,
                        variants: [
                            {label: null, price: 11.40},
                        ],
                        description: "Braised onions",
                        featured: false
                    },
                    {
                        name: "Avocado Burger",
                        image: images.burger4,
                        variants: [
                            {label: null, price: 12.40},
                        ],
                        description: "Avocado cream and Emmental cheese",
                        featured: false
                    },
                    {
                        name: "Brie Burger",
                        image: images.burger1,
                        variants: [
                            {label: null, price: 12.90},
                        ],
                        description: "French Brie and cranberries",
                        featured: false
                    },
                    {
                        name: "Serrano Burger",
                        image: images.burger2,
                        variants: [
                            {label: null, price: 12.90},
                        ],
                        description: "Serrano ham and Parmesan cheese",
                        featured: false
                    },
                    {
                        name: "BBQ Burger",
                        image: images.burger3,
                        variants: [
                            {label: null, price: 12.40},
                        ],
                        description: "BBQ sauce and bacon",
                        featured: false
                    },
                    {
                        name: "Hawaii Burger",
                        image: images.burger4,
                        variants: [
                            {label: null, price: 12.40},
                        ],
                        description: "Grilled pineapple and Emmental cheese",
                        featured: false
                    },
                    {
                        name: "New York Burger",
                        image: images.burger1,
                        variants: [
                            {label: null, price: 12.40},
                        ],
                        description: "Coleslaw, bacon, and Emmental cheese",
                        featured: false
                    },
                    {
                        name: "Kids' Burger Menu",
                        image: images.burger2,
                        variants: [
                            {label: null, price: 8.90},
                        ],
                        description: "Small burger with fries and a surprise",
                        featured: false
                    },
                ]
            },
            {
                category: "Salads",
                type: "food",
                items: [
                    {
                        name: "Cesar Salad",
                        image: images.salad1,
                        description: "Grilled chicken breast, Parmesan cheese and croutons",
                        variants: [
                        { label: null, price: "13.90" }
                        ],
                        featured: true
                    },
                    {
                        name: "AG Salad",
                        image: images.salad2,
                        description: "Grilled chicken breast and mushrooms",
                        variants: [
                        { label: null, price: "13.90" }
                        ],
                        featured: true
                    },
                    {
                        name: "Chef Salad",
                        image: images.salad1,
                        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit",
                        variants: [
                        { label: null, price: "13.90" }
                        ],
                        featured: false
                    },
                    {
                        name: "Small Salad",
                        image: images.salad2,
                        description: "",
                        variants: [
                        { label: null, price: "5.90" }
                        ],
                        featured: false
                    },
                    {
                        name: "Arugula Salad",
                        image: images.salad1,
                        description: "Parmesan flakes and mushrooms",
                        variants: [
                        { label: null, price: "13.90" }
                        ],
                        featured: true
                    },
                    {
                        name: "Coleslaw",
                        image: images.salad2,
                        description: "",
                        variants: [
                        { label: null, price: "5.90" }
                        ],
                        featured: false
                    }
                ]
            },
            {
                category: "Grilled",
                type: "food",
                subCats: [
                    {
                        cat: "From The Grill",
                        items: [
                            {
                                name: "Saige Free-Range Chicken Breast",
                                image: images.fromthegrill,
                                description: "With garlic sour cream and grilled mushrooms, served with potato wedges and salad",
                                variants: [
                                { label: null, price: "17.70" }
                                ],
                                featured: false
                            }
                        ]
                    }
                ]
            },
            {
                category: "Homemade Potatoes",
                type: "side",
                items: [
                    {
                        name: "Potato Wedges",
                        image: images.fries,
                        description: "",
                        variants: [
                        { label: null, price: "5.00" }
                        ],
                        featured: true
                    },
                    {
                        name: "French Fries",
                        image: images.fries,
                        description: "",
                        variants: [
                        { label: null, price: "5.00" }
                        ],
                        featured: false
                    },
                    {
                        name: "Sweet Potato French Fries",
                        image: images.fries,
                        description: "",
                        variants: [
                        { label: null, price: "6.20" }
                        ],
                        featured: true
                    }
                ]
            },
            {
                category: "Snacks",
                type: "side",
                items: [
                    {
                        name: "Homemade Onion Rings",
                        image: images.snack,
                        description: "With BBQ dip",
                        variants: [
                        { label: null, price: "6.60" }
                        ],
                        featured: true
                    },
                    {
                        name: "Corn on the Cob",
                        image: images.snack,
                        description: "With herb bread",
                        variants: [
                        { label: null, price: "5.50" }
                        ],
                        featured: false
                    },
                    {
                        name: "Jacket Potatoes",
                        image: images.snack,
                        description: "With garlic sour cream",
                        variants: [
                        { label: "Base", price: "5.90" },
                        { label: "+ mushrooms & chicken", price: "8.80" },
                        { label: "Full combo", price: "11.00" }
                        ],
                        featured: true
                    }
                ]
            },
            {
                category: "Dessert",
                type: "sweet",
                subCats: [
                    {
                        cat: "Dessert",
                        items: [
                            {
                            // name: "Fried Mars / Snickers / Bounty",
                            name: "Choice of Mars, Snickers, or Bounty",
                            image: images.dessert,
                            description: "",
                            variants: [
                                { label: null, price: "5.50" }
                            ],
                            featured: true
                            }
                        ]
                    }
                ]
            },
            {
                category: "Cold Drinks",
                type: "drink",
                items: [
                {
                    name: "Homemade Lemonade",
                    image: images.colddrink,
                    description: "Ginger-Orange / Woodruff-Lemon / Passion Fruit-Lime",
                    variants: [
                        { label: "0.3L", price: "3.90" },
                        { label: "0.5L", price: "4.90" }
                    ],
                    featured: true
                },
                {
                    name: "Mineral Water",
                    image: images.colddrink,
                    description: "",
                    // description: "Taunus Which Classic or Natural",
                    variants: [
                        { label: "Natural (non carbonated)", price: "3.90" },
                        { label: "Sparkling Water", price: "6.90" }
                    ],
                    featured: false
                },
                {
                    name: "Coca Cola",
                    image: images.colddrink,
                    description: "Coca Cola / Light / Zero, Fanta, Sprite, Mezzo Mix",
                    variants: [
                        { label: "0.3L", price: "3.90" },
                        { label: "0.5L", price: "4.90" }
                    ],
                    featured: true
                },
                {
                    name: "Schweppes",
                    image: images.colddrink,
                    description: "Bitter Lemon, Ginger Ale, Tonic Water",
                    variants: [
                        { label: "0.3L", price: "3.90" },
                        { label: "0.5L", price: "4.90" }
                    ],
                    featured: false
                },
                {
                    name: "Juices and Sprinkles",
                    image: images.colddrink,
                    description: "Apple, Orange, Cherry, Banana, Passion Fruit, Pineapple",
                    variants: [
                        { label: "0.3L", price: "3.90" },
                        { label: "0.5L", price: "4.90" }
                    ],
                    featured: true
                }
                ]
            },
            {
                category: "Hot Beverages",
                type: "drink",
                items: [
                    {
                        name: "Espresso / Macchiato",
                        image: images.hotdrink,
                        description: "",
                        // description: "Choice of Espresso or Macchiato",
                        variants: [
                            { label: null, price: "2.30" }
                        ],
                        featured: true
                    },
                    {
                        name: "Coffee",
                        image: images.hotdrink,
                        description: "",
                        variants: [
                            { label: null, price: "13.95" }
                        ],
                        featured: false
                    },
                    {
                        name: "Latte Macchiato",
                        image: images.hotdrink,
                        description: "",
                        variants: [
                            { label: null, price: "13.95" }
                        ],
                        featured: true
                    },
                    {
                        name: "Cappuccino",
                        image: images.hotdrink,
                        description: "",
                        variants: [
                            { label: null, price: "13.95" }
                        ],
                        featured: false
                    },
                    {
                        name: "Hot Chocolate",
                        image: images.hotdrink,
                        description: "With whipped cream",
                        variants: [
                            { label: null, price: "13.95" }
                        ],
                        featured: true
                    },
                    {
                        name: "Tea",
                        image: images.hotdrink,
                        description: "Earl Grey, Fruit Tea, Chamomile Tea, Green Tea",
                        variants: [
                            { label: null, price: "13.95" }
                        ],
                        featured: true
                    },
                    {
                        name: "Fresh Mint Tea",
                        image: images.hotdrink,
                        description: "Freshly brewed Turkish mint",
                        variants: [
                            { label: null, price: "13.95" }
                        ],
                        featured: false
                    }
                ]
            },
            {
                category: "Cocktails",
                type: "drink",
                items: [
                {
                    name: "Mojito",
                    image: images.cocktail,
                    description: "Lime, mint, brown sugar, rum, soda",
                    variants: [
                    { label: null, price: "9.90" }
                    ],
                    featured: true
                },
                {
                    name: "Caipirinha",
                    image: images.cocktail,
                    description: "Lime, brown sugar, lime juice, cachaça",
                    variants: [
                    { label: null, price: "9.90" }
                    ],
                    featured: false
                },
                {
                    name: "Mai Tai",
                    image: images.cocktail,
                    description: "White & brown rum, orange liqueur, lime juice, almond syrup, grenadine",
                    variants: [
                    { label: null, price: "9.90" }
                    ],
                    featured: true
                },
                {
                    name: "Pina Colada",
                    image: images.cocktail,
                    description: "White rum, coconut cream, cream, pineapple juice",
                    variants: [
                    { label: null, price: "9.90" }
                    ],
                    featured: false
                },
                {
                    name: "Long Island Ice Tea",
                    image: images.cocktail,
                    description: "Vodka, gin, white tequila, white rum, lemon juice, cola",
                    variants: [
                    { label: null, price: "9.90" }
                    ],
                    featured: true
                }
                ]
            },
            {   
                category: "Spirits",
                type: "drink",
                subCats: [
                    {
                        cat: "Fruit Brandies 2CL",
                        items: [
                            {
                                name: "Williams Pear, Raspberry Spirit",
                                image: images.spirit1,
                                description: "",
                                variants: [
                                    { label: null, price: "3.00" }
                                ],
                                featured: false
                            },
                        ]
                        
                    },
                    {
                        cat: "Bitters 2CL",
                        items: [
                            {
                                name: "Jägermeister, Ramazzotti, Campari, Fernet Branca",
                                image: images.spirit22,
                                description: "",
                                variants: [
                                    { label: null, price: "3.00" }
                                ],
                                featured: false
                            }
                        ]
                    }
                ]
            }
        ]