import React, { useState, useEffect } from 'react'
import * as Location from 'expo-location'
import { OPEN_WEATHER_API_KEY } from '@env'

export const useGetWeather = () => {
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(null)
  const [weather, setWeather] = useState([])
  const [lat, setLat] = useState([])
  const [lng, setLng] = useState([])

  const fetchWeatherData = async () => {
    try {
      const res = await fetch(
        `http://api.openweathermap.org/data/2.5/forecast?lat=${lat}&lon=${lng}&appid=${OPEN_WEATHER_API_KEY}`
      )
      const data = await res.json()
      setWeather(data)
    } catch (err) {
      setError('could not fetch weather')
    } finally {
      setLoading(false)
    }
  }

  const locationPermission = async () => {
    let { status } = await Location.requestForegroundPermissionsAsync()
    console.log(status)
    if (status !== 'granted') {
      setError('Permission to access location denied')
      return
    }
    let location = await Location.getCurrentPositionAsync()
    console.log(location)
    setLat(location.coords.latitude)
    setLng(location.coords.longitude)

    await fetchWeatherData()
  }

  useEffect(() => {
    locationPermission()
  }, [lat, lng])
  return [loading, error, weather]
}
