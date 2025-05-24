import React, { useState } from 'react'
import './styles/CinemaHall.css'

const CinemaHall = ({ movieId }) => {
	const [selectedSeats, setSelectedSeats] = useState([])

	// Генеруємо місця (5 рядів по 10 місць)
	const rows = 5
	const seatsPerRow = 10

	const toggleSeat = seatId => {
		setSelectedSeats(prev =>
			prev.includes(seatId)
				? prev.filter(id => id !== seatId)
				: [...prev, seatId]
		)
	}

	return (
		<div className='cinema-hall'>
			<h2>Оберіть місця для фільму ID: {movieId}</h2>
			<div className='screen'>Екран</div>

			<div className='seats-grid'>
				{Array.from({ length: rows }).map((_, rowIndex) => (
					<div key={rowIndex} className='seat-row'>
						{Array.from({ length: seatsPerRow }).map((_, seatIndex) => {
							const seatId = `${rowIndex + 1}-${seatIndex + 1}`
							return (
								<div
									key={seatId}
									className={`seat ${
										selectedSeats.includes(seatId) ? 'selected' : 'available'
									}`}
									onClick={() => toggleSeat(seatId)}
								>
									{seatIndex + 1}
								</div>
							)
						})}
					</div>
				))}
			</div>

			<div className='selected-seats-info'>
				<h3>Вибрано місць: {selectedSeats.length}</h3>
				<p>{selectedSeats.join(', ')}</p>
			</div>
		</div>
	)
}

export default CinemaHall
