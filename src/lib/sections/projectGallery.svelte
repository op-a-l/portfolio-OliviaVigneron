<script lang="ts">
	import { galleryData, Card } from '$lib/index';
	const limit = 8;
</script>

<div>
	<div class="grid">
		{#each galleryData.slice(0, limit) as { titre, image }}
			<Card imgSrc={image} imgAlt="">
				{titre}
			</Card>
		{/each}
	</div>
</div>

<style>
	.grid {
		display: grid;
		grid-template-columns: repeat(2, 1fr);

		gap: var(--size-3);

		background-image: var(--noise-5), var(--gradient-5);
	}

	@media (min-width: 768px) {
		.grid {
			grid-template-columns: repeat(2, 1fr);
			width: 100%;

			place-content: center;
		}
	}
</style>
