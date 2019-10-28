import React from 'react'
import { View, Text, StyleSheet, Button } from 'react-native'
import { MEALS } from '../data/dummy-data'
import { HeaderButtons, Item } from 'react-navigation-header-buttons'
import CustomHeaderButton from '../components/HeaderButton'

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
    headerRight: (
      <HeaderButtons HeaderButtonComponent={CustomHeaderButton}>
        <Item
          title='Favorite'
          iconName='ios-star'
          onPress={() => console.log('Fav')}
        />
      </HeaderButtons>
    ),
  }
}

const styles = StyleSheet.create({})

export default MealDetailScreen
