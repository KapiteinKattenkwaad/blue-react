import './App.css';
import pokemons from './pokemon.json'
import Proptypes from "prop-types"
import {useState} from "react";

const pokies = pokemons.results

const PokemonRow = ({pokemon}) => {
    return (
        <tr>
            <td>{pokemon.name}</td>
            <td>{pokemon.type.join(', ')}</td>
        </tr>
    )
}

PokemonRow.propTypes = {
    pokemon: Proptypes.object,
    type: Proptypes.arrayOf(Proptypes.string),
    name: Proptypes.arrayOf(Proptypes.string),
}

function App() {
    const [filter, setFilter] = useState('')

    return (
        <div className="App">
            <h1 className='title'>
                Pokemon seach
            </h1>
            <input
                value={filter}
                onChange={(event) => setFilter(event.target.value)}
                type="search"/>
            <table width="100%">
                <thead>
                <tr>
                    <th>
                        Name
                    </th>
                    <th>
                        Type
                    </th>
                </tr>
                </thead>
                <tbody>
                {pokies
                    .filter((pokemon) => pokemon.name.toLowerCase().includes(filter.toLowerCase()))
                    .slice(0, 50)
                    .map((pokemon, index) => {
                    return (
                        <PokemonRow key={pokemon.name + index} pokemon={pokemon}/>
                    )
                })}
                </tbody>
            </table>
        </div>
    );
}

export default App;
