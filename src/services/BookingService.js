export const saveBooking = (movieId, seats, userData) => {
	const bookings = JSON.parse(localStorage.getItem('bookings') || {})
	const bookingId = Date.now().toString()

	bookings[bookingId] = {
		movieId,
		seats,
		userData,
		date: new Date().toISOString(),
	}

	localStorage.setItem('bookings', JSON.stringify(bookings))
	return bookingId
}

export const getBookingsForMovie = movieId => {
	const bookings = JSON.parse(localStorage.getItem('bookings')) || {}
	return Object.values(bookings)
		.filter(booking => booking.movieId === movieId)
		.flatMap(booking => booking.seats)
}
