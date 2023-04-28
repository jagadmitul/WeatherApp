import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import { Feather } from '@expo/vector-icons'
import RowText from '../components/RowText'
import { weatherType } from '../utilities/weatherType'

const CurrentWeather = ({ weatherData }) => {
  const {
    wrapper,
    container,
    temperature,
    feels,
    highLowWrapper,
    highLow,
    bodyWrapper,
    description,
    message
  } = styles

  const {
    main: { temp, feels_like, temp_max, temp_min },
    weather
  } = weatherData
  const weatherCondition = weather[0]?.main

  return (
    <View
      style={[
        wrapper,
        { backgroundColor: weatherType[weatherCondition]?.backgroundColor }
      ]}
    >
      <View style={container}>
        <Feather
          name={weatherType[weatherCondition]?.icon}
          size={100}
          color="white"
        />
        <Text style={temperature}>{`${temp}°`}</Text>
        <Text style={feels}>{`Feels like ${feels_like}°`}</Text>
        <RowText
          messageOne={`High: ${temp_max}° `}
          messageTwo={`Low: ${temp_min}°`}
          containerStyles={highLowWrapper}
          messageOneStyles={highLow}
          messageTwoStyles={highLow}
        />
      </View>
      <RowText
        messageOne={weather[0]?.description}
        messageTwo={weatherType[weatherCondition]?.message}
        containerStyles={bodyWrapper}
        messageOneStyles={description}
        messageTwoStyles={message}
      />
    </View>
  )
}

const styles = StyleSheet.create({
  wrapper: {
    flex: 1,
    opacity: 0.5,
    backgroundColor: 'pink'
  },
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center'
  },
  temperature: {
    fontSize: 48
  },
  feels: {
    fontSize: 30
  },
  highLowWrapper: {
    flexDirection: 'row'
  },
  highLow: {
    fontSize: 20
  },
  bodyWrapper: {
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 40
  },
  description: {
    fontSize: 35
  },
  message: {
    fontSize: 20
  }
})

export default CurrentWeather
