import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { PokemonListItem } from '../../models/Models';
import './PokemonList.css'

function PokemonList() {

    const [pokemon, setPokemon] = React.useState<PokemonListItem[]| undefined>(undefined);
    const [page, setPage] = React.useState<number>(0);
    const [searchName, setSearchName] = React.useState<string>('');
    const [searching, setSearching] = React.useState<boolean>(false);
    
    
    useEffect(() => {
        fetch(`https://pokeapi.co/api/v2/pokemon/${searchName}?limit=${20}&offset=${page*20}`)
        .then((response) => response.json())
        .then((response) => {
            setSearching(false);
            setPokemon(response.results);
        })
        .catch((e) => {
            setSearching(false);
        })
    }, [page, searchName]);

    function handleChange(event: React.ChangeEvent<HTMLInputElement>) {
        setPokemon([]);
        setSearching(true)
        setSearchName(event.target.value);
    }

    function changePage(pageNumber: number) {
        setPage(pageNumber)
    }

    function getDisplay() {
        if(searching) {
            return (
             <p>Searching...</p>
            );
         }
         else if (!pokemon || pokemon?.length < 1) {
            return (
                 <p>No Pokemon Found</p>
            );
         } else {
            return (
                <div>

                {pokemon.map((pokemon) => {
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
                <div>
                    <button disabled={page<1} onClick={() => changePage(page-1 < 0 ? 0 : page-1)}>
                        Back
                    </button>
                    <button disabled={!pokemon || pokemon.length===0} onClick={() => changePage(page+1)}>
                        Next
                    </button>
                </div>
                </div>
            )

        }
    }

    return (
        <div className='page'>
            <h2>List of pokemon:</h2>
            <div>
                <div>Search</div>
                <input onChange={handleChange}></input>
            </div>
            {getDisplay()}
        </div>
    );
    
}
export default PokemonList;
