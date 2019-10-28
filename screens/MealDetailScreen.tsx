import React from 'react'
import { View, Text, StyleSheet, Button, ScrollView, Image } from 'react-native'
import { MEALS } from '../data/dummy-data'
import { HeaderButtons, Item } from 'react-navigation-header-buttons'
import CustomHeaderButton from '../components/HeaderButton'

const MealDetailScreen = props => {
  const mealId = props.navigation.getParam('mealId')

  const selectedMeal = MEALS.find(meal => meal.id === mealId)

  return (
    <ScrollView>
      <Image source={{ uri: selectedMeal.imageUrl }} style={styles.image} />
      <View style={styles.details}>
        <Text>{selectedMeal.duration}m</Text>
        <Text>{selectedMeal.complexity.toUpperCase()}</Text>
        <Text>{selectedMeal.affordability.toUpperCase()}</Text>
      </View>
      <Text style={styles.title}>Ingredients</Text>
      {selectedMeal.ingredients.map(ingredient => (
        <View key={ingredient} style={styles.listItem}>
          <Text>{ingredient}</Text>
        </View>
      ))}
      <Text style={styles.title}>Steps</Text>
      {selectedMeal.steps.map(step => (
        <View key={step} style={styles.listItem}>
          <Text>{step}</Text>
        </View>
      ))}
    </ScrollView>
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

const styles = StyleSheet.create({
  title: { fontFamily: 'open-sans-bold', textAlign: 'center' },
  details: {
    flexDirection: 'row',
    padding: 15,
    justifyContent: 'space-around',
  },
  image: {
    width: '100%',
    height: 200,
  },
  listItem: {
    marginVertical: 10,
    marginHorizontal: 20,
    borderColor: '#ccc',
    borderWidth: 1,
    padding: 10,
  },
})

export default MealDetailScreen
