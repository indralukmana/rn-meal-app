import React from 'react'
import { View, Text, StyleSheet } from 'react-native'
import { HeaderButtons, Item } from 'react-navigation-header-buttons'
import CustomHeaderButton from '../components/HeaderButton'

const FiltersScreen = () => {
  return (
    <View>
      <Text>Filters Screen</Text>
    </View>
  )
}

FiltersScreen.navigationOptions = navigationData => {
  return {
    headerTitle: 'Filter Meals',
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
export default FiltersScreen
