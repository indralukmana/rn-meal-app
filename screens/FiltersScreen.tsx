import React, { useState, useEffect, useCallback } from 'react'
import { View, Text, StyleSheet, Switch, Platform } from 'react-native'
import { HeaderButtons, Item } from 'react-navigation-header-buttons'
import CustomHeaderButton from '../components/HeaderButton'
import Colors from '../constants/Colors'

const FilterSwitch = ({ switchTitle, value, setValue }) => {
  return (
    <View style={styles.filterContainer}>
      <Text>{switchTitle}</Text>
      <Switch
        trackColor={{ true: Colors.primaryColor, false: '' }}
        thumbColor={Platform.OS === 'android' ? Colors.primaryColor : ''}
        value={value}
        onValueChange={newValue => setValue(newValue)}
      />
    </View>
  )
}

const FiltersScreen = ({ navigation }) => {
  const [isGlutenFree, setIsGlutenFree] = useState(false)
  const [isLactoseFree, setIsLactoseFree] = useState(false)
  const [isVegan, setIsVegan] = useState(false)
  const [isVegetarian, setIsVegetarian] = useState(false)

  const saveFilters = useCallback(() => {
    const appliedFilters = {
      glutenFree: isGlutenFree,
      lactoseFree: isLactoseFree,
      vegan: isVegan,
      vegetarian: isVegetarian,
    }
    console.log({ appliedFilters })
  }, [isGlutenFree, isLactoseFree, isVegan, isVegetarian])

  useEffect(() => {
    navigation.setParams({ save: saveFilters })
  }, [saveFilters])

  return (
    <View style={styles.screen}>
      <Text style={styles.title}>Available Filters</Text>
      <FilterSwitch
        switchTitle='Gluten Free'
        value={isGlutenFree}
        setValue={setIsGlutenFree}
      />
      <FilterSwitch
        switchTitle='Lactose Free'
        value={isLactoseFree}
        setValue={setIsLactoseFree}
      />
      <FilterSwitch switchTitle='Vegan' value={isVegan} setValue={setIsVegan} />
      <FilterSwitch
        switchTitle='Vegetarian'
        value={isVegetarian}
        setValue={setIsVegetarian}
      />
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
    headerRight: (
      <HeaderButtons HeaderButtonComponent={CustomHeaderButton}>
        <Item
          title='Filters'
          iconName='ios-save'
          onPress={navigationData.navigation.getParam('save')}
        />
      </HeaderButtons>
    ),
  }
}

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    alignItems: 'center',
  },
  title: {
    fontFamily: 'open-sans-bold',
    fontSize: 22,
    margin: 20,
    textAlign: 'center',
  },
  filterContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    width: '80%',
  },
})
export default FiltersScreen
