import React from 'react'
import { CATEGORIES } from '../data/dummy-data'
import { useSelector } from 'react-redux'
import MealList from '../components/MealList'

const CategoryMealScreen = props => {
  const categoryId = props.navigation.getParam('categoryId')

  const availableMeals = useSelector((state: any) => state.meals.filteredMeals)

  const displayedMeals = availableMeals.filter(
    meal => meal.categoryIds.indexOf(categoryId) >= 0
  )

  return <MealList listData={displayedMeals} navigation={props.navigation} />
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

export default CategoryMealScreen
