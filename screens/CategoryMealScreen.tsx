import React from 'react'
import { View, Text, StyleSheet, Button, FlatList } from 'react-native'
import { CATEGORIES, MEALS } from '../data/dummy-data'

const CategoryMealScreen = props => {
  const categoryId = props.navigation.getParam('categoryId')

  const displayedMeals = MEALS.filter(
    meal => meal.categoryIds.indexOf(categoryId) >= 0
  )

  const renderMealItem = itemData => {
    return (
      <View>
        <Text>{itemData.item.title}</Text>
      </View>
    )
  }

  return (
    <View>
      <FlatList
        data={displayedMeals}
        keyExtractor={item => item.id}
        renderItem={renderMealItem}
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
