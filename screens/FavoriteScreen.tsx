import React from 'react'
import { View, Text, StyleSheet } from 'react-native'
import { MEALS } from '../data/dummy-data'
import MealList from '../components/MealList'
import { HeaderButtons, Item } from 'react-navigation-header-buttons'
import CustomHeaderButton from '../components/HeaderButton'

const FavoriteScreen = props => {
  const displayedMeals = MEALS.filter(
    meal => meal.id === 'm1' || meal.id === 'm2'
  )

  return <MealList listData={displayedMeals} navigation={props.navigation} />
}

FavoriteScreen.navigationOptions = navigationData => {
  return {
    headerTitle: 'Your Favorites',
    headerLeft: (
      <HeaderButtons HeaderButtonComponent={CustomHeaderButton}>
        <Item
          title='Filters'
          iconName='ios-menu'
          onPress={() => navigationData.navigation.toggleDrawer()}
        />
      </HeaderButtons>
    ),
  }
}

const styles = StyleSheet.create({})

export default FavoriteScreen
