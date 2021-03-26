import React from 'react';
import {View, Text, StyleSheet} from 'react-native';

const PracticeFlexBox = () => {

    return (
        <View style={styles.container}>
            <View style={[styles.item, styles.firstItem]}>
                <Text>
                    1
                </Text>
            </View>
            <View style={[styles.item, styles.secondItem]}>
                <Text>
                    2
                </Text>
            </View>
            <View style={[styles.item, styles.thirdItem]}>
                <Text>
                    3
                </Text>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: 'row',
        alignItems: 'center',
        backgroundColor: 'red',
        justifyContent: 'space-between',
    },
    item: {
        marginVertical: 10,
    },
    firstItem: {
        flex: 1,
        height: 200,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: 'yellow',
    },
    secondItem: {
        flex: 2,
        alignItems: 'flex-end',
        backgroundColor: 'cyan',
    },
    thirdItem: {
        flex: 3,
        alignSelf: 'flex-start',
        backgroundColor: 'green'
    },
})

export default PracticeFlexBox;