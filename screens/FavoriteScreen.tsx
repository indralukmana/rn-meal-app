import React from 'react'
import { View, Text, StyleSheet } from 'react-native'
import { MEALS } from '../data/dummy-data'
import MealList from '../components/MealList'

const FavoriteScreen = props => {
  const displayedMeals = MEALS.filter(
    meal => meal.id === 'm1' || meal.id === 'm2'
  )

  return <MealList listData={displayedMeals} navigation={props.navigation} />
}

FavoriteScreen.navigationOptions = {
  headerTitle: 'Your Favorites',
}
const styles = StyleSheet.create({})

export default FavoriteScreen
