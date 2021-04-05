import React, {useEffect, useRef, useState} from 'react';
import {Button, Keyboard, Alert, Text, View} from 'react-native';
import TextInputComp from "../components/TextInputComp";
import {insertPlace, loadPlace} from "../helpers/db";
import {useTheme} from "@react-navigation/native";

const SaveDataToDBScreen = () => {

    const {colors} = useTheme();

    const inputRef = useRef(null);
    const [data, setData] = useState([]);
    const [title, setTitle] = useState('');
    const [description, setDescription] = useState('');
    const [addSucceeded, setAddSucceeded] = useState(true);

    const enableSave = title && description;

    useEffect(() => {
        const loadData = async () => await loadPlace();

        if (addSucceeded) {
            loadData()
                .then((res) => {
                    setData(res.rows._array);
                })
                .catch((err) => {
                    console.log('Load error', err);
                });

            setAddSucceeded(false);
        }

    }, [addSucceeded]);

    const insertData = () => {
        insertPlace({title, description})
            .then(() => {
                setAddSucceeded(true);
                Alert.alert('Success', 'Your new data has been added');
                Keyboard.dismiss();
            })
            .catch(() => {
                setAddSucceeded(false);
                Alert.alert('Failed', 'Your new data are not saved');
            })
    }

    return (
        <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
            <TextInputComp
                placeholder='Title'
                returnKeyType='next'
                onChange={(val) => setTitle(val)}
                onSubmitEditing={() => inputRef.current.focus()}
            />

            <TextInputComp
                inputRef={inputRef}
                returnKeyType='done'
                placeholder='Description'
                onChange={(val) => setDescription(val)}
                onSubmitEditing={enableSave ? insertData : Keyboard.dismiss}
            />

            <Button title="Save Data" disabled={!enableSave} onPress={insertData}/>

            {
                data.length === 0
                    ? <Text style={{color: colors.text}}> No data Saved Before</Text>
                    : data.map((val, id) =>
                        <Text key={id} style={{color: colors.text}}>{val.title}</Text>)
            }

        </View>
    );
}

export default SaveDataToDBScreen;