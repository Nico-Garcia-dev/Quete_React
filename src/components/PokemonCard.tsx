function PokemonCard({ pokemon }) {
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
