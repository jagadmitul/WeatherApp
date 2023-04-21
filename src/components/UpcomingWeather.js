import React from 'react'
import { StyleSheet, View, Text, FlatList } from 'react-native'
import { upcomingWeather } from '../../data/dummy-weather'
import { Feather } from '@expo/vector-icons'

const Item = (props) => {
  const { dt_text, min, max, condition } = props

  return (
    <View style={styles.item}>
      <Feather name="sun" size={50} color="white" />
      <Text style={styles.date}>{dt_text}</Text>
      <Text style={styles.temp}>{min}</Text>
      <Text style={styles.temp}>{max}</Text>
    </View>
  )
}

const UpcomingWeather = () => {
  const renderItem = ({ item }) => {
    return (
      <Item
        dt_text={item.dt_txt}
        min={item.main.temp_min}
        max={item.main.temp_max}
        condition={item.weather[0].main}
      />
    )
  }

  return (
    <View style={styles.container}>
      <Text>Upcoming Weather</Text>
      <FlatList data={upcomingWeather} renderItem={renderItem} />
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'red'
  },
  item: {
    padding: 20,
    marginVertical: 8,
    marginHorizontal: 16,
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
    borderWidth: 5,
    backgroundColor: 'pink'
  },
  date: {
    color: 'white',
    fontSize: 15
  },
  temp: {
    color: 'white',
    fontSize: 15
  }
})

export default UpcomingWeather
