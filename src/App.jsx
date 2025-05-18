import React from 'react'
import { movies } from './data/movies'
import MovieList from './components/MovieList'
import './App.css'

function App() {
	return (
		<div className='cinema-app'>
			<header className='header'>
				<h1>Кінотеатр "Планета Львів"</h1>
			</header>

			<main className='movie-container'>
				<MovieList movies={movies} />
			</main>

			<footer className='footer'>
				<p>© 2025 Кінотеатр "Планета Львів". Усі права захищені.</p>
			</footer>
		</div>
	)
}

export default App
