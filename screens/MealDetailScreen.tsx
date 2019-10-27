import React from 'react'
import { View, Text, StyleSheet, Button } from 'react-native'

const MealDetailScreen = props => {
  return (
    <View>
      <Text>Meal Detail Screen</Text>
      <Button
        title='Back to Home'
        onPress={() => {
          props.navigation.popToTop()
        }}
      />
    </View>
  )
}

const styles = StyleSheet.create({})

export default MealDetailScreen
