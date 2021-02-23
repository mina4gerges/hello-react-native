import React from "react";
import { FlatList } from "react-native";

import Card from "./Card";

const Cards = ({ items }) => {

    return (
        <FlatList
            data={items}
            horizontal
            keyExtractor={({ id }) => id}
            showsHorizontalScrollIndicator={false}
            renderItem={({ item: { image, title, description } }) => {
                return <Card
                    image={image}
                    title={title}
                    description={description}
                />
            }
            }
        />
    )
}

export default Cards;
