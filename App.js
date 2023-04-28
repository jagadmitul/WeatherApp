import React from 'react'
import { StatusBar as ExpoStatusBar } from 'expo-status-bar'
import {
  ActivityIndicator,
  Platform,
  StatusBar,
  StyleSheet,
  View
} from 'react-native'
import { NavigationContainer } from '@react-navigation/native'
import Tabs from './src/components/Tabs'
import { useGetWeather } from './src/hooks/useGetWeather'
import ErrorItem from './src/components/ErrorItem'

const App = () => {
  const [loading, error, weather] = useGetWeather()

  if (weather && weather.list && !loading) {
    return (
      <NavigationContainer>
        <Tabs weather={weather} />
        <ExpoStatusBar style="auto" />
      </NavigationContainer>
    )
  }

  return (
    <View style={styles.container}>
      {error ? (
        <ErrorItem error={error} />
      ) : (
        <ActivityIndicator size="large" color="blue" />
      )}
    </View>
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
