import React, { useState } from 'react'
import { useParams } from 'react-router-dom'
import CinemaHall from '../components/CinemaHall'
import BookingForm from '../components/BookingForm'
import { ToastContainer, toast } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'

const Booking = () => {
	const { id } = useParams()
	const [selectedSeats, setSelectedSeats] = useState([])
	const [showForm, setShowForm] = useState(false)

	const handleSeatsSelected = seats => {
		setSelectedSeats(seats)
	}

	const handleBookingSuccess = () => {
		setSelectedSeats([])
		setShowForm(false)
		toast.success('Бронювання успішно завершено!')
	}

	return (
		<div className='booking-page'>
			<h2>Оберіть місця для бронювання</h2>

			<CinemaHall movieId={id} onSeatsSelected={handleSeatsSelected} />

			{selectedSeats.length > 0 && !showForm && (
				<button className='book-button' onClick={() => setShowForm(true)}>
					Забронювати вибрані місця ({selectedSeats.length})
				</button>
			)}

			{showForm && (
				<BookingForm
					movieId={id}
					selectedSeats={selectedSeats}
					onSuccess={handleBookingSuccess}
				/>
			)}

			<ToastContainer position='top-center' autoClose={3000} />
		</div>
	)
}

export default Booking
