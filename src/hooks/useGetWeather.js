import React, { useState, useEffect } from 'react'
import * as Location from 'expo-location'
import { WEATHER_API_KEY } from '@env'

export const useGetWeather = () => {
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(null)
  const [weather, setWeather] = useState([])
  const [lat, setLat] = useState([])
  const [lng, setLng] = useState([])

  const fetchWeatherData = async () => {
    try {
      const res = await fetch(
        `http://api.openweathermap.org/data/2.5/forecast?lat=${lat}&lon=${lng}&appid=${WEATHER_API_KEY}&units=metric`
      )
      const data = await res.json()
      setWeather(data)
    } catch (err) {
      setError(err.message ? err.message : 'Sorry something went wrong!')
    } finally {
      setLoading(false)
    }
  }

  const locationPermission = async () => {
    let { status } = await Location.requestForegroundPermissionsAsync()
    if (status !== 'granted') {
      setError('Permission to access location denied')
      return
    }
    let location = await Location.getCurrentPositionAsync()
    setLat(location.coords.latitude)
    setLng(location.coords.longitude)

    await fetchWeatherData()
  }

  useEffect(() => {
    locationPermission()
  }, [lat, lng])
  return [loading, error, weather]
}
