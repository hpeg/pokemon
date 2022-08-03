import React from 'react';
import { Route, Routes } from 'react-router-dom';
import './App.css';
import PokemonDetails from './pages/PokemonDetails/PokemonDetails';
import PokemonList from './pages/PokemonList/PokemonList';


function App() {
	return (
		<Routes>
			<Route path="/" element={<PokemonList />} />
			<Route path="/:pokemonName" element={<PokemonDetails/>} />
		</Routes>
	)
}

export default App;
