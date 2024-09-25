import React from 'react'

export default function search({ submit }: { submit: (event: React.FormEvent) => void }) {
    return (
        <form className='mb-8' onSubmit={submit}>
            <div className='flex border-2 border-blue-500 w-full md:w-96'>
                <input className='appearance-none w-full px-1 leading-tight focus:outline-none' type='text' name='term' placeholder='Search the location' autoComplete='off' />
                <button className='flex-shrink-0 bg-blue-500 hover:bg-blue-700 text-sm border text-white py-1 px-2 rounded' type='submit'>
                    Submit
                </button>
            </div>
        </form>
    )
}
