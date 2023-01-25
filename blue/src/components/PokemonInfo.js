import Proptypes from "prop-types";

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

PokemonInfo.propTypes = {
    name: Proptypes.string,
    national_number: Proptypes.string,
}

export default PokemonInfo