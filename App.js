import React from 'react'
import { StatusBar as ExpoStatusBar } from 'expo-status-bar'
import { Platform, SafeAreaView, StatusBar, StyleSheet } from 'react-native'
import CurrentWeather from './src/components/CurrentWeather'
import UpcomingWeather from './src/components/UpcomingWeather'

const App = () => {
  return (
    <SafeAreaView style={styles.wrapper}>
      {/* <CurrentWeather /> */}
      <UpcomingWeather />
      <ExpoStatusBar style="auto" />
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  wrapper: {
    flex: 1,
    paddingTop: Platform.OS === 'android' ? StatusBar.currentHeight : 0,
    backgroundColor: 'pink'
  }
})

export default App
