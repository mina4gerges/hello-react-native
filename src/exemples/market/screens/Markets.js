import React from 'react';
import { FlatList, View } from 'react-native';

import Market from "./Market";

import burgers from "../assets/images/burgers.jpg";
import junkFood from "../assets/images/junck-food.jpg";
import junkFood1 from "../assets/images/junk-food-1.jpg";

import dessert from "../assets/images/desset.jpg";
import cookies from "../assets/images/cookies.jpg";
import cheeseCake from "../assets/images/cheese-cake.jpg";
import chocolateMousse from "../assets/images/chocolate-mousse.jpg";

import iceCream from "../assets/images/ice-cream.jpg";
import oreoBalls from "../assets/images/oreo-balls.jpg";
import meltingChocolate from "../assets/images/melting-chocolate.jpg";
import mermaidIceCream from "../assets/images/mermaid-ice-cream.jpeg";
import raspberryMousse from "../assets/images/rasepberry-mousse.jpg";

const Markets = () => {

    const markets = {
        Salty: [
            { id: '1', image: burgers, title: 'Burgers', description: 'Delicious Burgers' },
            { id: '2', image: junkFood1, title: 'Swiss Mushroom', description: 'Anthony\'s Burger' },
            { id: '3', image: junkFood, title: 'Steak House', description: 'Burger King meal' },
        ],
        Sweaty: [
            { id: '4', image: cheeseCake, title: 'Cheese Cake', description: 'Abeille D\'or speciality' },
            { id: '5', image: chocolateMousse, title: 'Chocolate Mousse', description: 'Dip n Dip best seller' },
            { id: '6', image: cookies, title: 'Cookies', description: 'Crepaway dessert' },
            { id: '7', image: dessert, title: 'Cake', description: 'Best cake ever' },
        ],
        'Ice Cream': [
            { id: '8', image: iceCream, title: 'Ice Cream', description: 'Gelato Show' },
            { id: '9', image: mermaidIceCream, title: 'Mermaid Ice Cream', description: 'Le cremier' },
            { id: '10', image: raspberryMousse, title: 'Raspberry Mousse', description: 'Helado' },
            { id: '11', image: meltingChocolate, title: 'Melting Chocolate', description: 'Roadster dessert' },
            { id: '12', image: oreoBalls, title: 'Oreo Balls', description: 'Awad' },
        ],
    }

    return (
        <View>
            <FlatList
                data={Object.keys(markets)}
                keyExtractor={item => item}
                renderItem={({ item }) => <Market title={item} items={markets[item]} />}
            />
        </View>
    )
}

export default Markets;
