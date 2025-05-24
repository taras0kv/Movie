import React, { useState } from 'react'
import { useParams } from 'react-router-dom'
import CinemaHall from '../components/CinemaHall'
import BookingForm from '../components/BookingForm'
import { ToastContainer, toast } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'
import { movies } from '../data/movies' // Імпортуємо список фільмів

const Booking = () => {
	const { id } = useParams()
	const [selectedSeats, setSelectedSeats] = useState([])
	const [showForm, setShowForm] = useState(false)

	// Знаходимо фільм за ID
	const movie = movies.find(m => m.id === parseInt(id))

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
			<div className='booking-header'>
				<h2 className='booking-title'>Оберіть місця для бронювання:</h2>
				<h2 className='movie-title'>{movie?.title}</h2>
			</div>

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
