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

CategoriesScreen.navigationOptions = {}

const styles = StyleSheet.create({})

export default CategoriesScreen
