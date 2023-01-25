import Button from "@mui/material/Button";
import Proptypes from "prop-types";

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

PokemonRow.propTypes = {
    pokemon: Proptypes.object,
    type: Proptypes.arrayOf(Proptypes.string),
    name: Proptypes.arrayOf(Proptypes.string),
    onSelect: Proptypes.func
}

export default PokemonRow