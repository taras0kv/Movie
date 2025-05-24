import React, { useState } from 'react'
import { toast } from 'react-toastify'
import { saveBooking } from '../services/BookingService'

const BookingForm = ({ movieId, selectedSeats, onSuccess }) => {
	const [formData, setFormData] = useState({
		name: '',
		phone: '',
		email: '',
	})
	const [errors, setErrors] = useState({})

	const validate = () => {
		const newErrors = {}
		if (!formData.name) newErrors.name = "Ім'я обов'язкове"
		if (!formData.phone) newErrors.phone = "Телефон обов'язковий"
		if (!formData.email) {
			newErrors.email = "Email обов'язковий"
		} else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
			newErrors.email = 'Невірний формат email'
		}
		setErrors(newErrors)
		return Object.keys(newErrors).length === 0
	}

	const handleSubmit = e => {
		e.preventDefault()
		if (validate()) {
			saveBooking(movieId, selectedSeats, formData)
			toast.success('Бронювання успішно завершено!')
			onSuccess()
		}
	}

	return (
		<form onSubmit={handleSubmit} className='booking-form'>
			{}
		</form>
	)
}
