import { useState, useEffect } from 'react'
import axios from 'axios'

const App = () => {
  const [countries, setCountries] = useState([])
  const [search, setSearch] = useState('')
  const [weather, setWeather] = useState({})
  const api_key = process.env.REACT_APP_API_KEY
  useEffect(() => {
    axios.get('https://restcountries.com/v2/all').then(response => setCountries(response.data))
  }, [])

  const hook = (capital) => {
    axios.get(`http://api.openweathermap.org/data/2.5/weather?q=${capital}&appid=${api_key}`).then(res => setWeather(res.data))
  }
  useEffect(hook, [])

  const handleSearch = (event) => {
    setSearch(event.target.value)
  }

  const filtered = countries.filter(country => country.name.toLowerCase().includes(search.toLowerCase()))

  const display =
    filtered.length > 10 ?
      'Too many matches, specify another filter'
      : filtered.length <= 10 && filtered.length > 1
        ? filtered.map(country => <p>{country.name} <button value={country.name} onClick={handleSearch}>show</button></p>)
        : filtered.map(country =>
          <div>
            <h1>{country.name}</h1>
            <p>capital {country.capital}</p>
            <p>population {country.population}</p>
            <h2>Spoken languages</h2>
            <ul>
              {country.languages.map(language =>
                <li>{language.name}</li>)}</ul>
            <img style={{ width: '10rem' }} src={country.flag} alt="flag" /> <h2>Weather in {country.capital}</h2> {hook(country.capital)}
            <p>wind {weather.wind.speed}</p>
            <p>temperature {weather.main.temp}</p>
          </div>)
  console.log(weather);
  return (
    <div>
      <p>find countries <input value={search} onChange={handleSearch} /></p>
      {search && display}
    </div>
  )
}

export default App
