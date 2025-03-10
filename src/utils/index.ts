import type { Weather, ProcessedWeather, WeatherEntry, WeatherList } from '../@types'

export const request = async <T>(...params: Parameters<typeof fetch>): Promise<T> => {
  const response = await fetch(...params)
  if (!response.ok) throw new Error(response.statusText)

  const data: T = await response.json()
  if (Array.isArray(data) && data.length === 0) throw new Error(response.statusText)
  return data
}

export const getCurrentTime = () => {
  const hours = new Date().getHours().toString().padStart(2, '0')
  const minutes = new Date().getMinutes().toString().padStart(2, '0')
  return `${hours}:${minutes}`
}

export const formatUnixTimestamp = (unixTimestamp: number): string => {
  const date = new Date(unixTimestamp * 1000)

  let hours = date.getHours()
  const minutes = date.getMinutes()

  const period = hours >= 12 ? 'PM' : 'AM'

  hours = hours % 12
  if (hours === 0) {
    hours = 12
  }

  const hoursString = hours.toString().padStart(2, '0')
  const minutesString = minutes.toString().padStart(2, '0')

  return `${hoursString}:${minutesString} ${period}`
}

export const currentDay = () => {
  const date = new Date()
  const dayOfWeek = date.toLocaleString('en-US', { weekday: 'long' })
  const dayOfMonth = date.getDate()
  const month = date.toLocaleString('en-US', { month: 'short' })

  return `${dayOfWeek}, ${dayOfMonth} ${month}`
}

export const formatDate = (dateStr: string): string => {
  const date = new Date(dateStr)

  const options: Intl.DateTimeFormatOptions = {
    weekday: 'short',
    day: 'numeric',
    month: 'short',
  }

  return date.toLocaleDateString('en-US', options)
}

export const groupWeather = (weather: Weather): ProcessedWeather => {
  const grouped: Record<string, WeatherEntry[]> = weather.list.reduce(
    (acc, item) => {
      const date = item.dt_txt.split(' ')[0]
      if (!acc[date]) acc[date] = []
      acc[date].push(item)
      return acc
    },
    {} as Record<string, WeatherEntry[]>,
  )

  const days: WeatherList[] = Object.entries(grouped)
    .map(([date, items]) => ({ date, items }))
    .sort((a, b) => a.date.localeCompare(b.date))

  const today = days[0]
  const list = days.slice(1)
  const { name, sunrise, sunset } = weather.city

  return { today, list, city: { name, sunrise, sunset } }
}

export const capitalize = (city?: string): string => {
  if (!city || !city.trim()) return ''

  return city
    .trim()
    .split(' ')
    .map(el => el[0].toUpperCase() + el.slice(1))
    .join(' ')
}
