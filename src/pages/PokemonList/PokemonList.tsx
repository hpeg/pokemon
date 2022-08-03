import React from 'react';
import PokemonTable from '../../components/layout/PokemonTable/PokemonTable';
import { PokemonListItem } from '../../models/Models';

interface PokemonListProps {}

interface PokemonListState {
    pokemon: PokemonListItem[];
}

class PokemonList extends React.Component<PokemonListProps, PokemonListState> {
    
    constructor(props: PokemonListProps) {
        super(props);
        this.state={
            pokemon: []
        }
    }

    componentDidMount() {
        this.getAllAuctions();
    }

    private getAllAuctions() {
        fetch("https://pokeapi.co/api/v2/pokemon/?limit=25")
        .then((response) => response.json())
        .then((response) => {
            this.setState({pokemon: response.results})}
        );
    }

	render() {
		return (
            <div className='page'>
                <h2>List of pokemon:</h2>
                <div>
                {this.state.pokemon.length === 0 && <div className='loading'>Loading...</div>}
                {this.state.pokemon && <PokemonTable pokemon={this.state.pokemon}/>}
                </div>
            </div>
		);
	}
}
export default PokemonList;
