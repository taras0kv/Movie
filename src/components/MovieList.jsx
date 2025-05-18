import React, { useState } from 'react'
import MovieCard from './MovieCard'

const MovieList = ({ movies }) => {
	const [searchTerm, setSearchTerm] = useState('')

	const filteredMovies = movies
		.filter(movie =>
			movie.title.toLowerCase().includes(searchTerm.toLowerCase())
		)
		.sort((a, b) => {
			// Сортуємо за позицією збігу у назві
			const aIndex = a.title.toLowerCase().indexOf(searchTerm.toLowerCase())
			const bIndex = b.title.toLowerCase().indexOf(searchTerm.toLowerCase())

			// Якщо збіг на початку назви - вище в результатах
			if (aIndex < bIndex) return -1
			if (aIndex > bIndex) return 1

			// Якщо однакова позиція - сортуємо за довжиною назви
			return a.title.length - b.title.length
		})

	return (
		<div className='movie-list-container'>
			<div className='search-bar'>
				<input
					type='text'
					placeholder='Пошук фільмів...'
					value={searchTerm}
					onChange={e => setSearchTerm(e.target.value)}
				/>
			</div>

			<div className='movie-columns'>
				<div className='movie-column'>
					{filteredMovies
						.slice(0, Math.ceil(filteredMovies.length / 2))
						.map(movie => (
							<MovieCard key={movie.id} movie={movie} />
						))}
				</div>
				<div className='movie-column'>
					{filteredMovies
						.slice(Math.ceil(filteredMovies.length / 2))
						.map(movie => (
							<MovieCard key={movie.id} movie={movie} />
						))}
				</div>
			</div>
		</div>
	)
}

export default MovieList
