import { useDispatch, useSelector } from "react-redux";
import { fetchIngredients, fetchInstruction, fetchNutrients, fetchSimilarRecipe, fetchSummary } from "../redux/slice/DetailSlice";
import { useParams } from "react-router-dom";
import { useEffect } from "react";
import { IoMdTime } from "react-icons/io";
import AccordianContainer from "./AccordianContainer";
import { IoMdHeartEmpty } from "react-icons/io";
import List from "./List";
import findRecipeImg from "../assets/images/FindRecipe.gif";

const RecipeDetails = () => {

    // to fetch the id from url
    const {recipeId} = useParams();
    const dispatch = useDispatch();
    // call apis on component load
    useEffect(()=>{
        dispatch(fetchSummary({id: recipeId}));
        dispatch(fetchSimilarRecipe({id: recipeId}));
        dispatch(fetchIngredients({id: recipeId}));
        dispatch(fetchNutrients({id:recipeId}));
        dispatch(fetchInstruction({id:recipeId}));
    },[recipeId,dispatch]);

    const basicDetails = useSelector(state=> state.detail.summary.data);
    const recommendationDetails = useSelector(state => state.detail.similar.data);
    
    // const ingredientDetails = useSelector(state => state.detail.ingredients.data);
    const ingredientDetails = {
        "ingredients": [
            {
                "amount": {
                    "metric": {
                        "unit": "g",
                        "value": 222.0
                    },
                    "us": {
                        "unit": "cups",
                        "value": 1.5
                    }
                },
                "image": "blueberries.jpg",
                "name": "blueberries"
            },
            {
                "amount": {
                    "metric": {
                        "unit": "",
                        "value": 1.0
                    },
                    "us": {
                        "unit": "",
                        "value": 1.0
                    }
                },
                "image": "egg-white.jpg",
                "name": "egg white"
            },
            {
                "amount": {
                    "metric": {
                        "unit": "Tbsps",
                        "value": 2.0
                    },
                    "us": {
                        "unit": "Tbsps",
                        "value": 2.0
                    }
                },
                "image": "flour.png",
                "name": "flour"
            },
            {
                "amount": {
                    "metric": {
                        "unit": "g",
                        "value": 150.0
                    },
                    "us": {
                        "unit": "cup",
                        "value": 0.75
                    }
                },
                "image": "sugar-in-bowl.png",
                "name": "granulated sugar"
            },
            {
                "amount": {
                    "metric": {
                        "unit": "tsp",
                        "value": 1.0
                    },
                    "us": {
                        "unit": "tsp",
                        "value": 1.0
                    }
                },
                "image": "lemon-juice.jpg",
                "name": "fresh lemon juice"
            },
            {
                "amount": {
                    "metric": {
                        "unit": "pinch",
                        "value": 1.0
                    },
                    "us": {
                        "unit": "pinch",
                        "value": 1.0
                    }
                },
                "image": "ground-nutmeg.jpg",
                "name": "nutmeg"
            },
            {
                "amount": {
                    "metric": {
                        "unit": "",
                        "value": 2.0
                    },
                    "us": {
                        "unit": "",
                        "value": 2.0
                    }
                },
                "image": "pie-crust.jpg",
                "name": "pie dough round"
            },
            {
                "amount": {
                    "metric": {
                        "unit": "Tbsps",
                        "value": 2.0
                    },
                    "us": {
                        "unit": "Tbsps",
                        "value": 2.0
                    }
                },
                "image": "tapioca-pearls.png",
                "name": "quick cooking tapioca"
            },
            {
                "amount": {
                    "metric": {
                        "unit": "g",
                        "value": 305.0
                    },
                    "us": {
                        "unit": "cups",
                        "value": 2.5
                    }
                },
                "image": "rhubarb.jpg",
                "name": "trimmed rhubarb"
            },
            {
                "amount": {
                    "metric": {
                        "unit": "tsps",
                        "value": 0.333
                    },
                    "us": {
                        "unit": "tsps",
                        "value": 0.333
                    }
                },
                "image": "salt.jpg",
                "name": "salt"
            },
            {
                "amount": {
                    "metric": {
                        "unit": "Tbsps",
                        "value": 0.5
                    },
                    "us": {
                        "unit": "Tbsps",
                        "value": 0.5
                    }
                },
                "image": "butter-sliced.jpg",
                "name": "unsalted butter"
            }
        ]
    }
    const ingredientList = ingredientDetails?.ingredients.map(ingredient => {
            const { name } = ingredient;
            const { unit, value } = ingredient.amount.metric; 
            return `${name}: ${value} ${unit}`;
        }
    );
    
    // const nutrientDetails = useSelector(state=> state.detail.nutrients.data);
    const nutrientDetails = {
        "nutrients": [
            {
                "name": "Calories",
                "amount": 316.49,
                "unit": "kcal",
                "percentOfDailyNeeds": 15.82
            },
            {
                "name": "Fat",
                "amount": 12.09,
                "unit": "g",
                "percentOfDailyNeeds": 18.6
            },
            {
                "name": "Saturated Fat",
                "amount": 3.98,
                "unit": "g",
                "percentOfDailyNeeds": 24.88
            },
            {
                "name": "Carbohydrates",
                "amount": 49.25,
                "unit": "g",
                "percentOfDailyNeeds": 16.42
            },
            {
                "name": "Net Carbohydrates",
                "amount": 46.76,
                "unit": "g",
                "percentOfDailyNeeds": 17.0
            },
            {
                "name": "Sugar",
                "amount": 21.98,
                "unit": "g",
                "percentOfDailyNeeds": 24.42
            },
            {
                "name": "Cholesterol",
                "amount": 1.88,
                "unit": "mg",
                "percentOfDailyNeeds": 0.63
            },
            {
                "name": "Sodium",
                "amount": 279.1,
                "unit": "mg",
                "percentOfDailyNeeds": 12.13
            },
            {
                "name": "Protein",
                "amount": 3.79,
                "unit": "g",
                "percentOfDailyNeeds": 7.57
            },
        ],
        "properties": [
            {
                "name": "Glycemic Index",
                "amount": 33.51,
                "unit": ""
            },
            {
                "name": "Glycemic Load",
                "amount": 15.63,
                "unit": ""
            },
            {
                "name": "Nutrition Score",
                "amount": 5.868695652173913,
                "unit": "%"
            }
        ],
        "flavonoids": [
            {
                "name": "Cyanidin",
                "amount": 2.35,
                "unit": "mg"
            },
            {
                "name": "Petunidin",
                "amount": 8.75,
                "unit": "mg"
            },
            {
                "name": "Delphinidin",
                "amount": 9.83,
                "unit": "mg"
            },
        ],
        "ingredients": [
            {
                "id": 9050,
                "name": "blueberries",
                "amount": 0.19,
                "unit": "cups",
                "nutrients": [
                    {
                        "name": "Vitamin E",
                        "amount": 0.16,
                        "unit": "mg",
                        "percentOfDailyNeeds": 3.19
                    },
                    {
                        "name": "Zinc",
                        "amount": 0.04,
                        "unit": "mg",
                        "percentOfDailyNeeds": 1.96
                    },
                    {
                        "name": "Fat",
                        "amount": 0.09,
                        "unit": "g",
                        "percentOfDailyNeeds": 18.6
                    },
                    {
                        "name": "Folate",
                        "amount": 1.66,
                        "unit": "µg",
                        "percentOfDailyNeeds": 9.48
                    },
                    {
                        "name": "Phosphorus",
                        "amount": 3.33,
                        "unit": "mg",
                        "percentOfDailyNeeds": 4.24
                    },
                    {
                        "name": "Manganese",
                        "amount": 0.09,
                        "unit": "mg",
                        "percentOfDailyNeeds": 18.69
                    }
                ]
            },
        ],
        "caloricBreakdown": {
            "percentProtein": 4.72,
            "percentFat": 33.9,
            "percentCarbs": 61.38
        },
        "weightPerServing": {
            "amount": 138,
            "unit": "g"
        }
    }
    const nutrientList = nutrientDetails?.nutrients.map(nutrient => {
        const {name, amount, unit} = nutrient;
        return `${name}: ${amount} ${unit}`
    });

    // const instructionDetails = useSelector(state=> state.detail.instructions.data);
    const instructionDetails = [
        {
            "name": "",
            "steps": [
                {
                    "equipment": [
                        {
                            "id": 404784,
                            "image": "oven.jpg",
                            "name": "oven",
                            "temperature": {
                                "number": 200.0,
                                "unit": "Fahrenheit"
                            }
                        }
                    ],
                    "ingredients": [],
                    "number": 1,
                    "step": "Preheat the oven to 200 degrees F."
                },
                {
                    "equipment": [
                        {
                            "id": 404661,
                            "image": "whisk.png",
                            "name": "whisk"
                        },
                        {
                            "id": 404783,
                            "image": "bowl.jpg",
                            "name": "bowl"
                        }
                    ],
                    "ingredients": [
                        {
                            "id": 19334,
                            "image": "light-brown-sugar.jpg",
                            "name": "light brown sugar"
                        },
                        {
                            "id": 19335,
                            "image": "sugar-in-bowl.png",
                            "name": "granulated sugar"
                        },
                        {
                            "id": 18371,
                            "image": "white-powder.jpg",
                            "name": "baking powder"
                        },
                        {
                            "id": 18372,
                            "image": "white-powder.jpg",
                            "name": "baking soda"
                        },
                        {
                            "id": 12142,
                            "image": "pecans.jpg",
                            "name": "pecans"
                        },
                        {
                            "id": 20081,
                            "image": "flour.png",
                            "name": "all purpose flour"
                        },
                        {
                            "id": 2047,
                            "image": "salt.jpg",
                            "name": "salt"
                        }
                    ],
                    "number": 2,
                    "step": "Whisk together the flour, pecans, granulated sugar, light brown sugar, baking powder, baking soda, and salt in a medium bowl."
                },
                {
                    "equipment": [
                        {
                            "id": 404661,
                            "image": "whisk.png",
                            "name": "whisk"
                        },
                        {
                            "id": 404783,
                            "image": "bowl.jpg",
                            "name": "bowl"
                        }
                    ],
                    "ingredients": [
                        {
                            "id": 2050,
                            "image": "vanilla-extract.jpg",
                            "name": "vanilla extract"
                        },
                        {
                            "id": 93622,
                            "image": "vanilla.jpg",
                            "name": "vanilla bean"
                        },
                        {
                            "id": 1230,
                            "image": "buttermilk.jpg",
                            "name": "buttermilk"
                        },
                        {
                            "id": 1123,
                            "image": "egg.png",
                            "name": "egg"
                        }
                    ],
                    "number": 3,
                    "step": "Whisk together the eggs, buttermilk, butter and vanilla extract and vanilla bean in a small bowl."
                },
                {
                    "equipment": [],
                    "ingredients": [
                        {
                            "id": 1123,
                            "image": "egg.png",
                            "name": "egg"
                        }
                    ],
                    "number": 4,
                    "step": "Add the egg mixture to the dry mixture and gently mix to combine. Do not overmix."
                },
                {
                    "equipment": [],
                    "ingredients": [],
                    "length": {
                        "number": 15,
                        "unit": "minutes"
                    },
                    "number": 5,
                    "step": "Let the batter sit at room temperature for at least 15 minutes and up to 30 minutes before using."
                },
                {
                    "equipment": [
                        {
                            "id": 404779,
                            "image": "griddle.jpg",
                            "name": "griddle"
                        },
                        {
                            "id": 404645,
                            "image": "pan.png",
                            "name": "frying pan"
                        }
                    ],
                    "ingredients": [],
                    "length": {
                        "number": 3,
                        "unit": "minutes"
                    },
                    "number": 6,
                    "step": "Heat a cast iron or nonstick griddle pan over medium heat and brush with melted butter. Once the butter begins to sizzle, use 2 tablespoons of the batter for each pancake and cook until the bubbles appear on the surface and the bottom is golden brown, about 2 minutes, flip over and cook until the bottom is golden brown, 1 to 2 minutes longer."
                },
                {
                    "equipment": [
                        {
                            "id": 404784,
                            "image": "oven.jpg",
                            "name": "oven",
                            "temperature": {
                                "number": 200.0,
                                "unit": "Fahrenheit"
                            }
                        }
                    ],
                    "ingredients": [],
                    "number": 7,
                    "step": "Transfer the pancakes to a platter and keep warm in a 200 degree F oven."
                },
                {
                    "equipment": [],
                    "ingredients": [
                        {
                            "id": 10014037,
                            "image": "bourbon.png",
                            "name": "bourbon"
                        }
                    ],
                    "number": 8,
                    "step": "Serve 6 pancakes per person, top each with some of the bourbon butter."
                },
                {
                    "equipment": [],
                    "ingredients": [
                        {
                            "id": 19336,
                            "image": "powdered-sugar.jpg",
                            "name": "powdered sugar"
                        },
                        {
                            "id": 19911,
                            "image": "maple-syrup.png",
                            "name": "maple syrup"
                        }
                    ],
                    "number": 9,
                    "step": "Drizzle with warm maple syrup and dust with confectioners' sugar."
                },
                {
                    "equipment": [],
                    "ingredients": [
                        {
                            "id": 12142,
                            "image": "pecans.jpg",
                            "name": "pecans"
                        }
                    ],
                    "number": 10,
                    "step": "Garnish with fresh mint sprigs and more toasted pecans, if desired."
                }
            ]
        },
        {
            "name": "Bourbon Molasses Butter",
            "steps": [
                {
                    "equipment": [
                        {
                            "id": 404669,
                            "image": "sauce-pan.jpg",
                            "name": "sauce pan"
                        }
                    ],
                    "ingredients": [
                        {
                            "id": 10014037,
                            "image": "bourbon.png",
                            "name": "bourbon"
                        },
                        {
                            "id": 19335,
                            "image": "sugar-in-bowl.png",
                            "name": "sugar"
                        }
                    ],
                    "number": 1,
                    "step": "Combine the bourbon and sugar in a small saucepan and cook over high heat until reduced to 3 tablespoons, remove and let cool."
                },
                {
                    "equipment": [
                        {
                            "id": 404771,
                            "image": "food-processor.png",
                            "name": "food processor"
                        }
                    ],
                    "ingredients": [
                        {
                            "id": 19304,
                            "image": "molasses.jpg",
                            "name": "molasses"
                        },
                        {
                            "id": 10014037,
                            "image": "bourbon.png",
                            "name": "bourbon"
                        },
                        {
                            "id": 2047,
                            "image": "salt.jpg",
                            "name": "salt"
                        }
                    ],
                    "number": 2,
                    "step": "Put the butter, molasses, salt and cooled bourbon mixture in a food processor and process until smooth."
                },
                {
                    "equipment": [
                        {
                            "id": 404730,
                            "image": "plastic-wrap.jpg",
                            "name": "plastic wrap"
                        },
                        {
                            "id": 404783,
                            "image": "bowl.jpg",
                            "name": "bowl"
                        }
                    ],
                    "ingredients": [],
                    "number": 3,
                    "step": "Scrape into a bowl, cover with plastic wrap and refrigerate for at least 1 hour to allow the flavors to meld."
                },
                {
                    "equipment": [],
                    "ingredients": [],
                    "length": {
                        "number": 30,
                        "unit": "minutes"
                    },
                    "number": 4,
                    "step": "Remove from the refrigerator about 30 minutes before using to soften."
                }
            ]
        }
    ]
    const instructionList = instructionDetails?.map(
        instructionObj => instructionObj?.steps.map(
            instruction=> {
                const {number, step} = instruction;
                return `${number}. ${step}`;
            }));

    console.log(instructionList);

    return(
        <div className="h-auto pb-10">
            <div>
                <p className="uppercase text-6xl text-left p-5 font-bold">
                    {basicDetails?.title}
                </p>
                <p className="text-right text-3xl">
                    Learn More
                </p>
            </div>
            <div className="w-full flex flex-col lg:flex-row justify-center items-center text-xl xl:text-4xl lg:justify-evenly">
                <div>
                    <ul >
                        <li className="flex items-center justify-center py-5"> <IoMdTime /> : {basicDetails?.readyInMinutes} </li>
                        <li className={basicDetails?.vegetarian === true? 'text-emerald-600 capitalize font-bold': 'text-transparent/25 capitalize line-through'}> vegetarian</li>
                        <li className={basicDetails?.vegan === true? 'text-emerald-600 capitalize font-bold': 'text-transparent/25 capitalize line-through'}> vegan</li>
                        <li className={basicDetails?.ketogenic === true? 'text-emerald-600 capitalize font-bold': 'text-transparent/25 capitalize line-through'}> ketogenic</li>
                        <li className={basicDetails?.dairyFree === true? 'text-emerald-600 capitalize font-bold': 'text-transparent/25 capitalize line-through'}> dairyFree</li>
                        <li className={basicDetails?.sustainable === true? 'text-emerald-600 capitalize font-bold': 'text-transparent/25 capitalize line-through'}>sustainable</li>
                        <li>
                        <div className="flex gap-5 p-5">
                            <button className="flex flex-row items-center justify-center px-4 rounded-full text-sm bg-black text-white border-transparent py-1.5 h-[38px]">
                            Add to Meal Plan
                            </button>
                            <button className="text-2xl flex items-center justify-center px-4"><IoMdHeartEmpty /></button>
                            </div>
                        </li>                        
                    </ul>
                </div>
                <div>
                    <img className="object-contain rounded-t-3xl border-black border-2" src={basicDetails?.image} alt="Insert picture here."></img>
                </div>
            </div> 
            <div className="flex justify-center items-center m-10">
                    <AccordianContainer instructionList={instructionList} ingredientList={ingredientList} nutrientList={nutrientList}/>
            </div>
            <div className=" pt-10 border-black">
                <div className="flex flex-col md:flex-row items-center justify-center p-5">
                    <p className="w-3/4 lg:w-2/4 text-sm md:text-4xl text-left">
                    Explore our <span className="text-emerald-600"> recommendations </span>curated just for you. From savory main courses to decadent desserts, discover new flavors and inspiration to elevate your cooking experience.
                    </p>
                    <img className="w-2/4 lg:w-1/4 h-auto" src={findRecipeImg}/>
                </div>
                {recommendationDetails?.length > 0 && <List resultList={recommendationDetails} listTitle={"Recommendations"}/> }
            </div>
        </div>
    )
};

export default RecipeDetails;