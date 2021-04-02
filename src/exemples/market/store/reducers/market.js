import {FETCH_MARKET_ITEMS} from "../actions/market";

import burgers from "../../assets/images/burgers.jpg";
import junkFood1 from "../../assets/images/junk-food-1.jpg";
import junkFood from "../../assets/images/junck-food.jpg";
import cheeseCake from "../../assets/images/cheese-cake.jpg";
import chocolateMousse from "../../assets/images/chocolate-mousse.jpg";
import cookies from "../../assets/images/cookies.jpg";
import dessert from "../../assets/images/desset.jpg";
import iceCream from "../../assets/images/ice-cream.jpg";
import mermaidIceCream from "../../assets/images/mermaid-ice-cream.jpeg";
import raspberryMousse from "../../assets/images/rasepberry-mousse.jpg";
import meltingChocolate from "../../assets/images/melting-chocolate.jpg";
import oreoBalls from "../../assets/images/oreo-balls.jpg";

const initMarketState = {
    marketItems: {},
};

const marketReducer = (state = initMarketState, action) => {
    switch (action.type) {
        case FETCH_MARKET_ITEMS:
            return {
                ...state,
                marketItems: {
                    Salty: [
                        {
                            id: '1',
                            image: burgers,
                            title: 'Burgers',
                            description: 'Delicious Burgers',
                            marketType: 'Salty'
                        },
                        {
                            id: '2',
                            image: junkFood1,
                            title: 'Swiss Mushroom',
                            description: 'Anthony\'s Burger',
                            marketType: 'Salty'
                        },
                        {
                            id: '3',
                            image: junkFood,
                            title: 'Steak House',
                            description: 'Burger King meal',
                            marketType: 'Salty'
                        },
                    ],
                    Sweaty: [
                        {
                            id: '4',
                            image: cheeseCake,
                            title: 'Cheese Cake',
                            description: 'Abeille D\'or speciality',
                            marketType: 'Sweaty'
                        },
                        {
                            id: '5',
                            image: chocolateMousse,
                            title: 'Chocolate Mousse',
                            description: 'Dip n Dip best seller',
                            marketType: 'Sweaty'
                        },
                        {
                            id: '6',
                            image: cookies,
                            title: 'Cookies',
                            description: 'Crepaway dessert',
                            marketType: 'Sweaty'
                        },
                        {id: '7', image: dessert, title: 'Cake', description: 'Best cake ever', marketType: 'Sweaty'},
                    ],
                    'Ice Cream': [
                        {id: '8', image: iceCream, title: 'Ice Cream', description: 'Gelato Show',marketType: 'Ice Cream'},
                        {id: '9', image: mermaidIceCream, title: 'Mermaid Ice Cream', description: 'Le cremier',marketType: 'Ice Cream'},
                        {id: '10', image: raspberryMousse, title: 'Raspberry Mousse', description: 'Helado',marketType: 'Ice Cream'},
                        {
                            id: '11',
                            image: meltingChocolate,
                            title: 'Melting Chocolate',
                            description: 'Roadster dessert',marketType: 'Ice Cream'
                        },
                        {id: '12', image: oreoBalls, title: 'Oreo Balls', description: 'Awad',marketType: 'Ice Cream'},
                    ],
                }
            }
        default:
            return state;
    }
}

export default marketReducer;