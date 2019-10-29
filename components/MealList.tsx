import React from 'react'
import { View, FlatList, StyleSheet } from 'react-native'
import MealItem from './MealItem'
import { useSelector } from 'react-redux'

const MealList = ({ listData, navigation }) => {
  const favoriteMeals = useSelector((state: any) => state.meals.favoriteMeals)

  const renderMealItem = itemData => {
    return (
      <MealItem
        title={itemData.item.title}
        duration={itemData.item.duration}
        complexity={itemData.item.complexity}
        affordability={itemData.item.affordability}
        image={itemData.item.imageUrl}
        onSelectMeal={() => {
          navigation.navigate('MealDetail', {
            mealId: itemData.item.id,
            mealTitle: itemData.item.title,
            isFave: favoriteMeals.some(meal => meal.id === itemData.item.id),
          })
        }}
      />
    )
  }

  return (
    <View style={styles.list}>
      <FlatList
        data={listData}
        keyExtractor={(item: any, index) => item.id}
        renderItem={renderMealItem}
        style={{ width: '100%' }}
      />
    </View>
  )
}

const styles = StyleSheet.create({
  list: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 15,
  },
})

export default MealList
