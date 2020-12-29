import React from 'react'
import './style.scss'

const HelloWorld = () => {
	return (
		<div className='flex flex-col justify-center items-center select-none min-h-screen bg-gradient-to-br from-gray-900  to-blue-700'>
			<h1 className='text-6xl text-green-300 border-b-4 pb-4'>Hello World !</h1>
			<h2 className='text-2xl text-gray-300 mt-10'>Start Building with Tailwind and ReactJs right now!</h2>
		</div>
	)
}

export default HelloWorld
