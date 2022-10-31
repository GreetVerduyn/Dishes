import React from 'react';
import {StatusBar} from 'expo-status-bar';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {createDrawerNavigator} from "@react-navigation/drawer";

import CategoriesScreen from "./screens/CategoriesScreen";
import MealsOverviewScreen from "./screens/MealsOverviewScreen";
import MealDetailScreen from "./screens/MealDetailScreen";
import FavoritesScreen from "./screens/FavoritesScreen";


const Stack = createNativeStackNavigator();
const Drawer = createDrawerNavigator();

function DrawerNavigator() {
    return <Drawer.Navigator
        screenOptions={{
            headerTitleAlign: 'center',
            headerStyle: {backgroundColor: '#3e3198'},
            headerTintColor: '#f8f1db',
            sceneContainerStyle: {backgroundColor: '#f8f1db'},
        }}>
        <Drawer.Screen name={"Categories"} component={CategoriesScreen} options={{ title:'All Categories'}}/>
        <Drawer.Screen name={'Favorites'} component={FavoritesScreen}/>
    </Drawer.Navigator>
}


export default function App() {
    return (
        <>
            <StatusBar style='light'/>
            <NavigationContainer>
                <Stack.Navigator
                    screenOptions={{
                        headerTitleAlign: 'center',
                        headerStyle: {backgroundColor: '#3e3198'},
                        headerTintColor: '#f8f1db',
                        contentStyle: {backgroundColor: '#f8f1db'},
                    }}
                >
                    <Stack.Screen
                        name={'Drawer'}
                        component={DrawerNavigator}
                        options={{
                            headerShown: false,
                        }}
                    />
                    <Stack.Screen
                        name={'MealsOverview'}
                        component={MealsOverviewScreen}
                    />
                    <Stack.Screen
                        name={'MealDetail'}
                        component={MealDetailScreen}
                        options={{
                            title:'Recipe'
                        }}
                    />
                </Stack.Navigator>
            </NavigationContainer>
        </>
    )
}


