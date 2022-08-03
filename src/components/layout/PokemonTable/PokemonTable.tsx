import React from 'react';
import { Link } from 'react-router-dom';
import { PokemonListItem } from '../../../models/Models';
import './PokemonTable.css'
interface PokemonTableProps {
    pokemon: PokemonListItem[];
}

class PokemonTable extends React.Component<PokemonTableProps, {}> {

    render() {
        return (
            <div>
                <div>
                    {this.props.pokemon.map((pokemon) => {
                        return (
                            <div key={pokemon.name} className='row'>
                                <div>
                                <Link to={`/${pokemon.name}`}>
                                        {pokemon.name[0].toUpperCase() + pokemon.name.substring(1)}
                                </Link>
                                </div>
                            </div>
                        );
                    })}
                </div>
            </div>

        )
    }

}

export default PokemonTable;
