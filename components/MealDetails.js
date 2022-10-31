import React from "react";
import {View, Text, StyleSheet} from "react-native";

function MealDetails({duration, complexity, affordability, style}) {
    return (
        <View style={styles.info}>
            <Text style={[styles.infoText, style]}>duration: {duration} min.</Text>
            <Text style={[styles.infoText, style]}>{complexity}</Text>
            <Text style={[styles.infoText, style]}>€: {affordability}</Text>
        </View>
    )
}

export default MealDetails

const styles = StyleSheet.create({
    info: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        margin: 5,
    },
    infoText:{
        marginHorizontal: 10
    }
});