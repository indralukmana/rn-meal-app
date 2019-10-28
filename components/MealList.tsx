import React from 'react'
import { View, FlatList, StyleSheet } from 'react-native'
import MealItem from './MealItem'

const MealList = ({ listData, navigation }) => {
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
