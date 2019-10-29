import React from 'react'
import { StyleSheet, View, Text } from 'react-native'
import MealList from '../components/MealList'
import { HeaderButtons, Item } from 'react-navigation-header-buttons'
import CustomHeaderButton from '../components/HeaderButton'
import { useSelector } from 'react-redux'

const FavoriteScreen = props => {
  const displayedMeals = useSelector((state: any) => state.meals.favoriteMeals)

  if (displayedMeals.length === 0 || !displayedMeals) {
    return (
      <View style={styles.screen}>
        <Text>No favorite meals found. Start adding some!</Text>
      </View>
    )
  }

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

const styles = StyleSheet.create({
  screen: { flex: 1, justifyContent: 'center', alignItems: 'center' },
})

export default FavoriteScreen
