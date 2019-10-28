import React, { useEffect, useState } from 'react'
import { StyleSheet, Text, View } from 'react-native'

import { useScreens } from 'react-native-screens'

import { AppLoading } from 'expo'

import { createStore, combineReducers } from 'redux'
import { Provider } from 'react-redux'

import * as Font from 'expo-font'
import MealsNavigator from './navigation/MealsNavigator'
import mealsReducer from './store/reducers/meals'

useScreens()

const rootReducer = combineReducers({
  meals: mealsReducer,
})
const store = createStore(rootReducer)

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

  return (
    <Provider store={store}>
      <MealsNavigator />
    </Provider>
  )
}
