import {Image, StyleSheet, Text, View} from "react-native";
import {MEALS} from "../data/dummy-data";
import {createNativeStackNavigator} from "@react-navigation/native-stack";
import MealsOverviewScreen from "./MealsOverviewScreen";
import MealDetails from "../components/MealDetails";

function MealDetailScreen({route}) {
    const mealId = route.params.mealId;

    const selectedMeal = MEALS.find((meal) => meal.id === mealId);

    return (
        <View>
            <View>
                <Image source={{uri: selectedMeal.imageUrl}} style={styles.image}/>
                <Text>{selectedMeal.title}</Text>
                <MealDetails
                    duration={selectedMeal.duration}
                    complexity={selectedMeal.complexity}
                    affordability={selectedMeal.affordability}/>

            </View>
            <View>
                <Text>Ingredients</Text>
                {selectedMeal.ingredients.map((ingredient) => (<Text key={ingredient}> {ingredient}</Text>))}
                <Text>Steps</Text>
                {selectedMeal.steps.map((step) => (<Text key={step}> {step}</Text>))}
            </View>
        </View>
    )


}

export default MealDetailScreen

const styles = StyleSheet.create({
    image: {
        width: 200,
        height: 150,
    }
})