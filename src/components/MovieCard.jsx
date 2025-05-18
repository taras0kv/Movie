import React from 'react'

const MovieCard = ({ movie }) => {
	return (
		<div className='movie-card'>
			<div className='poster-container'>
				<img
					src={movie.posterUrl}
					alt={movie.title}
					className='movie-poster'
					onError={e => {
						e.target.onerror = null
						e.target.src = 'https://via.placeholder.com/200x300?text=No+Poster'
					}}
				/>
			</div>
			<div className='movie-content'>
				<h2>{movie.title}</h2>
				<p className='movie-description'>{movie.description}</p>
				<div className='movie-details'>
					<span className='genre'>{movie.genre}</span>
					<span className='duration'>{movie.duration} хв</span>
				</div>
				<div className='sessions'>
					<h4>Сеанси:</h4>
					{movie.sessions.map((session, index) => (
						<div key={index} className='session'>
							<span className='session-time'>{session.time}</span>
							<span className='session-hall'>{session.hall}</span>
						</div>
					))}
				</div>
			</div>
		</div>
	)
}

export default MovieCard
