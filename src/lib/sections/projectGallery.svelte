<script lang="ts">
	import { galleryData, Card } from '$lib/index';
	const limit = 8;
</script>

<div>
	<div class="grid">
		{#each galleryData.slice(0, limit) as { titre, image, id }}
			<a href="/{id}">
				<div class="flexContainer">
					<Card imgSrc={image} imgAlt="">
						{titre}
					</Card>
				</div>
			</a>
		{/each}
	</div>
</div>

<style>
	.grid {
		display: grid;
		grid-template-columns: repeat(2, auto);

		gap: var(--size-3);

		background-image: var(--noise-5), var(--gradient-5);

		padding: var(--size-3);
	}

	a {
		text-decoration: none;
	}

	@media (min-width: 768px) {
		.grid {
			grid-template-columns: repeat(3, auto);
			width: 100%;

			place-content: center;
			justify-content: center;
		}
	}
</style>
