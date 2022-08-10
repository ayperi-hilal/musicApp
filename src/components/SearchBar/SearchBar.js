import React from "react";
import { View, TextInput, Text, StyleSheet, SafeAreaView } from "react-native";


const SearchBar = (props) => {
    const onSearch=text=>console.log(text);
    return (
        <SafeAreaView>
            <View style={styles.container}>
                <TextInput
                    placeholder="Ara..."
                    onChangeText={props.onSearch}
                />
            </View>
        </SafeAreaView>
    )
}



export default SearchBar;

const styles = StyleSheet.create({

    container: {
        backgroundColor: '#eceff1',
        padding: 5,
        marginTop: 50,
        borderRadius: 5

    },
})
