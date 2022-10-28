import {Image, ScrollView,StyleSheet, Text, View} from "react-native";
import {MEALS} from "../data/dummy-data";

import MealDetails from "../components/MealDetails";
import List from "../components/List";

function MealDetailScreen({route}) {
    const mealId = route.params.mealId;

    const selectedMeal = MEALS.find((meal) => meal.id === mealId);

    return (
        <ScrollView style={ styles.container}>
            <View style={styles.top}>
                <Image source={{uri: selectedMeal.imageUrl}} style={styles.image}/>
                <Text style={styles.title}>{selectedMeal.title}</Text>
                <MealDetails
                    duration={selectedMeal.duration}
                    complexity={selectedMeal.complexity}
                    affordability={selectedMeal.affordability}
                    style={styles.info}
                />
            </View>
            <View>
                <Text style={styles.subTitle}>Ingredients</Text>
                <View style={styles.recipe}>
                    {selectedMeal.ingredients.map((ingredient) => (<Text key={ingredient}> {ingredient}</Text>))}
                </View>

                <Text style={styles.subTitle}>Steps</Text>
                <View style={styles.recipe}>
                    <List
                    data={selectedMeal.steps}
                    />
                </View>
            </View>
        </ScrollView>
    )


}

export default MealDetailScreen

const styles = StyleSheet.create({
   container:{
       marginBottom: 20,
   },
    top: {
        alignItems: 'center',
    },
    image: {
        marginTop: 20,
        width: 200,
        height: 150,
    },
    title: {
        fontWeight: 'bold',
        margin: 15,
        textAlign: 'center',
        fontSize: 19,
    },
    subTitle: {
        fontWeight: "bold",
        fontSize: 15,
        marginTop: 20,
        marginBottom: 10,
        marginStart: 10,
        backgroundColor: '#fcf7ea',

    },
    info: {                                                        //extra style for <Text/> in MealDetails
        color: '#4189d0',
    },
    recipe: {
        marginHorizontal: 10,

    },
    screen: {
        flex: 2,
    }
})