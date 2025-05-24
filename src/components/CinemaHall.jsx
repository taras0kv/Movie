import React, { useState, useEffect } from 'react'
import { getBookingsForMovie } from '../services/BookingService'
import '../styles/CinemaHall.css'

const CinemaHall = ({ movieId, onSeatsSelected }) => {
	const [selectedSeats, setSelectedSeats] = useState([])
	const [bookedSeats, setBookedSeats] = useState([])

	useEffect(() => {
		const booked = getBookingsForMovie(movieId)
		setBookedSeats(booked)
	}, [movieId])

	const toggleSeat = seatId => {
		if (bookedSeats.includes(seatId)) return

		setSelectedSeats(prev =>
			prev.includes(seatId)
				? prev.filter(id => id !== seatId)
				: [...prev, seatId]
		)
	}

	useEffect(() => {
		onSeatsSelected(selectedSeats)
	}, [selectedSeats, onSeatsSelected])

	const renderSeats = () => {
		const seats = []
		for (let row = 1; row <= 5; row++) {
			const rowSeats = []
			for (let seatNum = 1; seatNum <= 10; seatNum++) {
				const seatId = `R${row}S${seatNum}`
				const isBooked = bookedSeats.includes(seatId)
				const isSelected = selectedSeats.includes(seatId)

				let seatClass = 'seat'
				if (isBooked) seatClass += ' booked'
				if (isSelected) seatClass += ' selected'
				if (!isBooked && !isSelected) seatClass += ' available'

				rowSeats.push(
					<div
						key={seatId}
						className={seatClass}
						onClick={() => !isBooked && toggleSeat(seatId)}
						title={isBooked ? 'Вже заброньовано' : `Місце ${seatId}`}
					>
						{seatNum}
					</div>
				)
			}
			seats.push(
				<div key={`row-${row}`} className='seat-row'>
					<div className='row-label'>Ряд {row}</div>
					{rowSeats}
				</div>
			)
		}
		return seats
	}

	return (
		<div className='cinema-hall-container'>
			<div className='screen'>ЕКРАН</div>
			<div className='seats-grid'>{renderSeats()}</div>

			<div className='seats-legend'>
				<div className='legend-item'>
					<div className='legend-color available'></div>
					<span>Вільні</span>
				</div>
				<div className='legend-item'>
					<div className='legend-color selected'></div>
					<span>Вибрані</span>
				</div>
				<div className='legend-item'>
					<div className='legend-color booked'></div>
					<span>Заброньовані</span>
				</div>
			</div>

			{selectedSeats.length > 0 && (
				<div className='selected-seats-info'>
					<h4>Вибрано місць: {selectedSeats.length}</h4>
					<p>{selectedSeats.join(', ')}</p>
				</div>
			)}
		</div>
	)
}

export default CinemaHall
