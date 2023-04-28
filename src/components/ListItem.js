import React from 'react'
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native'
import { Feather } from '@expo/vector-icons'
import { weatherType } from '../utilities/weatherType'
import dayjs from 'dayjs'

const ListItem = (props) => {
  const { dt_txt, min, max, condition } = props
  const { item, date, temp, dateTextWrapper } = styles

  return (
    <TouchableOpacity style={item}>
      <Feather name={weatherType[condition]?.icon} size={50} color={'white'} />
      <View style={dateTextWrapper}>
        <Text style={date}>{dayjs(dt_txt).format('dddd')}</Text>
        <Text style={date}>{dayjs(dt_txt).format('hh:mm:ss A')}</Text>
      </View>
      <Text style={temp}>{`${Math.round(min)}° / ${Math.round(max)}°`}</Text>
    </TouchableOpacity>
  )
}

const styles = StyleSheet.create({
  item: {
    padding: 20,
    marginVertical: 8,
    marginHorizontal: 16,
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
    borderWidth: 1,
    backgroundColor: 'indianred'
  },
  temp: {
    color: 'white',
    fontSize: 20
  },
  date: {
    color: 'white',
    fontSize: 15
  },
  dateTextWrapper: {
    flexDirection: 'column'
  }
})

export default ListItem
