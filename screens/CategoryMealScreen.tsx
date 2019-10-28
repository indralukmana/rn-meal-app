import React from 'react'
import { View, Text, StyleSheet, Button, FlatList } from 'react-native'
import { CATEGORIES, MEALS } from '../data/dummy-data'
import MealItem from '../components/MealItem'

const CategoryMealScreen = props => {
  const categoryId = props.navigation.getParam('categoryId')

  const displayedMeals = MEALS.filter(
    meal => meal.categoryIds.indexOf(categoryId) >= 0
  )

  const renderMealItem = itemData => {
    return (
      <MealItem
        title={itemData.item.title}
        duration={itemData.item.duration}
        complexity={itemData.item.complexity}
        affordability={itemData.item.affordability}
        image={itemData.item.imageUrl}
        onSelectMeal={() => {}}
      />
    )
  }

  return (
    <View>
      <FlatList
        data={displayedMeals}
        keyExtractor={item => item.id}
        renderItem={renderMealItem}
        style={{ width: '100%' }}
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
