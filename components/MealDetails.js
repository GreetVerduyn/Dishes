import {View, Text, StyleSheet} from "react-native";

function MealDetails({duration, complexity, affordability,}) {
    return (
        <View style={styles.info}>
            <Text>duration: {duration} min.</Text>
            <Text>{complexity}</Text>
            <Text>€: {affordability}</Text>
        </View>
    )
}

export default MealDetails

const styles = StyleSheet.create({
    info: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        margin: 5,
    }
});