import {StatusBar} from 'expo-status-bar';
import {StyleSheet} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';


import CategoriesScreen from "./screens/CategoriesScreen";
import MealsOverviewScreen from "./screens/MealsOverviewScreen";
import MealDetailScreen from "./screens/MealDetailScreen";

const Stack = createNativeStackNavigator();


export default function App() {
    return (
        <>
            <StatusBar style='light'/>
            <NavigationContainer>
                <Stack.Navigator
                    screenOptions={{
                        headerTitleAlign: 'center',
                        headerStyle: {backgroundColor: '#a0c3e5'},
                        contentStyle: {backgroundColor: '#f8f1db'}
                    }}
                >
                    <Stack.Screen
                        name={'MealsCategories'}
                        component={CategoriesScreen}
                        options={{
                            title: 'Categories'
                        }}
                    />
                    <Stack.Screen
                        name={'MealsOverview'}
                        component={MealsOverviewScreen}
                    />
                    <Stack.Screen
                        name={'MealDetail'}
                        component={MealDetailScreen}
                    />
                </Stack.Navigator>
            </NavigationContainer>
        </>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
    },
});
