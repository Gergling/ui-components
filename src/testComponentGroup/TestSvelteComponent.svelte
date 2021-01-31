<script>
	const rawName = 'world';
	let name = [];
	let offset = 0;

	function colorise() {
		name = rawName
			.split('')
			.map((character, idx, all) => {
				const hue = 360 * ((idx + offset) % all.length) / all.length;
				return {
					style: `color: hsl(${hue}deg, 100%, 50%)`,
					character,
				};
			});

		offset += 1;
		offset %= rawName.length;
		setTimeout(colorise, 500);
	}

	colorise();
</script>

<h1>
	Hello
	{#each name as { character, style }}
		<span style={style}>{character}</span>
	{/each}
</h1>
