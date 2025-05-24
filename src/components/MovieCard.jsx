import React from 'react'
import { Link } from 'react-router-dom'

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
				<div className='movie-header'>
					<h2>{movie.title}</h2>
					<div className='movie-meta'>
						<span className='genre'>{movie.genre}</span>
						<span className='duration'>{movie.duration} хв</span>
					</div>
				</div>

				<div className='movie-description-container'>
					<p className='movie-description'>{movie.description}</p>
				</div>

				<div className='movie-footer'>
					<div className='sessions'>
						<h4>Найближчі сеанси:</h4>
						<div className='sessions-list'>
							{movie.sessions.slice(0, 3).map((session, index) => (
								<div key={index} className='session'>
									<span className='session-time'>{session.time}</span>
									<span className='session-hall'>{session.hall}</span>
								</div>
							))}
						</div>
					</div>

					<Link to={`/booking/${movie.id}`} className='book-button'>
						Забронювати
					</Link>
				</div>
			</div>
		</div>
	)
}

export default MovieCard
