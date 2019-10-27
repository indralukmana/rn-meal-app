import React, { useEffect, useState } from 'react'
import { StyleSheet, Text, View } from 'react-native'

import { AppLoading } from 'expo'

import * as Font from 'expo-font'
import MealsNavigator from './navigation/MealsNavigator'

export default function App() {
  const [fontLoaded, setFontLoaded] = useState(false)

  const fontLoad = () =>
    Font.loadAsync({
      'open-sans': require('./assets/fonts/OpenSans-Regular.ttf'),
      'open-sans-bold': require('./assets/fonts/OpenSans-Bold.ttf'),
    })

  if (!fontLoaded) {
    return (
      <AppLoading
        startAsync={fontLoad}
        onFinish={() => setFontLoaded(true)}
        onError={error => console.log(error)}
      />
    )
  }

  return <MealsNavigator />
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
})
