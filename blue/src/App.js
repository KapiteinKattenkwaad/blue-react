import './App.css';
import pokemons from './pokemon.json'
import Proptypes from "prop-types"
import {useState} from "react";

const pokies = pokemons.results

const PokemonRow = ({pokemon, onSelect}) => {
    return (
        <tr>
            <td>{pokemon.name}</td>
            <td>{pokemon.type.join(', ')}</td>
            <td onClick={() => onSelect(pokemon)}>
                <button>Select</button>
            </td>
        </tr>
    )
}

const PokemonInfo = ({national_number, name}) => {
    return (
        <div>
            <h2>
                {name}
            </h2>
            <p>
                {national_number}
            </p>
        </div>
    )
}

PokemonRow.propTypes = {
    pokemon: Proptypes.object,
    type: Proptypes.arrayOf(Proptypes.string),
    name: Proptypes.arrayOf(Proptypes.string),
    onSelect: Proptypes.func
}

PokemonInfo.propTypes = {
    name: Proptypes.string.isRequired,
    national_number: Proptypes.string,
}

function App() {
    const [filter, setFilter] = useState('')
    const [selectedItem, setSelectedItem] = useState(null)

    return (
        <div className="App">
            <h1 className='title'>
                Pokemon seach
            </h1>
            <input
                value={filter}
                onChange={(event) => setFilter(event.target.value)}
                type="search"/>
            <PokemonInfo {...selectedItem} />
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
                    .slice(0, 20)
                    .map((pokemon, index) => {
                        return (
                            <PokemonRow
                                key={pokemon.name + index}
                                onSelect={(pokemon) => setSelectedItem(pokemon)}
                                pokemon={pokemon}/>
                        )
                    })}
                </tbody>
            </table>

        </div>
    );
}

export default App;
