import React from 'react'
import { View, Text, StyleSheet } from 'react-native'

const FavoriteScreen = () => {
  return (
    <View>
      <Text>Favorite Screen</Text>
    </View>
  )
}

FavoriteScreen.navigationOptions = {
  headerTitle: 'Your Favorites',
}
const styles = StyleSheet.create({})

export default FavoriteScreen
