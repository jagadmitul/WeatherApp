import React from 'react'
import { StyleSheet, View, Text, ImageBackground } from 'react-native'
import IconText from '../components/IconText'

const City = () => {
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

  return (
    <ImageBackground
      source={require('../../assets/city-background.jpg')}
      style={imageLayout}
    >
      <Text style={[cityName, cityText]}>Surat</Text>
      <Text style={[countryName, cityText]}>Ahmedabad</Text>
      <View style={[populationWrapper, rowLayout]}>
        <IconText
          iconName={'user'}
          iconColor={'red'}
          bodyText={`Population: `}
          bodyTextStyles={populationText}
        />
      </View>
      <View style={[riseSetWrapper, rowLayout]}>
        <IconText
          iconName={'sunrise'}
          iconColor={'white'}
          bodyText="10:46:58AM"
          bodyTextStyles={riseSetText}
        />
        <IconText
          iconName={'sunset'}
          iconColor={'white'}
          bodyText="17:19:58PM"
          bodyTextStyles={riseSetText}
        />
      </View>
    </ImageBackground>
  )
}

const styles = StyleSheet.create({
  imageLayout: {
    flex: 1
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
