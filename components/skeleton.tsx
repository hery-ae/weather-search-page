import React from 'react'

export default function skeleton() {
    return (
        <div role='status' className='border rounded overflow-hidden shadow animate-pulse'>
            <div className='h-4 w-60 max-w-full bg-gray-200 rounded-full dark:bg-gray-700 mx-auto my-3'></div>
            <div className='h-40 w-60 max-w-full bg-gray-200 rounded dark:bg-gray-700 mx-auto my-3'></div>
        </div>
    )
}
