import React from 'react'
import { createAppContainer } from 'react-navigation'
import { createStackNavigator } from 'react-navigation-stack'
import { createBottomTabNavigator } from 'react-navigation-tabs'
import { Platform } from 'react-native'
import CategoriesScreen from '../screens/CategoriesScreen'
import CategoryMealScreen from '../screens/CategoryMealScreen'
import MealDetailScreen from '../screens/MealDetailScreen'
import Colors from '../constants/Colors'
import FavoriteScreen from '../screens/FavoriteScreen'
import { Ionicons } from '@expo/vector-icons'

const MealNavigator = createStackNavigator(
  {
    Categories: {
      screen: CategoriesScreen,
      navigationOptions: { headerTitle: 'Meal Categories' },
    },
    CategoryMeals: CategoryMealScreen,
    MealDetail: MealDetailScreen,
  },
  {
    defaultNavigationOptions: {
      headerTitle: 'Meal App',
      headerStyle: {
        backgroundColor: Platform.OS === 'android' ? Colors.primaryColor : '',
      },
      headerTintColor:
        Platform.OS === 'android' ? 'white' : Colors.primaryColor,
    },
  }
)

const MealsFavTabNavigator = createBottomTabNavigator(
  {
    Meals: {
      screen: MealNavigator,
      navigationOptions: {
        tabBarIcon: tabInfo => {
          return (
            <Ionicons
              name='ios-restaurant'
              size={25}
              color={tabInfo.tintColor}
            />
          )
        },
      },
    },
    Favorites: {
      screen: FavoriteScreen,
      navigationOptions: {
        tabBarLabel: 'Favorites!',
        tabBarIcon: tabInfo => {
          return (
            <Ionicons name='ios-star' size={25} color={tabInfo.tintColor} />
          )
        },
      },
    },
  },
  { tabBarOptions: { activeTintColor: Colors.accentColor } }
)

export default createAppContainer(MealsFavTabNavigator)
