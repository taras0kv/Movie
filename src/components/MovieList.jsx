import React, { useState } from 'react'
import MovieCard from './MovieCard'

const MovieList = ({ movies }) => {
	const [searchTerm, setSearchTerm] = useState('')

	const filteredMovies = movies.filter(movie =>
		movie.title.toLowerCase().includes(searchTerm.toLowerCase())
	)

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
					{filteredMovies.slice(0, 4).map(movie => (
						<MovieCard key={movie.id} movie={movie} />
					))}
				</div>
				<div className='movie-column'>
					{filteredMovies.slice(4, 8).map(movie => (
						<MovieCard key={movie.id} movie={movie} />
					))}
				</div>
			</div>
		</div>
	)
}

export default MovieList
