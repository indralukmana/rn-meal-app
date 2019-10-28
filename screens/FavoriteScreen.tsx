import React from 'react'
import { StyleSheet } from 'react-native'
import MealList from '../components/MealList'
import { HeaderButtons, Item } from 'react-navigation-header-buttons'
import CustomHeaderButton from '../components/HeaderButton'
import { useSelector } from 'react-redux'

const FavoriteScreen = props => {
  const displayedMeals = useSelector((state: any) => state.meals.favoriteMeals)

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
