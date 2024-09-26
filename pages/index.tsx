import React from 'react'
import { createRoot } from 'react-dom/client'
import Search from '../components/search'
import Skeleton from '../components/skeleton'
import Weather from '../components/weather'

import '../styles/app.css'

const rootElem = document.createElement('div')
rootElem.id = 'app'

document.body.appendChild(rootElem)

createRoot(
    document.getElementById('app') as HTMLElement
)
.render(
    <App title='Weather Search Page' />
)

function App({ title }: { title: string }) {
    const [spinnerIsHidden, setSpinnerIsHidden] = React.useState<boolean>(true)
    const [weatherData, setWeatherData] = React.useState<any>(null)

    const getWeather = (event: React.FormEvent) => {
        event.preventDefault()

        const formData = new FormData(event.currentTarget as HTMLFormElement)
        const term = formData.get('term') as string

        if (!term) return term

        document.querySelector('.container')?.classList.replace('pt-20', 'pt-4')

        setSpinnerIsHidden(false)
        setWeatherData(null)

        fetch(
            ('https://api.openweathermap.org/data/2.5/weather').concat('?').concat(
                new URLSearchParams({
                    appid: 'c7dfc08e7453fbc4015cea5b2ca5ba34',
                    q: term
                })
                .toString()
            )
        )
        .then(
            (res) => {
                setSpinnerIsHidden(true)

                if (!res.ok) {
                    return setWeatherData({ error: res.statusText })
                }

                res.json()
                .then(
                    (value) => {
                        setWeatherData(value)
                    }
                )

            }
        )
    }

    return (
        <div className='container max-w-3xl mx-auto px-2 pt-20'>
            <h1 className='mb-3 font-bold'>
                <a href='javascript:window.location.reload()'>
                    {title}
                </a>
            </h1>
            <Search submit={getWeather} />
            {!spinnerIsHidden && <Skeleton />}
            {weatherData !== null && <Weather data={weatherData} />}
        </div>
    )
}
