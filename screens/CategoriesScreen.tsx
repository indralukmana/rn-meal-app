import React from 'react'
import { View, Text, StyleSheet, Button } from 'react-native'

const CategoriesScreen = props => {
  return (
    <View>
      <Text>Categories Screen</Text>
      <Button
        title='Go to meals'
        onPress={() => {
          props.navigation.navigate('CategoryMeals')
        }}
      />
    </View>
  )
}

const styles = StyleSheet.create({})

export default CategoriesScreen
