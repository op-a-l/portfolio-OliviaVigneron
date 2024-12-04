<script lang="ts">
	export let imgSrc, imgAlt;
</script>

<div class="container">
	<div class="imageContainer">
		<img src={imgSrc} alt={imgAlt} />
	</div>
	<div class="hoverBaby">
		<slot />
	</div>
</div>

<style>
	.container {
		display: flex;
		gap: var(--size-4);
		justify-content: center;
		align-items: center;

		position: relative;
		overflow: hidden;

		width: auto;
		aspect-ratio: var(--ratio-square);
	}
	:hover {
		transition: all;
		transition-duration: 300ms;
		backdrop-filter: blur(var(--size-2));
	}

	.imageContainer {
		overflow: hidden;
		position: absolute;

		display: flex;
		justify-content: center;
		align-items: center;

		aspect-ratio: var(--ratio-square);

		width: 100%;
		height: 100%;
	}

	img {
		object-fit: cover;
		width: 100%;
		height: 100%;
	}

	@media (min-width: 768px) {
		.container {
			width: var(--size-13);
		}
	}

	.hoverBaby {
		z-index: 10;
		color: transparent;

		display: flex;
		justify-content: center;
		align-items: center;

		width: 100%;
		height: 100%;
		font-family: var(--font-humanist);
		font-weight: bold;
		font-size: var(--font-size-4);
	}
	:hover {
		transition: all;
		transition-duration: 300ms;
		color: var(--pink-12);
	}
</style>
