import React, { useEffect, useState } from 'react'
import { StatusBar as ExpoStatusBar } from 'expo-status-bar'
import {
  ActivityIndicator,
  Platform,
  SafeAreaView,
  StatusBar,
  StyleSheet,
  View
} from 'react-native'
import { NavigationContainer } from '@react-navigation/native'
import Tabs from './src/components/Tabs'
import * as Location from 'expo-location'
import { OPEN_WEATHER_API_KEY } from '@env'
import { useGetWeather } from './src/hooks/useGetWeather'

const App = () => {
  const [loading, error, weather] = useGetWeather()

  console.log(weather)
  console.log(loading)
  console.log(error)

  if (loading) {
    return (
      <View style={styles.container}>
        <ActivityIndicator size="large" color="blue" />
      </View>
    )
  }
  return (
    <SafeAreaView style={styles.wrapper}>
      <NavigationContainer>
        <Tabs />
        <ExpoStatusBar style="auto" />
      </NavigationContainer>
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  wrapper: {
    flex: 1,
    paddingTop: Platform.OS === 'android' ? StatusBar.currentHeight : 0
  },
  container: {
    flex: 1,
    justifyContent: 'center'
  }
})

export default App
