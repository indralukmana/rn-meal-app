import React from 'react'
import {
  Platform,
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  FlatList,
} from 'react-native'
import { CATEGORIES } from '../data/dummy-data'
import Colors from '../constants/Colors'
import CategoryGridTile from '../components/CategoryGridTile'
import { HeaderButtons, Item } from 'react-navigation-header-buttons'
import CustomHeaderButton from '../components/HeaderButton'
const CategoriesScreen = props => {
  const renderGridItem = itemData => {
    return (
      <CategoryGridTile
        title={itemData.item.title}
        color={itemData.item.color}
        onSelect={() =>
          props.navigation.navigate('CategoryMeals', {
            categoryId: itemData.item.id,
          })
        }
      />
    )
  }

  return (
    <FlatList
      data={CATEGORIES}
      renderItem={renderGridItem}
      numColumns={2}
      keyExtractor={item => item.id}
    />
  )
}

CategoriesScreen.navigationOptions = navigationData => {
  return {
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

export default CategoriesScreen
