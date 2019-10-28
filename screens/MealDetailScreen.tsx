import React from 'react'
import { View, Text, StyleSheet, Button } from 'react-native'
import { MEALS } from '../data/dummy-data'

const MealDetailScreen = props => {
  const mealId = props.navigation.getParam('mealId')

  const selectedMeal = MEALS.find(meal => meal.id === mealId)

  return (
    <View>
      <Text>Meal Detail Screen: {selectedMeal.title}</Text>
      <Button
        title='Back to Home'
        onPress={() => {
          props.navigation.popToTop()
        }}
      />
    </View>
  )
}

MealDetailScreen.navigationOptions = navigationData => {
  const mealId = navigationData.navigation.getParam('mealId')

  const selectedMeal = MEALS.find(meal => meal.id === mealId)

  return {
    headerTitle: selectedMeal.title,
  }
}

const styles = StyleSheet.create({})

export default MealDetailScreen
