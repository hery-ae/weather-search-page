import React from 'react'

export default function weather({ data }: { data: any }) {
    if (data.error) {
        return (
            <div className='col-span-2 border rounded overflow-hidden shadow'>
                <div className='w-fit mx-auto py-3'>
                    <h3 className='text-5xl text-center my-5'>{data.error}</h3>
                </div>
            </div>
        )
    }

    return (
        <div className='grid grid-cols-2 gap-4'>
            <div className='col-span-2 border rounded overflow-hidden shadow'>
                <div className='w-fit mx-auto py-3'>
                    <h2 className='text-2xl text-center font-bold mb-3'>{data.name}</h2>
                    <h3 className='text-5xl text-center mb-2'>{(data.main.temp - 273.15).toFixed()}&deg;C</h3>
                    <h3 className='text-xl text-center mb-3'>{(1.8 * (data.main.temp - 273.15) + 32).toFixed()}&deg;F</h3>
                    <img src={('https://openweathermap.org/img/wn/').concat(data.weather[0].icon).concat('@2x.png')} alt={data.weather[0].main} className='mx-auto' />
                    <p className='text-2xl text-center font-semibold'>{data.weather[0].main}</p>
                    {
                        data.weather[0].main.toLowerCase() !== data.weather[0].description.toLowerCase() && (
                            <p className='text-xl text-center font-normal mb-4 first-letter:uppercase'>{data.weather[0].description}</p>
                        )
                    }
                </div>
            </div>
            <div className='border rounded overflow-hidden shadow'>
                <div className='mx-4 py-3'>
                    <h2 className='text-gray-400 text-xl font-bold mb-3'>Humidity</h2>
                    <h3 className='text-4xl font-bold mb-3'>{data.main.humidity}&#37;</h3>
                </div>
            </div>
            <div className='border rounded overflow-hidden shadow'>
                <div className='mx-4 py-3'>
                    <h2 className='text-gray-400 text-xl font-bold mb-3'>Wind Speed</h2>
                    <h3 className='text-4xl font-bold'>{data.wind.speed}</h3>
                    <h3 className='text-gray-500 text-2xl mb-3'>m/s</h3>
                </div>
            </div>
        </div>
    )
}
