export const saveBooking = (movieId, seats, userData) => {
	return new Promise((resolve, reject) => {
		try {
			const bookings = JSON.parse(localStorage.getItem('bookings') || '{}')
			const bookingId = Date.now().toString()

			bookings[bookingId] = {
				movieId,
				seats,
				userData,
				date: new Date().toISOString(),
			}

			localStorage.setItem('bookings', JSON.stringify(bookings))
			resolve(bookingId)
		} catch (error) {
			reject(error)
		}
	})
}

export const getBookingsForMovie = movieId => {
	try {
		const bookings = JSON.parse(localStorage.getItem('bookings') || '{}')
		return Object.values(bookings)
			.filter(booking => booking.movieId === movieId)
			.flatMap(booking => booking.seats)
	} catch (error) {
		console.error('Error getting bookings:', error)
		return []
	}
}
