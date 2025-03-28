export type WeatherEntry = {
  dt: number
  main: {
    temp: number
    feels_like: number
    temp_min: number
    temp_max: number
    pressure: number
    sea_level: number
    grnd_level: number
    humidity: number
    temp_kf: number
  }
  weather: Array<{
    id: number
    main: string
    description: string
    icon: string
  }>
  clouds: {
    all: number
  }
  wind: {
    speed: number
    deg: number
    gust: number
  }
  visibility: number
  pop: number
  sys: {
    pod: string
  }
  dt_txt: string
}

export type Weather = {
  list: Array<WeatherEntry>
  city: {
    name: string
    sunrise: number
    sunset: number
    timezone: number
  }
}

export type WeatherList = {
  date: string
  items: Array<WeatherEntry>
}

export type ProcessedWeather = {
  today: WeatherList
  list: Array<WeatherList>
  city: Weather['city']
}

export type City = {
  name: string
  lat: number
  lon: number
  country: string
  state: string
}
