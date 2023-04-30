import React from 'react'
import { StyleSheet, View, Text, FlatList, ImageBackground } from 'react-native'
import { upcomingWeather } from '../../data/dummy-weather'
import ListItem from '../components/ListItem'

const UpcomingWeather = ({ weatherData }) => {
  const renderItem = ({ item }) => {
    return (
      <ListItem
        dt_txt={item.dt_txt}
        min={item.main.temp_min}
        max={item.main.temp_max}
        condition={item.weather[0].main}
      />
    )
  }

  const { image, container } = styles

  return (
    <View style={container}>
      {/* <ImageBackground
        source={require('../../assets/upcoming-background-1.jpg')}
        style={image}
      > */}
        <FlatList data={weatherData} renderItem={renderItem} />
      {/* </ImageBackground> */}
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'lightskyblue'
  },
  item: {
    padding: 20,
    marginVertical: 8,
    marginHorizontal: 16,
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
    borderWidth: 1,
    borderRadius: 5,
    backgroundColor: 'royalblue'
  },
  date: {
    color: 'white',
    fontSize: 15
  },
  temp: {
    color: 'white',
    fontSize: 15
  },
  image: {
    flex: 1
  }
})

export default UpcomingWeather
