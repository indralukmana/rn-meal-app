import React from 'react'
import { View, Text, StyleSheet, Button } from 'react-native'
import { CATEGORIES } from '../data/dummy-data'

const CategoryMealScreen = props => {
  const categoryId = props.navigation.getParam('categoryId')

  const selectedCategory = CATEGORIES.find(
    category => category.id === categoryId
  )

  return (
    <View>
      <Text>Category Meal Screen: {selectedCategory.title}</Text>
      <Button
        title='Go to Meal Details'
        onPress={() => {
          props.navigation.navigate({ routeName: 'MealDetail' })
        }}
      />
    </View>
  )
}

CategoryMealScreen.navigationOptions = navigationData => {
  const categoryId = navigationData.navigation.getParam('categoryId')
  const selectedCategory = CATEGORIES.find(
    category => category.id === categoryId
  )

  return {
    headerTitle: selectedCategory.title,
  }
}

const styles = StyleSheet.create({})

export default CategoryMealScreen
