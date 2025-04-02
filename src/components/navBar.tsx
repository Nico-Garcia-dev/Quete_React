type poke = {
	name: string;
	imgSrc?: string;
};

type pokeProps = {
	pokemonList: poke[];
	setPokemonName: (pokemonName: string) => void;
};

export default function NavBar({ pokemonList, setPokemonName }: pokeProps) {
	return (
		<nav>
			{pokemonList.map((pokemon: poke) => (
				<button
					type="button"
					key={pokemon.name}
					onClick={() => setPokemonName(pokemon.name)}
				>
					{pokemon.name}
				</button>
			))}
		</nav>
	);
}
