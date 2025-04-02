type Pkn = {
	name: string;
	imgSrc?: string;
};

/*interface PokeProps {
	pokemon: Pkn;
}*/

function PokemonCard({ pokemon }: { pokemon: Pkn }) {
	return (
		<figure className="pokemon-card">
			{pokemon.imgSrc === undefined ? (
				<p>???</p>
			) : (
				<img src={pokemon.imgSrc} alt="{pokemon.name}" />
			)}

			<figcaption>
				<h2>{pokemon.name}</h2>
			</figcaption>
		</figure>
	);
}

export default PokemonCard;
