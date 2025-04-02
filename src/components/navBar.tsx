type poke = {
	name: string;
	imgSrc?: string;
};

type pokeProps = {
	pokemonList: poke[];
	setPokemonName: (pokemonName: string) => void;
};

export default function NavBar({ pokemonList, setPokemonName }: pokeProps) {
	const handleClick = (pokemonName: string) => {
		setPokemonName(pokemonName);
		if (pokemonName === "pikachu") {
			alert("PIKA PIKA");
		}
	};
	return (
		<nav>
			{pokemonList.map((pokemon: poke) => (
				<button
					type="button"
					key={pokemon.name}
					onClick={() => handleClick(pokemon.name)}
				>
					{pokemon.name}
				</button>
			))}
		</nav>
	);
}
