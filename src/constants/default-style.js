import {StyleSheet, Dimensions} from "react-native";

const {height} = Dimensions.get('window');


export default StyleSheet.create({
    titleText: {
        fontSize: height > 320 ? 16 : 10,
        color: 'yellow',
        fontFamily: 'open-sans-bold'
    }
})