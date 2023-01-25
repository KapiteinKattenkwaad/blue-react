import './App.css';
import pokemons from './pokemon.json'
import Proptypes from "prop-types"

const pokies = pokemons.results.slice(0, 150)

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
    return (
        <div className="App">
            <h1 className='title'>
                Pokemon seach
            </h1>
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
                {pokies.map((pokemon, index) => {
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
