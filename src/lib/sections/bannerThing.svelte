<script lang="ts">
	export let videoBackground = '/videos/testCameleon.mp4';
</script>

<div class="banner">
	<video muted autoplay loop class="backgroundVideo">
		<source src={videoBackground} />
		<track kind="captions" src="" />
	</video>
	<div class="frontText">
		<h1>Olivia Vigneron</h1>
		<h2>Monteuse vidéo</h2>
	</div>
</div>

<style>
	.banner {
		height: 100vh;
		width: 100%;

		overflow: hidden;

		display: flex;
		flex-flow: column;
		justify-content: center;
		align-items: center;

		position: relative;
	}

	.frontText {
		display: flex;
		flex-direction: column;
		gap: var(--size-4);

		justify-content: end;
		align-items: left;

		width: 100%;
		height: 100vh;

		padding-left: 5rem;
		padding-bottom: 2rem;

		font-family: var(--font-humanist);
		letter-spacing: var(--font-letterspacing-1);

		background-color: rgba(0, 0, 0, 0.1);
		backdrop-filter: blur(0.3rem);

		color: var(--sand-1);
	}

	h1 {
		font-size: var(--size-7);
		font-weight: var(--font-weight-9);
	}

	h2 {
		font-size: var(--size-7);
		font-weight: var(--font-weight-1);
	}

	.backgroundVideo {
		z-index: -1;
		object-fit: cover;

		position: absolute;
		top: 0;
		left: 0;
		width: 100%;
		height: 100%;
		justify-content: center;
		align-items: center;
	}
</style>
