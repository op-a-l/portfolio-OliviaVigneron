<script lang="ts">
	export let data;

	const { titre, image, description, date, lien } = data.singleData;
</script>

<main>
	<div class="centerCard">
		<h1>{titre}</h1>
		<hr />
		<p>
			{description}
		</p>
		<span>{date}</span>
	</div>
</main>

<style>
	main {
		height: 100vh;
		width: 100%;

		display: flex;
		justify-content: center;
		align-items: center;

		background-image: var(--noise-4), var(--gradient-15);
	}

	.centerCard {
		height: 60%;
		width: 80%;
		overflow: scroll;

		font-family: var(--font-neo-grotesque);
		text-align: left;
	}

	hr {
		border: dotted;
		margin-bottom: 1rem;
	}

	h1 {
		margin-bottom: 1rem;
	}

	@media (min-width: 768px) {
		.centerCard {
			max-height: 75%;
			height: auto;
		}
	}
</style>
