import React from 'react'
import { View, Text, StyleSheet, Button } from 'react-native'

const CategoryMealScreen = props => {
  return (
    <View>
      <Text>Category Meal Screen</Text>
      <Button
        title='Go to Meal Details'
        onPress={() => {
          props.navigation.navigate({ routeName: 'MealDetail' })
        }}
      />
    </View>
  )
}
const styles = StyleSheet.create({})

export default CategoryMealScreen
