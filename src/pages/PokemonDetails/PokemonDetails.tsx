import React, { useEffect } from 'react';
import { Link, useNavigate, useParams } from 'react-router-dom';
import { PokemonInformation } from '../../models/Models';
import './PokemonDetails.css'

function PokemonDetails() {

    const params = useParams();
    const navigate = useNavigate();

    const [pokemon, setPokemon] = React.useState<PokemonInformation| undefined>(undefined);
    const [description, setDescription] = React.useState<string| undefined>(undefined);

    useEffect(() => {
        fetch(`https://pokeapi.co/api/v2/pokemon/${params.pokemonName}`)
        .then((response) => response.json())
        .then((response) => {
            if(response?.error) {
                navigate('/')
            } else {
                setPokemon(response);
            }
        });

        fetch(`https://pokeapi.co/api/v2/pokemon-species/${params.pokemonName}`)
        .then((response) => response.json())
        .then((response) => {
            if(response?.error) {
                navigate('/')
            } else {
                setDescription(response.flavor_text_entries[0].flavor_text);
            }
        });

    }, [navigate, params.pokemonName]);


    if(pokemon) {
        return (
            <div className='page'>
            <p><Link to='/'>Back to list</Link></p>
            <h3 className='name'>{pokemon.name[0].toUpperCase() + pokemon.name.substring(1)}</h3>
            <div className='container'>
                <div className='details'>
                    <div className='size'>
                    <img src={pokemon.sprites.front_default} alt='Pokemon pic'/>
                        <div><span>Weight: </span>{pokemon.weight}</div>
                        <div><span>Height: </span>{pokemon.height}</div>
                    </div>
                    <div className='abilities'>
                        <h4>Abilities</h4>
                        {pokemon.abilities.map((ability) => {
                            return (
                                <div key={ability.ability.name}>
                                    <div>
                                    {ability.ability.name[0].toUpperCase() + ability.ability.name.substring(1)}
                                    </div>
                                </div>
                            )
                        })}
                    </div>
                    <div className='stats'>
                        <h4>Stats</h4>
                        {pokemon.stats.map((stat) => {
                            return (
                                <div key={stat.stat.name} className='statsContainer'>
                                    <div className='name'>
                                    {stat.stat.name[0].toUpperCase() + stat.stat.name.substring(1)}
                                    </div>
                                    <div>
                                        <p><span>Base Stat: </span>{stat.base_stat}</p>
                                        <p><span>Effort: </span>{stat.effort}</p>
                                    </div>
                                </div>
                            )
                        })}
                    </div>
                    <div className='moves'>
                        <h4>Moves</h4>
                        {pokemon.moves.map((move) => {
                            return (
                                <div key={move.move.name}>
                                    <div>{move.move.name[0].toUpperCase() + move.move.name.substring(1)}</div>
                                </div>
                            )
                        })}
                    </div>
                </div>
            </div>
            <div className='description'>
                <p className='descriptionTitle'>Description</p>
                <div>{description}</div>
            </div>
            </div>
            
        );
    } else {
        return (
            <p>Loading...</p>
        )
    }

    
}

export default PokemonDetails;
