import React, { useState } from 'react'
import { useParams } from 'react-router-dom'
import CinemaHall from '../components/CinemaHall'
import BookingForm from '../components/BookingForm'
import { ToastContainer } from 'react-toastify'

const Booking = () => {
	const { id } = useParams()
	const [selectedSeats, setSelectedSeats] = useState([])
	const [showForm, setShowForm] = useState(false)

	const handleBookingSuccess = () => {
		setSelectedSeats([])
		setShowForm(false)
	}

	return (
		<div className='booking-page'>
			<CinemaHall movieId={id} />

			{selectedSeats.length > 0 && !showForm && (
				<button onClick={() => setShowForm(true)}>
					Забронювати вибрані місця
				</button>
			)}

			{showForm && (
				<BookingForm
					movieId={id}
					selectedSeats={selectedSeats}
					onSuccess={handleBookingSuccess}
				/>
			)}

			<ToastContainer />
		</div>
	)
}
