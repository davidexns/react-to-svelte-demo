<script>
	// How do we state and fancy javascript stuff??
</script>

<svelte:head>
	<title>Game Overkill | Svelte</title>
</svelte:head>

<div class="container">
	<main>
		<header>
			<!-- We want to say something cool maybe? -->
		</header>

		<!-- <FloatingBox>
		</FloatingBox> -->

		<div class="content">
			<!-- Seems like content should go here probably maybe for sure perhaps -->
		</div>
	</main>
</div>

<style>
	h1 {
		margin: 0;
		line-height: 1.15;
		font-size: 1.8rem;
		font-family: 'Press Start 2P';
		letter-spacing: none;
		background: -webkit-linear-gradient(
			32deg,
			var(--pink400),
			var(--purple400),
			var(--pink400)
		);
		background-clip: text;
		text-align: center;
		-webkit-background-clip: text;
		-webkit-text-fill-color: transparent;
		-webkit-text-stroke: 0.5px var(--pink200);
	}

	@media (min-width: 480px) {
		h1 {
			font-size: 2.8em;
		}
	}

	@media screen and (min-width: 780px) {
		h1 {
			font-size: 4rem;
		}
	}

	.container {
		min-height: 100vh;
		min-width: 100vw;
		display: flex;
		flex-direction: column;
		align-items: stretch;
	}

	main {
		flex: 1;
		display: flex;
		flex-direction: column;
		align-items: center;
	}

	header {
		--header-background: var(--purple900);
		--header-border: var(--primary-teal);
		background: var(--header-background);
		background: linear-gradient(32deg);
		align-self: stretch;
		margin: 24px 32px 0px;
		padding: 96px 32px;
		border: 6px solid var(--header-border);
		border-radius: 64px;
		box-shadow: 0 0 12px 3px var(--header-border),
			inset 0 0 12px 4px var(--header-border),
			0 0 0 12px var(--header-background),
			4px 4px 18px 12px var(--header-border);
	}

	label {
		display: block;
		margin-block-end: 6px;
		letter-spacing: 0.075em;
	}

	form {
		display: flex;
	}

	.content {
		--content-box-inline-margin: 32px;
		max-width: 680px;
		width: calc(100% - var(--content-box-inline-margin) * 2);
		background: var(--purple700);
		box-shadow: 4px 4px 16px var(--pink600), inset 0px 0px 12px var(--pink600),
			8px 8px 1px var(--purple400), 16px 16px 1px var(--purple500),
			24px 24px 1px var(--purple600);
		padding: 24px;
		margin-block-start: 48px;
		margin-block-end: 32px;
		margin-inline-start: var(--content-box-inline-margin);
		margin-inline-end: var(--content-box-inline-margin);
		border: 4px solid var(--pink400);
		border-radius: 8px 0px;
	}

	ol {
		list-style: none;
		counter-reset: game-list-counter;
		margin: 0;
		padding: 0;
	}

	:global(ol li:not(:last-of-type)) {
		border-bottom: 2px solid hsl(251, 21%, 34%);
	}

	input {
		background: var(--purple900);
		color: var(--pink300);
		padding: 8px;
		border-radius: 4px;
		border: 2px solid var(--purple300);
		font-size: 1rem;
		min-width: 320px;
		font-family: 'Press Start 2P';
	}
</style>
