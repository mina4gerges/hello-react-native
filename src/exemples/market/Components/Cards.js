import React from "react";
import {FlatList} from "react-native";

import Card from "./Card";

const Cards = ({items}) => {

    return (
        <FlatList
            data={items}
            horizontal
            keyExtractor={({id}) => id}
            showsHorizontalScrollIndicator={false}
            renderItem={({item: {id, image, title, description, marketType}}) => {
                return <Card
                    id={id}
                    image={image}
                    title={title}
                    marketType={marketType}
                    description={description}
                />
            }
            }
        />
    )
}

export default Cards;
