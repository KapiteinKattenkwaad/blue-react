import './App.css';
import {useEffect, useState} from "react";
import styled from "@emotion/styled"
import PokemonRow from "./components/PokemonRow";
import PokemonInfo from "./components/PokemonInfo";

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
