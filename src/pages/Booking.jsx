import React from 'react'
import { useParams } from 'react-router-dom'
import CinemaHall from '../components/CinemaHall'

const Booking = () => {
	const { id } = useParams()

	return (
		<div className='booking-page'>
			<h2>Бронювання місць</h2>
			<CinemaHall />
		</div>
	)
}

export default Booking
