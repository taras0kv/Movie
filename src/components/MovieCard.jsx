import React from 'react'

const MovieCard = ({ movie }) => {
	return (
		<div className='movie-card'>
			<img src={movie.posterUrl} alt={movie.title} className='movie-poster' />
			<div className='movie-details'>
				<h3>{movie.title}</h3>
				<p className='movie-genre'>{movie.genre}</p>
				<p className='movie-description'>{movie.description}</p>
				<div className='movie-sessions'>
					<h4>Сеанси:</h4>
					<ul>
						{movie.sessions.map((session, index) => (
							<li key={index}>
								{session.time} - {session.hall}
							</li>
						))}
					</ul>
				</div>
			</div>
		</div>
	)
}

export default MovieCard
