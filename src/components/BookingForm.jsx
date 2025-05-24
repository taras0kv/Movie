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
		if (!formData.name.trim()) newErrors.name = "Ім'я обов'язкове"
		if (!formData.phone.trim()) newErrors.phone = "Телефон обов'язковий"
		if (!formData.email.trim()) {
			newErrors.email = "Email обов'язковий"
		} else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
			newErrors.email = 'Невірний формат email'
		}
		setErrors(newErrors)
		return Object.keys(newErrors).length === 0
	}

	const handleChange = e => {
		const { name, value } = e.target
		setFormData(prev => ({
			...prev,
			[name]: value,
		}))
	}

	const handleSubmit = async e => {
		e.preventDefault()
		if (validate()) {
			try {
				await saveBooking(movieId, selectedSeats, formData)
				onSuccess()
			} catch (error) {
				toast.error('Помилка при бронюванні: ' + error.message)
			}
		}
	}

	return (
		<form onSubmit={handleSubmit} className='booking-form'>
			<div className='form-group'>
				<label>Ім'я:</label>
				<input
					type='text'
					name='name'
					value={formData.name}
					onChange={handleChange}
					className={errors.name ? 'error' : ''}
				/>
				{errors.name && <span className='error-message'>{errors.name}</span>}
			</div>

			<div className='form-group'>
				<label>Телефон:</label>
				<input
					type='tel'
					name='phone'
					value={formData.phone}
					onChange={handleChange}
					className={errors.phone ? 'error' : ''}
				/>
				{errors.phone && <span className='error-message'>{errors.phone}</span>}
			</div>

			<div className='form-group'>
				<label>Email:</label>
				<input
					type='email'
					name='email'
					value={formData.email}
					onChange={handleChange}
					className={errors.email ? 'error' : ''}
				/>
				{errors.email && <span className='error-message'>{errors.email}</span>}
			</div>

			<button type='submit' className='submit-button'>
				Підтвердити бронювання
			</button>
		</form>
	)
}

export default BookingForm
