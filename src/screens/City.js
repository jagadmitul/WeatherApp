import React from 'react'
import { StyleSheet, View, Text, ImageBackground } from 'react-native'
import IconText from '../components/IconText'
import dayjs from 'dayjs'

const City = ({ weatherData }) => {
  const {
    cityName,
    cityText,
    countryName,
    imageLayout,
    populationWrapper,
    populationText,
    riseSetWrapper,
    riseSetText,
    rowLayout
  } = styles

  const { name, country, population, sunrise, sunset } = weatherData

  return (
    <View style={imageLayout}>
    {/* // <ImageBackground
    //   source={require('../../assets/city-background.jpg')}
    //   style={imageLayout}
    // > */}
      <Text style={[cityName, cityText]}>{name}</Text>
      <Text style={[countryName, cityText]}>{country}</Text>
      <View style={[populationWrapper, rowLayout]}>
        <IconText
          iconName={'user'}
          iconColor={'red'}
          bodyText={`Population: ${population}`}
          bodyTextStyles={populationText}
        />
      </View>
      <View style={[riseSetWrapper, rowLayout]}>
        <IconText
          iconName={'sunrise'}
          iconColor={'white'}
          bodyText={dayjs.unix(sunrise).format('hh:mm:ss A')}
          bodyTextStyles={riseSetText}
        />
        <IconText
          iconName={'sunset'}
          iconColor={'white'}
          bodyText={dayjs.unix(sunset).format('hh:mm:ss A')}
          bodyTextStyles={riseSetText}
        />
      </View>
    {/* </ImageBackground> */}
    </View>
  )
}

const styles = StyleSheet.create({
  imageLayout: {
    flex: 1,
    backgroundColor: 'orange'
  },
  cityName: {
    fontSize: 40
  },
  countryName: {
    fontSize: 30
  },
  cityText: {
    justifyContent: 'center',
    alignSelf: 'center',
    color: 'white',
    fontWeight: 'bold'
  },
  populationWrapper: {
    justifyContent: 'center',
    marginTop: 30
  },
  populationText: {
    fontSize: 25,
    marginLeft: 7.5,
    color: 'red'
  },
  riseSetWrapper: {
    justifyContent: 'space-around',
    marginTop: 30
  },
  rowLayout: {
    flexDirection: 'row',
    alignItems: 'center'
  },
  riseSetText: {
    fontSize: 20,
    color: 'white'
  }
})

export default City
