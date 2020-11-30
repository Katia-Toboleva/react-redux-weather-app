# react-redux-weather-app


{location: {…}, current: {…}}
current:
cloud: 75
condition: {text: "Partly cloudy", icon: "//cdn.weatherapi.com/weather/64x64/night/116.png", code: 1003}
feelslike_c: 8
feelslike_f: 46.4
gust_kph: 2.2
gust_mph: 1.3
humidity: 93
is_day: 0
last_updated: "2020-11-30 10:45"
last_updated_epoch: 1606729517
precip_in: 0
precip_mm: 0
pressure_in: 30.8
pressure_mb: 1025
temp_c: 8
temp_f: 46.4
uv: 1
vis_km: 10
vis_miles: 6
wind_degree: 90
wind_dir: "E"
wind_kph: 6.1
wind_mph: 3.8
__proto__: Object



location:
country: "Spain"
lat: 43.25
localtime: "2020-11-30 11:09"
localtime_epoch: 1606730987
lon: -2.97
name: "Bilbao"
region: "Pais Vasco"
tz_id: "Europe/Madrid"


payload: {
    location: data.location.name,
    temperature: {
      metric: data.current.temp_c,
      imperial: data.current.temp_f,
    },
    conditions: {
      condition: data.current.condition.text,
      conditionCode: data.current.condition.code,
      isDay: data.current.is_day,
    },
  },
