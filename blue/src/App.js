import './App.css';
import Proptypes from "prop-types"
import {useEffect, useState} from "react";
import styled from "@emotion/styled"
import Button from '@mui/material/Button';

const PokemonRow = ({pokemon, onSelect}) => {
    return (
        <tr>
            <td>{pokemon.name}</td>
            <td>{pokemon.type.join(', ')}</td>
            <td onClick={() => onSelect(pokemon)}>
                <Button variant="contained">Select</Button>
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
    name: Proptypes.string,
    national_number: Proptypes.string,
}

const Title = styled.h1`
    text-align: center;
`

const Input = styled.input`
     text-align: left;
  margin-right: auto;
  display: inline-block;
  margin-bottom: 2rem;
  border: 2px solid black;
`

function App() {
    const [filter, setFilter] = useState('')
    const [selectedItem, setSelectedItem] = useState(null)
    const [pokemons, setPokemon] = useState([])

    useEffect(() => {
        fetch('http://localhost:3000/blue-react/pokemon.json')
            .then((resp) => resp.json())
            .then((data) => setPokemon(data.results))
    }, [])

    return (
        <div className="App">
            <Title>
                Pokemon seach
            </Title>
            <Input
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
                {pokemons
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
